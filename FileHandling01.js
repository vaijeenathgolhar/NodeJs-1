const fs=require("fs");

//we can perform in two ways
/* 
Synchronous way 
Asynchronous way
*/

// Asynchronous way
// fs.writeFile("./data.txt","Hello Vaijeenath",(err)=>{});
// console.log(1);
// fs.readFile("./data.txt", {encoding:"utf-8"},(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }

// });
// console.log(2)

// Synchronous way
//  console.log(3)
//  fs.writeFileSync("./dataSync.txt","Hello Vaiju");
//  let res = fs.readFileSync("./dataSync.txt","utf-8");
//  console.log(res);
//  console.log(4)

// fs.appendFile("./data.txt"," Adding more data...",(err)=>{}); //to update the information or to add the info

// fs.unlink("./dataSync.txt",(err)=>{}); // to delete the file

// fs.mkdir("./MyFolder/New/New2",{recursive:true},(err)=>{}); // make the folders