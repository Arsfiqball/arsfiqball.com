---
title: JavaScript Dependency Injection and Its Benefit in Unit Testing
date: 2018-09-14 20:07:34
tags: ['Programming']
---

First of all, what is "Dependency Injection"? 😕 According to my self understanding: Dependency Injection is simply passing module or function depend by your function into your function parameters/arguments. So instead of this:

<!-- more -->
```js
const http = require('http')

function serve () {
    const server = http
        .createServer((req, res) => res.end('hello world'), 'utf8')
    server.listen(3000)
}

// call the serve function
serve()
```

You need to write it like this:

```js

function serve ({ http }) {
    const server = http
        .createServer((req, res) => res.end('hello world', 'utf8'))
    server.listen(3000)
}

// call the serve function
const http = require('http')
serve({ http })
```

Why this is good practice? And how can this method makes unit test easier? 😐

### Easier to isolate (means good for unit test)
When you pass it like that, you can do whatever you want to the module before passing it to the function. Remember that your function, does not care of all what http module can do. It **only aware of function createServer** which should be implemented like that. Don't make your function distracted by the things outside it. Let it does only its job 😤

Before talking about isolation, we need to talk about side effect. What is side effect? 😐 I'll give you examples:
1. Saving or getting data from database, it's side effect because you are affecting system (database service) outside yours.
2. Listening to port in http server, it's side effect because you are affecting networking system.
3. Making a http request to an URL, it's side effect because you are affecting network.
4. Calling object outside your function is also side effect.
5. Get a value from environment variable is also side effect.

In unit testing, we don't want to actually listen to 3000. We just want to expect that our function ``serve`` really call the ``server.listen`` correctly. We need to isolate them and wont our function does side effect, but still want to use ``server.listen`` in our function. Because it's the way we actually implement in the real code 🚀

So how to isolate it from side effect? Mocking... 🚑

### Easier to "Mock"
Why we need to mock the module in unit testing? Because we DON'T want to test the module. We're only testing the "implementation" of the module. Now take a look to this code:

```js
serve({
    http: {
        createServer: callback => {
            // here you can inspect the "callback"
            if (!typeof callback === 'function') throw new Error('callback passed must be a function')

            const fakeRequest = {}
            const fakeResponse = {
                end: (body, encoding) => {
                    // here you can inspect the "body"
                    if (body !== 'hello world') throw new Error('body should be "hello world"')
                }
            }

            // fake firing the callback
            callback(fakeRequest, fakeResponse)

            return {
                listen: port => {
                    // here you can inspect the port
                    if (port !== 3000) throw new Error('port should be 3000')
                }
            }
        }
    }
})
```

See that you can inspect the **implementation** of the module and most importantly, you don't make any side effect in testing. No real listen to network system. Isolated as a unit 🙆🏻‍♂️

Another way beside mocking is stub and spies if you don't want to fully mock the module. You can find so many mocking library to stub your module like Sinon and Jest mock. They can do mocking even if the module is assigned outside the function 🔥

But still, dependency injection can help you so much and make your unit testing easier 😉
