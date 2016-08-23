---
layout: post
title:  "elmasse-bundle: A Sencha Cmd Package"
category: extjs
tags: [extjs, cmd, i18n, package]
comments: true
---

The `Ext.i18n.Bundle` project is now available as a **Sencha Cmd Package**. The latest working version for ExtJS 5.1 is published in my public package repository.

The package is named `elmasse-bundle`.

## What do you need?
You need to have Sencha Cmd installed:

> Sencha Cmd: Install the latest version from [here](http://www.sencha.com/products/sencha-cmd/).

### Register a new repository
First, we need to register the repository so Sencha Cmd can look up for new packages:

```
$ sencha repo add elmasse http://elmasse.github.io/cmd/pkgs

```

## Usage

### Create a new ExtJS 5 Application
Let's create a new application so we can see how to use it:

```
$ sencha generate app -ext MyApp ./MyApp

```

### Edit app.json
Now we need to edit the `app.json` file (located under `MyApp` folder) and add the package as a dependency:

> app.json

```
{    
    ...

    "requires": [ "elmasse-bundle" ],

    ...
}
```

### Declare the bundle on the Application
Edit the `app/Application.js` file to add the require (\#1) and define the bundle configuration (\#2):

>app/Application.js

```js
Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',
    name: 'MyApp',
    // #1
    requires: ['Ext.i18n.Bundle'],

    // #2
    bundle: {
        bundle: 'Application',
        lang: 'en-US',
        path: 'resources/bundles',
        noCache: true
    },

    launch: function () {
        // ....
    }

});

```

### Add the bundle files
We defined our bundle as `Application` and the path where they will be published in our web server (`resources/bundles`). This means we need to create our Application_en-US.properties file under the resources/bundle folder:

> resources/bundles/Application_en-US.properties

```
message: This is a simple message
west.html: <div>This is a text that will be used as an <b>html tag</b></div>

```

### Use the bundle 
Almost there. We have all configured now, so we can start using our bundle. We can grab the bundle instance and ask for the desired message by a key:

> app/Application.js

```js
    launch: function () {
        console.log(this.bundle.getMsg('message'));
    }

```

This will print in the console the value of the message defined in our Application_en-US.properties file, when the application launch.

But we can also use the `lazy` definition in our views. Modify the `app/view/main/Main.js` around line 32:

```js
    // ...
    items: [{
        xtype: 'panel',
        // ...
        region: 'west',
        html: { type: 'bundle', key: 'panel.west.message' }, // <-- replace html with this
        // ...
    }]
    // ...

```

We can start the web server and watch for changes now:

```
$ sencha app watch

```

Open `http://localhost:1841` on your browser and you will see that your west panel now shows the message defined in our Application bundle.


## Features

- Read bundles in `.properties` or `.json` file formats.
- Use linked values for message keys.
- Lazy bundle objects


## Issues? 

The code is not yet available on the [Ext.i18n.Bundle](https://github.com/elmasse/Ext.i18n.Bundle) github repo but it will be there soon. You can post any issues [here](https://github.com/elmasse/Ext.i18n.Bundle/issues).
