require('fs').readFile('./index.html','utf-8' ,(err,data)=>{
    if(err !== null){
        console.log(err)
        return
    }
    console.log(data)
})