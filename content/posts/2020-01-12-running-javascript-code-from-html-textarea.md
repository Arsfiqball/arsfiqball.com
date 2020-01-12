---
title: Running JavaScript Code from HTML Textarea
date: 2020-01-12 10:00:00
tags: ['Programming']
---

Yeah, there is not so many practical reason to do this actually. But it will be
useful when you want to make a REPL or Notebook (e.g observablehq.com). Many
ways to do this. But here I will show you how to do it with front-end
JavaScript, in the same html page and no backend processing. JavaScript have
`eval` function and `Function` object which can parse string into executable
script. There are differences between them. In short, `Function` has huge
advantage in speed. They are still have the same security issues. So use it
wisely. 🙂

The `eval` function parses, execute and return computation result immediately.
Try the example code below in browser console (ctrl+shift+k for Firefox).

```js
eval('1 + 2 * 3') // return 7
```

While the `Function` is an object constructor to create "function" object and
it can be used the same way as regular function from function declaration.

```js
let fn = new Function('a', 'b', 'return a + b + 1')
fn(20, 6) // return 27
```

`Function` is more performant because it is always executed in global scope
while `eval` is executed in the same scope where it is called. This makes a
burden for JavaScript engine because it needs to trace more scope level. As
stated in MDN:

> The Function constructor creates a new Function object. Calling the
  constructor directly can create functions dynamically, but suffers from
  security and similar (but far less significant) performance issues to eval.
  However, unlike eval, the Function constructor creates functions which execute
  in the "global scope only."

Read more [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)
and [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function).

### Let's make it 🔥

Ok so now let's start with a basic html page.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Run Script</title>
</head>
<body>
  <!-- template -->
  <script>
    // script
  </script>
</body>
</html>
```

Here we will have a textarea to type our code, a button to execute and something
to show the return value. When the **Run** button is clicked, it will call
`run()` function. Which is executing code in textarea and then give the return
value to `pre#result`.

```html
<!-- template -->
<textarea id="code">return 1 + 4</textarea>
<button onclick="run()">Run</button>
<pre id="result"></pre>
```

Let's create the `run()` function. This function will take string from textarea
(which is JavaScript code), parses it with `Function`, execute and place the
return value into `pre#result`.

```js
// script
function run () {
  const code = document.getElementById('code').value
  const resultEl = document.getElementById('result')
  const fn = new Function(code)
  resultEl.innerHTML = fn()
}
```

### Final Code 🚢

Wrap them up, and here is the final code.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Run Script</title>
</head>
<body>
  <textarea id="code">return 1 + 4</textarea>
  <button onclick="run()">Run</button>
  <pre id="result"></pre>
  <script>
    function run () {
      const code = document.getElementById('code').value
      const resultEl = document.getElementById('result')
      const fn = new Function(code)
      resultEl.innerHTML = fn()
    }
  </script>
</body>
</html>
```

This is just basic. I made this example as minimal but practical as possible 🙃

---

### References

* GitHub Gist: [Run javascript from a html textarea](https://gist.github.com/Arsfiqball/8b5eb59111aee7aa9e01ffe7d3046b19#file-run-script-html)
* Mozilla Developer Network: [Never use eval()!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval!)
* Mozilla Developer Network: [Function constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
