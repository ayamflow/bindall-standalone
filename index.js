'use strict';

module.exports = function(object) {
    var functions = Array.prototype.slice.call(arguments, 1);

    if (functions.length === 0) {
        var toString = Object.prototype.toString;

        for (var method in object) {
            if(object.hasOwnProperty(method)) {
                if(typeof object[method] == 'function' && toString.call(object[method]) == "[object Function]") {
                    functions.push(method);
                }
            }
        }
    }

    for(var i = 0; i < functions.length; i++) {
        var f = functions[i];
        object[f] = object[f].bind(object);
    }
};