//XMLHttpRequest();
// The main use of XMLHttpRequest is to send asynchronous requests to a server. 
//This means the page doesn't 
//need to wait for the server to respond before continuing to function.

const requestUrl = 'http://api.weatherapi.com/v1/current.json?key=c4d5ead1180e48cd858220207240609&q=Mumbai&aqi=no'
const xhr = new XMLHttpRequest();
xhr.open('GET',requestUrl)
xhr.send()
xhr.onreadystatechange = function () {
    console.log(xhr.readyState)
    if(xhr.readyState === 4){
       let data = JSON.parse(this.responseText);
       console.log(data)
    }
}