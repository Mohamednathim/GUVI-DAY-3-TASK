const URL = "https://restcountries.com/v3.1/all"

const myReq = new XMLHttpRequest();
myReq.addEventListener("load", function () {
    const obj = JSON.parse(this.response)
     console.log(this.response)
    for(let val of obj){
        console.log("Country: "+val.name.common+",Region: "+val.region+",Sub Region: "+val.subregion)
    }
});
myReq.open("GET",URL);
myReq.send()