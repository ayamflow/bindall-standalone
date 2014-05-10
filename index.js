'use strict';

module.exports = function(obj) {
    var funcs = Array.prototype.slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error('bindAll must be passed function names');
    funcs.forEach(function(f) {
      obj[f] = obj[f].bind(obj);
    });
    return obj;
};