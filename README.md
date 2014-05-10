bindall-standalone
==================

Standalone version of underscore's `_.bindAll()` function for IE9+ browsers.

Taken from the [underscore source](http://underscorejs.org/docs/underscore.html) and adapted to work without underscore.
Works with require() e.g. for node.js, browserify or component(1).

## API
```
bindAll(object, 'func1', 'func2', ...)
```

Mutates all functions from `object`, passed as strings (such as `func1` and `func2`) so they always will be called with the countext bound to the `object`.

## Usage

```
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