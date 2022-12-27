const done = false
// Creating promises
const isItDoneYet = new Promise((resolve, reject) => {
    if(done){
        const workIsDone = 'Here is the outcome!!!'
        resolve(workIsDone)
    } else {
        const why = "mamrj3inch mzyan"
        reject(why)
    }
})

// Consuming the promise 
isItDoneYet
    .then(ok => console.log(ok))
    .catch(err => console.error(err))
    .finally(() => console.log("finished")) //Loader will disapper either if there was a problem or not


//Chaining promises

const status = response => {
    // if(response.ok){ //alternative
    //     return Promise.resolve(response)
    // }
    if(response.status >= 200 && response.status < 300){
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
}

const json = response => response.json()

fetch('https://jsonplaceholder.typicode.com/todos/46598465465465')
    .then(status)
    .then(json)
    .then(data => console.log(data))
    .catch(err => console.log(err))
    // .catch(console.log) //alternative

