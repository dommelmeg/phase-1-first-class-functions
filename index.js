function receivesAFunction(test) {
    test();
}

function returnsANamedFunction() {
    function name() {
    }
    return name;
}

function returnsAnAnonymousFunction() {
    return function () {
    }
}