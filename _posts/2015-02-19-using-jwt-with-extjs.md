---
layout: post
title:  "Using JWT Tokens with Node & ExtJS 5"
categories: nodejs
tags: [jwt, nodejs, express, api, extjs]
comments: true
---

This post will guide you on how to create a simple **ExtJS 5** application to consume a server side api secured with JWT tokens. If you are not familiar with **JWT** you can read more about it [here](http://jwt.io/).

Let's start defining a few endpoints for our application:

- `/authenticate`: Given a User/Password, it will retrieve the JWT token if the user is valid.
- `/api`: This is our secured api.
- `/api/bookmarks`: An endpoint to save, update, delete and retrieve bookmarks.

## NodeJS
We can start by creating a new project: 

```
mkdir jwt-test
cd jwt-test
npm init
```
Install `express`, `body-parser`, `express-jwt` and `jsonwebtoken`:

```
npm i -S express express-jwt jsonwebtoken body-parser
```

Create a `public` folder where we are going to publish our ExtJS application:

```
mkdir public
```

Let's start by creating an express app and define some endpoints:

> server.js

```js

'use strict';

var express = require('express');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');

var secret = 'Your4w3s0me-S3cr3t';

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(__dirname + '/public/Bookmarks'));

// protect our api
app.use('/api', expressJwt({secret: secret}));

//@endpoint [/authenticate]
app.post('/authenticate', function (req, res) {
    //retrieve here your user from a DB or a third party service
    var username = req.body.username;
    var password = req.body.password;

    if ( !(username === 'hello' && password === 'world') ){
        res.status(401).body('User or password not valid');
    }

    var user = {
        name: 'Hello World',
        email: 'hello@world.com',
        id: 999
    };

    // generate the jwt token with our user info
    var token = jwt.sign(user, secret, {expiresInMinutes: 120});

    // the user object **is** included inside the token!

    res.json({
        user: user, // this is only intended to get a reference in our extjs app
        token: token
    });
});

//@endpoint [/api/bookmarks]
//@method GET
app.get('/api/bookmarks', function (req, res) {

    // By default, the decoded token is attached to req.user but can be configured.
    // var userId = req.user.id;

    // now retrieve a list of bookmarks based on the userId
    var bookmarks = [
        {id: 1001, name: 'sencha', url: 'http://www.sencha.com'},
        {id: 1002, name: 'jwt.io', url: 'http://jwt.io'}
    ];

    res.json({data: bookmarks});
});

//define more endpoints here
// ...

app.listen(3000, function() {
    console.log('Express server listening on port 3000');
});


```

## ExtJS Application
Create a new application using `Sencha Cmd`:

```
sencha generate app -ext Bookmarks ./public/Bookmarks

```

### Login
For login we will create a panel and a ViewController. The LoginController will be responsible to make the ajax call and store the token into the localStorage

> app/view/login/Login.js

```js

Ext.define('Bookmarks.view.login.Login', {
    extend: 'Ext.Panel',
    xtype: 'login',

     requires: [
        'Bookmarks.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    plugins: 'viewport',

    layout: 'center',

    items: [{
        bodyPadding: 10,
        title: 'Login Window',
        width: 400,
        items: {
            xtype: 'form',
            reference: 'form',
            items: [
                {
                    xtype: 'textfield',
                    name: 'username',
                    fieldLabel: 'Username',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'password',
                    inputType: 'password',
                    fieldLabel: 'Password',
                    allowBlank: false
                },
                {
                    xtype: 'displayfield',
                    hideEmptyLabel: false,
                    value: 'Enter your username and password'
                }
            ],
            buttons: [
                {
                    text: 'Login',
                    formBind: true,
                    listeners: {
                        click: 'doLogin'
                    }
                }
            ]
        }
    }]
});


```

> app/view/login/LoginController.js

```js

Ext.define('Bookmarks.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    doLogin: function () {
        var me = this,
            view = this.getView(),
            form = view.down('form');

        Ext.Ajax.request({
            url: '/authenticate',
            method: 'POST',
            jsonData: form.getValues(),
            success: function (response) {
                 var data = Ext.decode(response.responseText);
                 if (data.token) {

                    view.destroy();

                    me.saveToken(data.token);

                    Ext.widget('app-main');
                 }
            },
            failure: function() {
                me.clearToken();
                Ext.Msg.alert('Error','Username or Password not valid!');
            }
        });
    },

    saveToken: function (token) {
        localStorage.setItem('user-token', token);
    },

    clearToken: function () {
        localStorage.removeItem('user-token');
    }
});


```

### Bookmarks Grid and Store

Our Main view will hold a grig where we are going to show the data from the server. The Store will be defined into a ViewModel and the ViewController will be responsible to set the token for the authorization header

> app/view/main/Main.js

```js

Ext.define('Bookmarks.view.main.Main', {
    extend: 'Ext.tab.Panel',
    requires: [
        'Bookmarks.view.main.MainController',
        'Bookmarks.view.main.MainModel',
        'Ext.grid.Panel'
    ],

    plugins: 'viewport',

    xtype: 'app-main',

    controller: 'main',

    viewModel: {
        type: 'main'
    },

    items: [
        {
            xtype: 'grid',
            title: 'Bookmarks',
            bind: '{bookmarks}',
            columns: [
                { text: 'Name', dataIndex: 'name', flex: 1 },
                { text: 'Url',  dataIndex: 'url' , flex: 1 }
            ]
        }
    ]
});

```

> app/view/main/MainController.js

```js

Ext.define('Bookmarks.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    init: function () {
        this.getTokenFromLocalStorage();
    },

    getTokenFromLocalStorage: function () {
        var token = localStorage.getItem('user-token');

        this.getViewModel().set('token', token);
    }

});

```

> app/view/main/MainModel.js

```js

Ext.define('Bookmarks.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Bookmarks'
        // token: will be set later
    },

    stores: {
        bookmarks: {
            autoLoad: true,
            fields: ['name', 'url'],
            proxy: {
                type: 'rest',
                api:{
                    read: '/api/bookmarks'
                },
                headers: {
                    'Authorization' : 'Bearer {token}'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }
});

```

### Application
We will show the main view if the user is already logged in. We will check if the token is present when the application launches. If not we show the login.

> app/Application.js

```js

Ext.define('Bookmarks.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Bookmarks',

    views: [
        'login.Login',
        'main.Main'
    ],
    
    launch: function () {
        var token = localStorage.getItem('user-token');

        Ext.widget(token ? 'app-main' : 'login');
    }
});

```

### app.js
Finally, we need to remove the autoCreateViewport from the app.js

> app.js

```js

Ext.application({
    name: 'Bookmarks',

    extend: 'Bookmarks.Application'
    
    // autoCreateViewport: 'Bookmarks.view.login.Login'

    
});

```

## Running the Application
Let's first refresh our ExtJS app. Go to `jwt-test/public/Bookmarks` folder and run:

```
sencha app refresh

```

Now we can start our server. Just run the server.js on `jwt-test` folder:

```
node server.js

```

Point your browser to [http://localhost:3000/](http://localhost:3000/) and login using **hello** as username and **world** as password. Then refresh the page and you should not be prompted to enter your user again.

## Code
All the code is available on [ext-jwt-test](https://github.com/elmasse/ext-jwt-test) github repository.
