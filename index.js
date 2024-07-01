//Exercise 1
function receivesAFunction(callback){
    callback();
};

//Exercise 2
function returnsANamedFunction(){
    function namedFunction(){
    }
    return namedFunction;
};


//Exercise 3
function returnsAnAnonymousFunction(){
    return function(){
    };
    
}