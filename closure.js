const outerFunc = () => {
    const outerVar = 'I am at the outer'
    const innerFunc = () => {
        console.log('outerVar =>', outerVar)
    }
    return innerFunc
}

const testClosure = outerFunc()
console.dir(testClosure)
testClosure()