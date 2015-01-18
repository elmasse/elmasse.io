---
layout: post
title:  "Composing Behavior"
description: cmd-plus as case study using traits & talents
categories: posts
tags: [nodejs, cocktail, traits]
published: false
---

Traits and Talents are mechanisms to compose behavior. This composition can be applied to a Class, an Object or even into another Trait or Talent. From a wide perspective, you can see them as Classes that only implement methods.

In this post I want to share my experience thinking in Traits. We often tend to design classes by identifiying nouns and grouping actions. And then, when we find out an action is performed by two or more nouns we end up _generalizing_ into a parent class to reuse the same piece of code.

## What does cmd-plus solve?

It is basically, a Command Line Interface (CLI). The idea is to run different commands based in the user input. There are some options that will trigger different tasks. Ultimately, the idea is to run sencha (The Sencha Cmd) process with the parameters specified.
We want to show a list of the current sencha cmd versions installed in our system; read the sencha.cfg file is we are executing in a sencha folder, and use the cmd version from that file; and display the version of our own cli. 

## Design

We can identify a few nouns given the small description in the paragraph above: cli, command, task, option. And also actions: run, show, read, execute.



