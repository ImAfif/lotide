# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @imafif/lotide`

**Require it:**

`const _ = require('@imafif/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `middle.js(...)`: Replaces the middle values. If the total value of the input is even, it returns the two middle elements. If the total value of the input is odd, it returns the middle element.
- `head.js(...)`: Returns the first array element.
- `eqArrays.js(...)`: Reviews two arrays. Returns whether the arrays are the same value. Takes in a expected input and returns based on both parameters.
