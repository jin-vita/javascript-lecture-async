console.log('program start')
const myCallback = (fetchedData, error) => {
    if (error) {
        console.log('myCallback error ->', error)
        return
    }
    console.log('myCallback fetched ->', fetchedData)
}
getData(myCallback)
console.log('program end')