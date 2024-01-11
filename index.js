function receivesAFunction (cb){
    cb();
    return 0;
}
function returnsANamedFunction(){
    return (function namedFunction(){});
}
function returnsAnAnonymousFunction(){
    return function(){};
}