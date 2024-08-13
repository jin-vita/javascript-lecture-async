const getData = (countryCode, callback) => {
    console.log('getData called', countryCode)
    const request = new XMLHttpRequest()
    const apiUrl = 'https://restcountries.com/v2/all'

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4) {
            if (e.target.status === 200) {
                const data = JSON.parse(e.target.responseText)
                console.log("successfully fetched")
                const country = data.find(country => country.alpha2Code === countryCode)
                callback(country, undefined)
            } else {
                console.log('something wrong')
                callback(undefined, 'no country fetched')
            }
        }
    })

    request.open('GET', apiUrl)
    request.send()
}
