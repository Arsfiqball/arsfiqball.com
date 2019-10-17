---
title: 'Routing in static site like a dynamic site, is it possible?'
date: 2018-09-09 15:29:55
tags: ['Programming']
---

Last night, I built a simple package called [arsf-static-route](https://github.com/Arsfiqball/static-route) 🍌 to solve my problem when building static site for Events and Brands. The tool basically have two main function: compile and serve which can be used the same way in implementation. In short, you can choose mode "serve" when you are developing the site and "compile" when you want to generate html files of it. 🚀

<!-- more -->

Before we get started to the code, I want to explain the reason why I built this package. 😕 Also why I'm not just using existing engine like hexo, hugo, jekyll etc. 😕

#### Reason #1: It's different case 🙅🏻‍♂️

First, because it's different case. Most of static site generators are created mainly to support markdown files, apply it to templates and publish it as a webpages. That's why most of the time it is effective for blogs and feeds. But what I want to build is a site for Events, Brands and Portfolio which is a way need more templates than data (ex. markdown).

If you are doing more writing than designing, static site generator is appropriate. But if you are doing more designing, most of the time you are more confortable using plain html. But you know you need more than html to speed up the designing. You need the power of template engines, a few sharable data and configuration. So your webpages, are more flexible and easy to modularize.

#### Reason #2: Request Response is more convinient 🙋🏻‍♂️

Most of static site generators using stream and pipe to load data (ex. markdown) and apply it to templates. If file changes happen, then it will do that again. In short, our custom logic could only goes to template (aarggh you wont) or front-matter like markdown (argghh not) or stream/pipe (frustrating).

If you remember yourself when building a dynamic website, you are not doing like that. What you use is **router** and **controller** and **model** and **view** and bla bla bla. That's more convinient for web developer, much easier to make a custom functionality. I want to do it like that! 😴😴

#### But, is it possible? 😕

I bet most of you say "yes possible, but..." Yeah in most cases, using stream is more appropriate because it's a lot faster! 😠 Like I say in the Reason #1, I have different cases. I need more design, not more data. You got that? 😕

#### Let's code 🖊️

So, here is copy pasted example from [arsf-static-route](https://github.com/Arsfiqball/static-route) (eh you need to ``yarn add arsf-static-route`` first)

```js
// index.js
const staticRoute = require('arsf-static-route')

staticRoute('serve', router => {
  router('/', ctx => ctx.send('Hello World'))
  router('/about', ctx => ctx.send('This is about page'))
})
```

Test it by running ``node index.js``, it will serve the site in ``localhost:3000``. You can try to visit ``/`` and ``/about``. That is the simplest example I put on the readme.

In that code, staticRoute running in ``serve`` mode. You can switch it to ``compile`` mode and run ``node index.js`` again. It should now output the html files to ``dist`` folder.

But, how about template engines, custom logics etc I talk about in Reason #2? I will give you 1 example how to use **Pug** template engine.

First create a template:
```html
// src/pages/index.pug
doctype html
html(lang='en')
  head
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width')
    title hello
  body
    h1 hello world
```

And then modify your ``index.js``:
```js
// index.js
const staticRoute = require('arsf-static-route')
const path = require('path')
const pug = require('pug')

const mode = process.env.NODE_ENV === 'production' ? 'compile' : 'serve'

const render = (pathname, data) => {
  const location = path.resolve(__dirname, 'src/pages', pathname)
  return pug.renderFile(location, data)
}

staticRoute(mode, router => {
  router('/', ctx => {
    ctx.send(render('index.pug'))
  })
  router('/about', ctx => ctx.send('This is about page'))
})
```

**At line 15**: I made a call to function ``render`` defined at line 8 which transform the .pug file into html format and pass it to ``ctx.send``. So, when we visit ``/`` it will gives you rendered version of ``index.pug``.
**At line 13**: I replace string 'serve' with variable ``mode`` defined at line  6. So you can run ``NODE_ENV=production node index.js`` to compile webpages.

#### Further more 🚩

You can do much more like importing JSON or Yaml file contains website name, description, meta, and all shareable data. You can load markdown and apply it to any templating engine you like.

For the next, I want to make it able **handling parameter** of route like ``/user/:name``, integrate it with **webpack**, and make it able to **autoreload** the browser whenever changes made to related files. That will be cool, and speed up development of static site for Events, Brands and Portfolio.

🙃
