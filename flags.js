const URL = "https://restcountries.com/v3.1/all"

const myReq = new XMLHttpRequest();
myReq.addEventListener("load", function () {
    const obj = JSON.parse(this.response)
    for(let val of obj) {
       console.log(val.flags.svg)
    }
});
myReq.open("GET", URL);
myReq.send()
