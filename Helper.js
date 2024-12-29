function add(a,b){ // function for addition or module for addition
    console.log(`Addition is : ${a+b}`);
}
function sub(a,b){// module for sub function
    console.log(`Substraction is : ${a-b}`);
}
module.exports={ // exporting the modules in the object format
    add:add,// can be export as add only or can assign the name
    sub:sub,// can be export as sub only or can assign the name
    name:"vaijeenath"
}