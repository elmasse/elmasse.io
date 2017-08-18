---
layout: post
title:  "Building a Slack bot with WebTasks"
category: js
tags: [slack, nodejs, bots, webtasks]
comments: true
---

Yes, yet another post on how to create a serverless bot for Slack. In this post we are going to explore how to use WebTasks to create a very simple bot for Slack. _"What is a WebTask?"_ you might ask. Well, it can be defined as a code snippet that you can run on an HTTP call.

## Getting Started
We will need to install and configure the WebTasks module.

```bash
npm i -g wt-cli
wt init
```
Here is a little example you can try. Create a `hello.js` file with the following content:

> hello.js

```js
module.exports = function (cb) {
  cb(null, 'hello webtasks!');
}
```

Then create the WebTask using:

```bash
wt create hello.js
Webtask created

You can access your webtask at the following url:

https://some-random-uri-here.run.webtask.io/hello
```

That's it. Now you can run the WebTask using `curl`:

```bash
curl https://some-random-uri-here.run.webtask.io/hello
"hello webtasks!"
```
 
Check [WebTask.io](https://webtask.io) to learn more.

## Creating a Slackbot

We will create a simple Slackbot to retrieve `npm stats` using WebTask. 

### How a Slackbot works?

The first step is to understand how a Slackbot works. Basically, it is a slash command. Slack will take whatever text you enter and send it to an URL. Then it will display the result as any other message.

In this case, we are going to use a Serverless architecture. That means we will use the a WebTask to reply to a command. 

### Create your WebTask 

Our WebTask will return the stats of a given npm package. That means we need to receive parameters in our WebTask. 

