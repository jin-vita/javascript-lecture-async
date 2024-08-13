const getData = (countryCode) => {
    console.log('getData called', countryCode)
    const apiUrl = 'https://restcountries.com/v2/all'
    return fetch(apiUrl)
        .then(response => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error('no country fetched')
            }
        })
        .then(data =>
            data.find(country =>
                country.alpha2Code === countryCode))
}