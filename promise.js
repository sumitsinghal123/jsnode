const placeorder=(callabck)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve();
        },2000);
        
    });
    
}
const startprouction=(callabck)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("production started");
            resolve();
        },2000);
        
    });
    
}
const printId=(callabck)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("id printed");
            resolve();
        },2000);
        
    });
    
}
const productName=(callabck)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("product name printed");
            resolve();
        },2000);
        
    });
    
}
const productDesc=(callabck)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(" product description printed");
            resolve();
        },2000);
        
    });
    
}
console.log("order is now going to take");
    placeorder()
    .then(()=>{
        console.log("product is in production....");
        return startprouction();
    })
.then(()=>{
        console.log("id printing started printing...");
        return printId();
})
.then(()=>{
    console.log("product name started printing...");
    return productName();
})
.then(()=>{
    console.log("product Desc started printing....");
    return productDesc();
})
.catch((Error)=>{
    console.log("some error occured");
})
