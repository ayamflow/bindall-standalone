bindall-standalone
==================

Standalone version of underscore's `_.bindAll()` function for IE9+ browsers.

Taken from the [underscore source](http://underscorejs.org/docs/underscore.html) and adapted to work without underscore.
Works with require() e.g. node.js, browserify or component(1).

## Installation
`npm install bindall-standalone --save`

## API
### `bindAll(object, *methods);`

Mutates all methods from `object`, passed as a list of strings (such as `'foo', 'bar'`) so they always will be called with the context bound to the `object`.

### `bindAll(object);`
Bind **ALL** methods available on the object.

## Usage

```
var bindAll = require('bindall-standalone');

var object = {
    foo: 10,
    bar: function() {
        return this.foo;
    }
};

object.bar(); // 10

var func = object.bar;
func(); // undefined

bindAll(object, 'bar');
var func = object.bar;
func(); // 10
```