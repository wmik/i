---
title: "Personal coding style guide 💄"
tags: ["coding", "style", "syntax"]
date: "2020-03-05"
draft: false
path: "/blog/coding-style-guide"
---
Some guidelines to consider when writing code to enhance simplicity and improve legibility for an enhanced developer experience.
<!-- end -->

- Prefer `let`.

    `let` reads more intuitively.

    ```js
    let foo = 'bar';  // reads: let foo be bar
    ```
<br />
<br />
- Prefer `const` to communicate immutability.

    Immutable stuff **NEVER** changes.

    ```js
    const PORT = process.env.PORT; // Ideally this shouldn't change at runtime.
    const dayToHours = 24; // This never changes.

    // This may be controversial since it's properties are mutable. Prefer `let`
    const foo = { bar: 'baz' };
    foo.bar = 'foo'; // This works ☹
    ```
    [Learn more](https://jamie.build/const)
<br />
<br />
- Prefer descriptive names.

    This improves legibility and decreases the learning curve, making it easier to understand the logic.

    *TIP: One approach is specifying the content followed by data structure/type.*

    ```js
    let az = ['a', 'b', 'c'];  // bad
    let alphabets = ['a', 'b', 'c'];  // good
    let alphabetList = ['a', 'b', 'c'];  // better
    
    let alphabetPositionMap = { a: 1, b: 2, c: 3 };

    function getAlphabetList(limit) {
      return alphabelList.slice(0, limit)
    }
    ```
<br />
<br />
- Prefer function declarations at the top level.

    This takes advantage of [function hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting), allowing functions to be declared and used wherever *i.e. declarations don't have to flow from top to bottom*.

    ```js
    function foo() {
      /* 
       * baz can be called here 
       * regardless of its declaration appearing after foo
      */
      return baz();
    }

    function baz() {
      return 'bar';
    }
    ```
<br />
<br />
- Prefer functional composition over multi-functional abstraction.

    Implement the single responsibility principle and extend functionality through composition for simplicity.

    ```js
    let personalInfoMap = { firstName: 'foo', lastName: 'bar', age: 0 };

    function getName(personalInfoMap, type, salutation = '') {
      let name = '';

      if(type === 'first') {
        name = personalInfoMap.firstName;
      }

      if(type === 'last') {
        name = personalInfoMap.lastName;
      }

      if(type === 'full') {
        name = `${personalInfoMap.firstName} ${personalInfoMap.lastName}`;
      }

      return `${salutation} ${name}`.trim();
    }

    let fullNameSalute = withSalutation(personalInfoMap, 'full', 'Mr');
    ```
    <br />

    Refactor:
    ```js
    let personalInfoMap = { firstName: 'foo', lastName: 'bar', age: 0 };

    function getFirstName(personalInfoMap) {
        return personalInfoMap.firstName;
    }

    function getLastName(personalInfoMap) {
      return personalInfoMap.lastName;
    }

    function getFullName(personalInfoMap) {
      return `${personalInfoMap.firstName} ${personalInfoMap.lastName}`;
    }

    function withSalutation(salutation, personalInfoMap, getName) {
      let name = getName(personalInfoMap);
      return `${salutation} ${name}`
    }

    let fullNameSalute = withSalutation('Miss', personalInfoMap, getFullName);
    ```
