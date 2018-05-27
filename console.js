const exp = module.require('./exp');

console.log(require.main.filename);

//exp();
//exp.setMsg('test');
exp.getMsg('test');




console.log('------global object---------');
for (var key in global) {
    console.log(key);
}
console.log('------module object---------');
for (var key in module) {
    console.log(key);
}
console.log('__dirname:' + __dirname);
console.log('__filename:' + __filename);
//console.log(require);
return;


clearImmediate();
clearInterval();
clearTimeout();


setImmediate();
setInterval();
setTimeout();