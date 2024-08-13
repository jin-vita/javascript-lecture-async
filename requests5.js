const getData = (countryCode) =>
    new Promise((resolve, reject) => {
        console.log('getData called', countryCode)
        const request = new XMLHttpRequest()
        const apiUrl = 'https://restcountries.com/v2/all'

        request.addEventListener('readystatechange', (e) => {
            if (e.target.readyState === 4) {
                if (e.target.status === 200) {
                    const data = JSON.parse(e.target.responseText)
                    console.log("successfully fetched")
                    const country = data.find(country => country.alpha2Code === countryCode)
                    resolve(country.name)
                } else {
                    console.log('something wrong')
                    reject('no country fetched')
                }
            }
        })

        request.open('GET', apiUrl)
        request.send()
    })
