console.log('program start')
const getCountryName = async () => {
    try {
        const country = await getData('KR')
        console.log('await fetched ->', country.name)
    } catch (error) {
        console.log('await error ->', error)
    }
}
getCountryName()
console.log('program end')