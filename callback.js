// function calculator(a,b,callback){
//     return callback(a,b);
// }
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
//  var res=calculator(3,4,callback);


const placeorder = (callback) => {
    setTimeout(() => {
        console.log("order placed");
        callback();
    }, 2000)
};
const  startProduction = (callback) => {
    setTimeout(() => {
        console.log("order started");
        callback();
    }, 5000)
};
const printID = (callback) => {
    setTimeout(() => {
        console.log("idprinted");
        callback();
    }, 1000)
};
const productName = (callback) => {
    setTimeout(() => {
        console.log("product name printed");
        callback();
    }, 2000)
};
const productDesc = (callback) => {
    setTimeout(() => {
        console.log("order desc.");
        callback();8
    }, 3000)
};

console.log("order product..");
placeorder(() => {
    console.log("in production");
    startProduction(() => {
        console.log("printing item start");
        printID(() => {
            productName(() => {
                productDesc(()=>{
                console.log("day ended");
                })
            })
        })
    })

})