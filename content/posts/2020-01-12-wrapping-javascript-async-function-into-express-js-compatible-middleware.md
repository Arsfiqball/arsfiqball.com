---
title: Wrapping JavaScript Async Function into Express.js Compatible Middleware
date: 2020-01-12 15:00:00
tags: ['Programming']
---

Using async function is just like a regular function in Express. You can
actually just drop async function as middleware like this, without special
wrapper and still works. 🤷🏻‍♂️

```js
app.use(async function fn (req, res, next) {
  const users = await req.db('users')
  res.status(200).json({ users })
})
```

Then why do we need a wrapper, oh eh what is the purpose then? OK, allow me to
tell you that async function is actually just a regular function which always
return Promise. And you know what, Promise did not throw its error into system
nor callback. Instead, you should handle it with a catcher. Because of that,
when something wrong with your system and cause error inside this async function
the request is not killed because `next()` function never called. We should
catch the error and pass it into `next(err)` function. So the request will
respond error to the client and request is actually stopped. 🤔

```js
async function fn (req, res, next) {
  const users = await req.db('users')
  res.status(200).json({ users })
}

app.use(function (req, res, next) {
  fn(req, res, next).catch(err => {
    // here we actually handle the error
    next(err)
  })
})
```

### Make it elegant 🍵

Hmmm... ok it wraped now. But it will be more useful if the wrapper can be
reused as a simple function like this. Just using `wrap` function.

```js
app.use(wrap(async function (req, res, next) {
  const users = await req.db('users')
  res.status(200).json({ users })
}))
```

So here is the wrapper function. You can handle variety of error thrown by
libraries like mongoose which has `ValitationError` thrown when data type is
invalid. With the handler below you can catch them and respond 422 status to
client instead of 500.

```js
function wrap (fn) {
  return function (req, res, next) {
    return fn(req, res, next).catch(err => {
      // handle general error here
      next(err)
    })
  }
}
```

That's it 🙂

---

### References

* GitHub Gist: [Wrap async function to express compatible middleware](https://gist.github.com/Arsfiqball/17d47bba6bc269b25df883ec3933a334)
* Mozilla Developer Network: [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* Express.js: [Writing Middleware](https://expressjs.com/en/guide/writing-middleware.html)
