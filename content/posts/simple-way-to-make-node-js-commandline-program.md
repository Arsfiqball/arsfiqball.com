---
title: Simple Way to Make Node.js Commandline Program
date: 2016-10-27 15:14:00
tags:
  - Programming
cover_image: ./images/parabola-motion-screenshot.jpg
---

Sometimes you are tired of something and want to make a simple program that you can run in terminal. For example if you are tired of calculating in physic, more specific like calculating x and y position in parabola motion. Again and again... You want to make a tool so when you are lazy, you can use that tool.
**So, how to make it?**

<!-- more -->

Let's begin!
### 1. Make a project

You can make it from file manager or from terminal. I recomend you to use terminal. run:

```bash
mkdir parabola-motion # create folder
```

Then get in to your project folder.

```bash
cd parabola-motion # open folder
```

Now run ``npm init`` to initialize your node project package.

```bash
npm init
```

Fill the dialog with appropriate information.

Yes done, your project workspace created now.
### 2. Install Required Node.js Package

You need just commander for this example. This is package to simplify how to receive arguments from console (terminal) and pass it to your program logic.

```bash
npm install --save commander
```

Always remember to put ``--save`` option, because you want to keep it in your package.json file.

### 3. Programming

Let's write program!

Make a file in your project folder, name it index.js and put this code inside.

```javascript
#!/usr/bin/env node
var program = require('commander');

global.GRAVITY = 10;
var vx0 = 0, vy0 = 0;

function printPositionAtTime(time) {
  var x = vx0 * time;
  var y = vy0 * time - (1/2) * GRAVITY * Math.pow(time, 2);

  console.log("X position: " + x + " meters");
  console.log("Y position: " + y + " meters");
  return true;
}

program
 .arguments('<time>')
 .option(
    '-x, --velocity-x <value>',
    'Initial X axis velocity (meters) default 0',
    function (value) {
      vx0 = value;
    })
 .option(
    '-y, --velocity-y <value>',
    'Initial Y axis velocity (meters) default 0',
    function (value) {
      vy0 = value;
    })
 .action(printPositionAtTime)
 .parse(process.argv);
```

Make sure you always include the first line, that code instruct terminal to use appropriate environment.

Then, open your package.json. Add your bin (for this example I name it parabola-motion) reference to ./index.js. Similar like this (just focus on "bin"):

```json
{
  "name": "parabola-motion",
  "version": "0.0.1",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "bin": {
    "parabola-motion": "./index.js"
  },
  "author": "Iqbal Mohammad Abdul Ghoni",
  "license": "ISC",
  "dependencies": {
    "commander": "^2.9.0"
  }
}
```

### 4. Install it on your computer

Run:

```bash
npm install -g
```

Now your package is installed as global package. You can use it in any location in your computer.

You can link between your installed program and developing folder by running this:

```bash
npm link
```

### 5. Use it

Open the terminal in any location. Check it by running this help command:

```bash
parabola-motion --help
```

No error? Good! Now let's try it.

```bash
parabola-motion 20 -x 100 -y 100
```

Yey 😂😂

Checkout this project on Github [Arsfiqball/parabola-motion](https://github.com/Arsfiqball/parabola-motion)

Thank you for attention, I hope it useful for you.

> This post was updated on October 19th, 2017
