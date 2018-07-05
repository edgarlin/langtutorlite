// browser : global=window,exports=undefined,module=undefined
// node.js : global=global
// define.amd : require.js asynchronous module definition

;
(function(global, factory) {

    (((typeof exports) === 'object') && ((typeof module) !== 'undefined')) ?
    module.exports = factory() // node.js
        : (((typeof define) === 'function') && define.amd) ?
        define(factory) //  require.js
        :
        (global.Demo = factory()); // window
}(this, function() {
    return {
        name: 'value'
    };
}));


var factory_func = function(parm) {
    console.log(parm);
    return {
        name: 'value'
    };
};

var self_invoke_func = function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ?
        module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) : global.Demo = factory();
};

;
(self_invoke_func(this, factory_func));
