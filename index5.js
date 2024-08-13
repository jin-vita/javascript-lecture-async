console.log('program start')
getData('KR').then(
    result => console.log('then fetched ->', result),
    error => console.log('then error ->', error)
)
console.log('program end')