//PROMISE IN JAVASCRIPT:
/*A Promise in JavaScript is an object that represents 
the eventual completion (or failure) of an asynchronous 
operation and its resulting value.*/

/*Promises are used to handle asynchronous operations, 
allowing you to write cleaner and more manageable code*/

// creating a promise

// const promiseTwo = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         console.log("task is done")
//         resolve();
//     },3000)
// })

// promiseTwo.then(() => {
//     console.log("PROMISE IS CONSUME")
// })


//What is a resolve keyword does 

// let promiseTwo = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve(["sahil", 1234])
//     },3000)
// });

// promiseTwo.then((user)=>{
   
//     console.log("PROMISE IS FULLFILLED")
// })



// let getJob = (skill) =>{
//     let job = "youll get a job"
//     if (skill === "javascript"){
//         console.log(job);
//     } else {
//         console.log("youre not skilled")
//     }

// }
// console.log(getJob("mongo"))


// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if (error){
//             resolve({username : "sahil ", password : "123"})
//         }
//         else {
//             reject("something went wrong")
//         }
//     },3000 )
// })

// promiseFour
// .then((user)=> {
//      return user.username
// })
// .then((username) => {
//     console.log(username)
//     console.log("resolve completed")
// })
// .catch((error) =>{
//     console.log(error)
// })

// async await in javascript;
// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false // in case of true the code will run but when false occurs 
//         if (error)  // the code need error handling
//             {
//             resolve({username : "sahil ", password : "123"})
//         }
//         else {
//             reject("something went wrong")
//         }
//     },3000 )

// })
// // now we had created the specific block for error handling in async await;
// async function consumePromise(params) {
//      try {
//         const response = await promiseFour;
//         console.log(response);
//      } catch (error) {
//         console.log(error); 
//      } 
// }
// console.log(consumePromise());

// let url = "promise.json"
// import fetch from 'node-fetch'; // Use import instead of require

// async function getDetails() {
//   try {
//     const response = await fetch('promise.json');
//     const data = response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }

// getDetails();

// import { promises as fs } from 'fs';
// import path from 'path';

// async function getDetails() {
//   try {
//     const filePath = path.resolve('promise.json');
//     const data = await fs.readFile(filePath, 'utf-8'); // Read the file
//     const jsonData = JSON.parse(data); // Parse JSON data
//     console.log(jsonData);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }

// getDetails();

// const xhr = new XMLHttpRequest()
// xhr.open('GET', 'promise.json');       