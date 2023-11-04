function receivesAFunction(callback) {
    callback()
}

const returnsANamedFunction = () => {
    const namedFunction = () => {

    }
    return namedFunction    
}

function returnsAnAnonymousFunction () {
    return function() {

    }
}