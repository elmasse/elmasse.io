---
title: Filtering React Children
description: A Short Note on applying a filter for React Children.
tags: [react]
category: pills
---

Trying to filter React children based in a name or type of the child is a tricky option. 

The main problem resides on the idea of using a function’s name to distinguish between kinds or types. The problem arises when you try it on a minimized version. The name of the function is no longer what you expected.. 

To solve this problem, we can add a simple default prop to keep track of the differentiator 

```js
function Item () {}

Item.defaultProps = {
  __type : “Item”
}
```

Now we can filter children using a filter function:

```js
React.Children.toArray(children).filter(itemsOnly)

function itemsOnly (child) {
  return child.props.__type === “Items”
}
```