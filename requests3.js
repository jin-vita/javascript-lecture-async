const getData = (callback) => {
    console.log('getData called')
    const request = new XMLHttpRequest()
    const apiUrl = 'https://restcountries.com/v2/all'

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4) {
            if (e.target.status === 200) {
                const data = JSON.parse(e.target.responseText)
                console.log("successfully fetched")
                callback(data, undefined)
            } else {
                console.log('something wrong')
                callback(undefined, 'no country fetched')
            }
        }
    })
    request.open('GET', apiUrl)
    request.send()
}
