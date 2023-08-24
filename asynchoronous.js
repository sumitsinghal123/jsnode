function delay(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },time);
    });
}
async function placeorder(){

    await delay(2000);
    console.log("order taken");
}
async function startProduction(){
    await delay(2000);
    console.log("Production started");
}
async function printID(){
    await delay(2000);
    console.log("id printed"); 
}
async function productName(){
    await delay(2000);
    console.log("Product name is printed"); 
}
async function productDesc(){
    await delay(2000);
    console.log("product desc is printed"); 
}


async function main(){
    console.log("order is noe going to take");
    await placeorder();
    console.log("produt is in production...");
    await startProduction();
    console.log("id is printed");
    await printID();
    console.log("product name start printing...");
    await productName();
    console.log("desc start printing...");
    await productDesc();
}
main()