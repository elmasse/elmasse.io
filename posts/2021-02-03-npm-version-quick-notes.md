---
title: Working with npm & semver.
description: A quick set of notes on versions, semver, channels, and npm.
tags: [npm, js, semver]
category: guides
---

The main reason of this post is to draft a quick note on using npm and versions.
More specifically, a short how-to guide on publishing modules and consuming them using npm channels and semver ranges. Not a real how-to, but more like a how do I deal with these things.

As a side note, this could be considered sort of quick summary of concepts from semver and npm documentation.

## Main Concepts

You should be familiar with the main concepts such as **version**, **ranges** and **channels**. 

- The **version** is described by the [semver.org](https://semver.org/) document.
- A **version range** is a set of comparators which specify versions that satisfy the range. See the [npm](https://docs.npmjs.com/cli/v6/using-npm/semver#ranges) documentation for an exhaustive description and cases. We will be focused on the tilde `~` and caret `^` ranges.
- A **release channel** or distribution tags (dist-tags) are human-readable labels that you can use to organize and label different versions of packages you publish. See more at the [npm](https://docs.npmjs.com/cli/v6/commands/npm-dist-tag#purpose) documentation.


## Incrementing Versions

From the [semver.org](https://semver.org/) document. 

Given a version number **MAJOR.MINOR.PATCH**, increment the:

 - **MAJOR** version when you make incompatible API changes,  
 - **MINOR** version when you add functionality in a backwards compatible manner, and  
 - **PATCH** version when you make backwards compatible bug fixes.   
 
Additional labels for pre-release and build metadata are available as extensions to the **MAJOR.MINOR.PATCH** format.

These are basic rules of how and when to increment versions and introduces the concept of **MAJOR**, **MINOR** and **PATCH**. 

## Pre-release

A pre-release version indicates that the version is unstable and might not satisfy the intended compatibility requirements as denoted by its associated normal version.

## Version Precedence

From the [semver.org](https://semver.org/) document. 

Precedence refers to how versions are compared to each other when ordered.

Precedence MUST be calculated by separating the version into major, minor, patch and pre-release identifiers in that order (Build metadata does not figure into precedence).

Precedence is determined by the first difference when comparing each of these identifiers from left to right as follows: Major, minor, and patch versions are always compared numerically.

```
1.0.0 < 2.0.0 < 2.1.0 < 2.1.1.
```

When major, minor, and patch are equal, a pre-release version has lower precedence than a normal version:

```
1.0.0-alpha < 1.0.0.
```

Precedence for two pre-release versions with the same major, minor, and patch version MUST be determined by comparing each dot separated identifier from left to right until a difference is found as follows:

Identifiers consisting of only digits are compared numerically.

Identifiers with letters or hyphens are compared lexically in ASCII sort order.

Numeric identifiers always have lower precedence than non-numeric identifiers.

A larger set of pre-release fields has a higher precedence than a smaller set, if all of the preceding identifiers are equal.

## Exploring Pre-release & Channels

As noted before, the release channel (dist-tag) is not part of semver, but it helps to organize and label different versions of packages you publish.
Combining the dist-tag with pre-release version is a very common practice. But we should be careful to not use them as the same thing. 

Usually, we don't want to get users on the latest channel (the default channel in npm when no dist-tag is used) to consume any pre-release version. 
Using both the pre-release version and the dist-tag we can mitigate this problem and we can let users to consume our beta versions if they wanted to do so.

The most important part here is to keep in mind the versions precedence and the version ranges.

Using a `beta` pre-release and dist-tag as an example we could elaborate a set of possible scenarios:

- Publish your first version as `1.0.0-beta.0` into `beta` release channel.
- Consume the latest from `beta` using `npm i example@beta`.
- Keep publishing `1.0.0-beta` versions.
- Promote `1.0.0-beta.10` to release and publish `1.0.0` to `latest` channel.
- Publish a pre-release minor (`1.1.0-beta.0`) to `beta`.

> **Note**: Publishing a pacakge with a dist-tag to `npm` as the first artifact will set the same version for latest channel.

- Installing from `beta` will pull `1.1.0-beta.0`.
- Installing from `latest` will pull `1.0.0`.
- Having range `"~1.0.0-beta.0"` will pull `1.0.0`.
- Having range `"~1.0.0"` will pull `1.0.0`.
- Having range `"~1.1.0-beta.0"` will pull `1.1.0-beta.0`.

These are just a few possible options. It is important to remark here that `channels` are not buckets. Instead, they just provide a simple pointer to get the latest version with a given tag and are useful when using just the `channel` in installing commands.
