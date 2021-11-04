---
title:  Decorators with ES7
description: Exploring Decorators and Bindings
category: guides
tags: [es7, nodejs, decorators, bind-operator]
---

Next ES7 version has some experimental functionality that can be explored today using [babel](https://babeljs.io). Among other functionality, we have access to an experimental feature called **decorators**.

## What's a decorator?
From the decorator proposal [repository](https://github.com/wycats/javascript-decorators):

>Decorators make it possible to annotate and modify classes and properties at design time.
>
Decorators restore the ability to run code at design time, while maintaining a **declarative** syntax.

Basically, we can define a decorator for a `class` or a `property`:

>class decorator

```js
function testable (target) {
    target.isTestable = true
}

@testable
class MyTestableClass () {}

console.log(MyTestableClass.isTestable) // true

```

If we want to pass parameters we can define the decorator function as a factory:

```js
function testable(isTestable) {
    return function(target) {
        target.isTestable = isTestable
    }
}

@testable(true) class MyTestableClass () {}
console.log(MyTestableClass.isTestable) // true

@testable(false) class MyClass () {}
console.log(MyClass.isTestable) // false

```

You can read more from the proposal about how to define property decorators.

## Applying Mixins Declaratively
One of the things I really like is to use Mixins (actually not mixins but traits, but we will talk about it later in this post). In ES5 we can merge prototypes using an `Object.assign` polyfill, underscore or lodash (_.extend):

```js
var assign = require('object.assign');

function Foo () {};
Foo.prototype.foo = function() { console.log('foo'); };

function MyClass () {}
assign(MyClass.prototype, Foo.prototype);

var obj = new MyClass();
obj.foo(); // 'foo'
```

In ES6 we cannot simply use a `prototype` as a mixin. When defining a `class` using the new syntax, all methods are not enummerable by default. `Object.assign` will only merge the **enummerable methods** from the given objects.

We can use Objects as mixins and then apply them using `Object.assign`:

```js
const Foo = {
    foo() { console.log('foo') }
}

class MyClass {}

Object.assign(MyClass.prototype, Foo)

let obj = new MyClass()
obj.foo() // 'foo'
```

This is Imperative style. Now, what if we can do the merge right when we are declaring the class? Let's create a simple decorator to help us here:

>mixins.js

```js

export function mixins(...list) {
    return function (target) {
        Object.assign(target.prototype, ...list)
    }
}

```

Now we can import the new module and define our class **declaratively**

```js
import { mixins } from './mixins'

const Foo = {
    foo() { console.log('foo') }
}

@mixins(Foo)
class MyClass {}

let obj = new MyClass()

obj.foo() // 'foo'

```

**Update:** I run accross this npm module [mixins-decorator](https://www.npmjs.com/package/mixins-decorator) which already provides this functionality, plus, it makes class defined methods to take precedence over mixins (which is better than the simplest solution presented here).

## Traits
I mentioned before I really like the idea of Traits. While mixins are ok, there are sometimes when you need a bit more control on what you want to merge. Traits allow us to avoid any name collision between the functionality that is being merged. We can exclude methods from a given Trait, or change the name of the method using aliases.

The only thing that is required is that **a Trait does not define state**.

The good part is **we can use ES6 classes as Traits**. 

I have been working on [CocktailJS](http://cocktailjs.github.io), a library to define annotations, traits and classes in a more **declarative** way. So, with all this new functionality as decorators, I wanted to review the library in itself and see if we can do something simpler.

The answer is *yes, of course we can*! Check [traits-decorator](https://github.com/CocktailJS/traits-decorator)! This is an experimental library to use decorators and bind-operators.

```js

import {traits } from 'traits-decorator'

// Trait as a Class
class TFoo {
    foo() { console.log('foo') }
}

// Trait as an Object
const TBar = {
    bar() { console.log('bar') }
}

@traits(TFoo, TBar)
class MyClass { }

let obj = new MyClass()
obj.foo() // foo
obj.bar() // bar
```

### Conflicts
We will have an error if any of the Traits or even the host class have a name collision:

> name collision on method foo

```js

import {traits } from 'traits-decorator'

// Trait as a Class
class TFoo {
    foo() { console.log('foo') }
}

// Trait as an Object
const TBar = {
    bar() { console.log('bar') },
    foo() { console.log('uuups') }
}

@traits(TFoo, TBar)
class MyClass { }
//....
```

```bash
index.js:36
    throw new Error('Method named: ' + methodName + ' is defined twice.');
          ^
Error: Method named: foo is defined twice.
...
```

This will give you an error since we have the method `foo` defined twice in `TFoo` and `TBar`. Traits makes the developer responsible to resolve this conflict in opposite to mixins where TFoo's `foo` will be overriden by TBar's foo.

To solve the conflict we can exclude the foo method we don't need or create an alias to change the name:

> solving conflict by excluding the method

```js

import { traits, excludes } from 'traits-decorator'

// Trait as a Class
class TFoo {
    foo() { console.log('foo') }
}

// Trait as an Object so we can reuse our mixins with more control!
const TBar = {
    bar() { console.log('bar') },
    foo() { console.log('uuups') }
}

@traits(TFoo, TBar::excludes('foo'))
class MyClass { }

let obj = new MyClass()
obj.foo() // foo
obj.bar() // bar

```


You will notice a little thing here: we are using `::` the bind-operator in the traits definition.

Basically the bind operator allow us to execute a given method as it were part of the object, in this case the Trait class or object.

In order to use these particular functionality we need to enable stage 0 from babel experimental features.

## Final Words
I really like the idea of decorators and bind operator. I think they are pretty helpful specially to write cleaner and more maintainable code.




