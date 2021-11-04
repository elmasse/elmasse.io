---
title: So Long jekyll, Hello nextein!
description: Migrating My Blog into 100% Javascript
category: notes
tags: [blog, react, nextein, nextjs]
---

Over the last couple weeks I have been working on [nextein](https://nextein.now.sh). It is a blog / static site generator based on the great work of [Next.js](http://github.com/zeit/next.js). I decided then to migrate my own blog. I'm a Javascript developer. Writting a blog in **Markdown** is super simple. Having to deal with _ruby_ & _liquid_ was an experience I didn't like much. Don't get me wrong. _Jekyll_ is awesome and very versatile. But it is _ruby_. And _liquid_. And I'm not a _ruby_ developer.

So here I am. I'm gonna try to give you a hint of what I did for getting this blog running with **nextein**. 

---

## Jekyll

Jekyll is the _defacto_ for Github Pages. There are some concepts in jekyll (such as Layouts & Includes) that can be easily mapped to React components and other abstractions. 

## Nextein

As I mentioned, nextein is based on next.js. next.js is  **a minimalistic framework for server-rendered React applications**. In version 3 they added the feature to _export_ static html. That is **exactly** what I wanted for a blog engine: React server-rendering and generated static html.
nextein is an addition on top of next.js to simplify using Markdown to generate posts / pages.

## Migrating to nextein

First of all, we need node.js and npm. To get started we will need to create our npm project and install all dependencies: 

```bash
npm init -y
```

This will generate a `package.json` and we can tweak there the project name, description, author information, etc. This is not going to be published as a package. But it's nice to keep things clean.

```bash
npm i next react react-dom nextein@beta
```

We are almost ready to start. `nextein` requires to define a `next.config.js` file and define `next.js` configuration with `nextein` wrapper. Create a `next.config.js` file in your project root as follows:

> next.config.js

```js
const config = require('nextein/config').default;

module.exports = config({
    // put your next.js config here
});

```

We need to add the `npm scripts` for `dev` and `export`:

```json
{
	"name": "my-awesome-blog",
	"description": "Yeah, Awesome",
	"scripts":{
		"dev": "nextein",
		"export": "nextein build && nextein export"
	},
}

```


## Pages

The `pages` directory contains all `next.js` pages components. These means that if we want to have an `index` & `about` pages then we need to create `index.js` and `about.js` in here.

The `index.js` will be exported by default by `nextein`. To export  `about.js` we need to add it to the `exportPathMap` configuration from `next.js`

Back to our `next.config.js` we will add:

```js
const config = require('nextein/config').default;

module.exports = config({
	exportPathMap: function() {
		return {
			'/about': { page: '/about' }
		};
	}
});

```

## Includes & Layouts

In `jekyll` each post or page has a layout. You can also refactor common pieces and use includes to reuse them across different layouts.

With `nextein` the simple way to reason about this is to think of `/pages` as layouts and react components to replace your includes (you can place them whenever you like, I usually use `/components`)

## Posts

Posts follows pretty much the same logic as in `jekyll` except dates in post name are not required. The layout becomes the `page` in the post frontmatter.

> post-name.md

```md
---
page: post
title: Awesome Post
date: 2017-08-21
---

Here goes the content of your post.
```

This by default will generate an exported url as

`/post-name`

if you add a `category` in the post frontmatter

```md
---
page: post
title: Awesome Post
date: 2017-08-21
category: blog
---


```

this becomes available as:

`/blog/post-name`

## Displaying a list of posts

To display a list of posts in our `pages` we will use some of the HOCs (`withPosts`, `withPost`) and the `Content` tag provided by `nextein`.

> /pages/index.js

```js
import React from 'react'
import withPosts from 'nextein/posts'
import { Content } from 'nextein/post' 

export default withPosts(({ posts }) => {
	
	return (
		<div>
			<header>
				<h1>Welcome to my Blog</h1>
			</header>
			<div>
			posts.map((post, idx) => {
				<article key="post-${idx}">
					<h1>
						<a href={post.data.url}>{post.data.title}</a>
					</h1>
					<Content {...post} excerpt />
				</article>
			})
			</div>
		</div>
	)
})


```

That's pretty much all we need for displaying a list of posts in the `index` file.

## Rendering a Post

Now that we have the list of posts we will want to create the layout for our post. Remember the post front matter defined the **page** as `page: post`.  This means we need to create a `/pages/post.js` to display the post content.

> /pages/post.js

```js
import React from 'react'
import withPost, { Content } from 'nextein/post'

export default withPost(({ post }) => {
	return (
		<div>
			<h1>{post.data.title}</h1>
			<Content {...post} />
		</div>
	)
})

```

We can now run our dev server with `npm run dev` or export the site as a static version with `npm run export`


## Deploying with Github Pages 

One thing we need to add to our generated directory is an empty file `.nojekyll`. This is necessary since GithubPages will ignore files and folder that starts with underscore. Such as the case of the `_next` folder.

```bash
cat #nojekyll > .nojekyll
```

We can  add that file and copy it over the distribution directory (`./out` by default) using the `npm scripts`:

```json
{
	"scripts": {
		"dev": "nextein",
		"export": "nextein build && nextein export",
		"copy-nojekyll": "cp .nojekyll out/"
	}

}

```

We are now ready to do the actual deploy to Github Pages. I have used `gh-pages` module to commit the generated code to the desired branch.

If we are using a normal repository, we can push to a `gh-pages` branch, or change the distribution folder to point to `/docs`. The former is simpler and we have a separated branch for the code and the site files.

In case we are using an organization or user repository (usually named in the form of `<user|organization>.github.io`) in this case the only `branch` **that can be used is** `master`.

To avoid issues with this, it is recommendable to branch your code and use `gh-pages` to deploy to `master`

Let's add the module and make the changes in the `package.json` scripts.

```bash
npm i gh-pages
```

```json
	"scripts": {
		"dev": "nextein",
		"export": "nextein build && nextein export",
		"copy-nojekyll": "cp .nojekyll out/",
		"deploy": "npm run export && npm run copy-nojekyll && gh-pages -t -d out -b master "
	}
```

To summarize, the `deploy` script will run the export from `nextein`, copy the `.nojekyll` to the `./out` and push that directory (`-d out`) into the master branch (`-b master`). The `-t` option is needed to push files starting with a dot (remember we have that `.nojekyll` file?)

