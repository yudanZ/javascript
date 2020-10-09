const { fsync } = require("fs")

const compose = (f, g) => (...args) => f(g(...args))

function processFunction(...fbs){
    return fsync.reduce(compose)
}