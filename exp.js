var Msg;


module.exports.getMsg = function(msg) {
    console.log('getMsg');
    console.log(require.main.filename);
    console.log(module.filename);
    console.log(__dirname);
    console.log(__filename);
    if (require.main === module) {
        return 'Msg:' + msg;
    }
};

module.exports.setMsg = function(msg) {
    console.log('setMsg');
    console.log(require.main.filename);
    console.log(module.filename);
    Msg = msg;
}

/*
module.exports = function(msg) {
    console.log(require.main.filename);
    console.log(module.filename);
    console.log('module.exports');
}
*/