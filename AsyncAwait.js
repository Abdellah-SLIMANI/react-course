//regular promises
const doSomthingAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('I did this'),3000)
    })
}

// console.log(doSomthingAsync())

//async-await (ES8 ES2017)
const doSomthing = async () => {
    console.log(await doSomthingAsync())
}

doSomthing()
// catch gets handled diffrently in the async/await approach