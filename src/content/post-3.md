---
title: "A case for for loops ➰"
tags: ["coding", "style", "syntax"]
date: "2020-03-07"
draft: false
path: "/blog/a-case-for-for-loops"
---

Communication.
<!-- end -->
Lately I've developed a preference for _for...loops_.

The reason being that it's verbose.

I've never been a fan of commenting code and have always encouraged writing code that's self-explanatory. Generally, I reserve comments to explain why(not what) something's happening.

```js
let your = function describe(itself) { /* without comments */ }
```
<br />

To achieve this, it is important to be as simple and direct as possible.

Consider this:

```js
let numberList = [1,2,3];
let totalCount = numberList.reduce(sum, 0);

function sum(previousSum, currentNumber) {
  let nextSum = previousSum + currentNumber;
  return nextSum;
}
```
<br />

Seems relatively straight forward right? 

But...

there's a condition!

You need to know exactly what `reduce` does to understand what's happening.

Compare that☝ to this👇:
```js
let numberList = [1,2,3];
let totalCount = 0;

for (let number of numberList) {
  totalCount += number;
}
```
<br />

The second example outshines the first in terms of simplicity. One could even argue that understanding the second example is almost effortless, since it seems semantically closer to natural language_(English)_.

This is a fairly simple example. The difference becomes clearer once it gets complex.

But of course there are drawbacks.

Afterall, a price for everything.

_For...loops_ compel [imperative programming](https://en.wikipedia.org/wiki/Imperative_programming).

I think most can agree that debugging imperative code is rarely exciting since tracking state changes can get complex very quickly.

So...

Should you change your code to use _for...loops_?

Of course not!

The underlying idea is to appreciate simplicity and variation. Sometimes programmers tend to sacrifice legibility for performance and/or optimization. It's not necessarily a bad thing and it really depends on what you value more.

I happen to value legibility because I appreciate the art of programming. Communication - the ability to express complex ideas and solutions as a series of understandable steps. The simpler the better.

Less is more  `<is>`.

> Props to you if you found the title humourous.😁
