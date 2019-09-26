---
title: Babel or Webpack?
description: Should I Transpile or Bundle My Code?
tags: [webpack, babel, transpiler, bundler]
category: js
permalink: /:category?/:name.html
published: false
---

Last year I started to work on several projects. Libraries, websites, apps, SDKs, etc. Each of them has its own requirements and different audiences. How a library is consumed is completely different from how a website or an app is deployed. I have also experimented with monorepos (lerna) and workspaces (yarn). This post aims to describe a few different scenarios.

Let's start digging into the differences first between _Transpilers_ and _Bundlers_.

### Transpilers

Even though if you visit [babel site](https://babeljs.io) it says _"Babel is a JavaScript compiler"_, I think the term `transpiler` is more accurate. There is a lot of discussion out there but I like these definitions from [Wikipedia](https://en.wikipedia.org/wiki/Source-to-source_compiler):

> **Compiler** - translates source code from higher level language to lower level language.  
> "C compilers (C to machine code), javac tool of JDK (java to byte code)."_  
> **Transpiler** - a type of compiler that translates between source codes at the same level of abstraction.  
> "Babel (ES6+ to ES5) - which you can use to write ES6 code while still supporting older browsers like IE 11 and below."_
  
From [babel docs](https://babeljs.io/docs/en/)

> Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.  

A transpiler will be used to convert language features that are not yet supported to a baseline JavaScript version. The target version will vary depending on which platforms are you building for: Browsers, NodeJS, etc. and their respective versions.

### Bundlers

From [webpack concepts](https://webpack.js.org/concepts/)

> At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

Bundlers are helpful to eliminate unused code, generate minified versions and optimizing the result for one or more targets. 

---

## When to Use What?

---

### Monorepos / Workspaces modules

There are a few decisions to make when you want to use a monorepo or workspace. How are you going to publish and consume your modules? What kind of modules do you have (micro-services, helpers, utils, components)? 
