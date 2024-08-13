const getData = async (countryCode) => {
    console.log('getData called', countryCode)
    const apiUrl = 'https://restcountries.com/v2/all'
    const response = await fetch(apiUrl)
    if (response.status === 200) {
        const data = await response.json()
        return data.find(country => country.alpha2Code === countryCode)
    } else {
        throw new Error('no country fetched')
    }
}