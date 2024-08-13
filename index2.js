console.log('program start')
const myCallback = (fetchedData) => {
    console.log('myCallback fetched ->', fetchedData)
}
getData(myCallback)
console.log('program end')