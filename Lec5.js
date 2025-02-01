const http=require("http");
const fs=require("fs");
const url = require('url');
const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()}:${req.url} new request received\n`;

    if(req.url==='/favicon.ico') return res.end();

    const myUrl= url.parse(req.url,true);
    console.log(myUrl,"myUrl")
    fs.appendFile("Log.txt",log,(error,data)=>{
        switch (myUrl.pathname) {
            case '/':
                res.end("Home page")
                break;
             case '/contact':
                res.end("contact page")
                break;
             case '/about':
                const userName=myUrl.query.myName;
                console.log(myUrl.query,"username")
                res.end(`hie ${userName} !!Welcome!!`);
                break; 
                 case '/add': 
                 const n1 = parseFloat(myUrl.query.n1); 
                 const n2 = parseFloat(myUrl.query.n2); 
                 if (isNaN(n1) || isNaN(n2))
                     { res.end('Please provide valid numbers for addition.'); } 
                 else
                  { const add = n1 + n2; 
                    res.end(`Addition is ${add}`); } 
                 break;
            default:
                res.end("404 page not found")
        }
    })
    console.log(req);
    
});

myServer.listen(8000,()=>{
    console.log("server started");
});