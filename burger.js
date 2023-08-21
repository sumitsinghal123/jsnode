 const addveggies=(callback)=>{
    setTimeout(()=>{
        const veggies="";
        console.log("veggies prepared",veggies);
        callback(veggies)
    },3000);
 }
 const addTikki=( veggies,callback)=>{
    setTimeout(()=>{
        const Tikki=veggies + "";
        console.log("Tikki prepared",Tikki);
        callback(Tikki)
    },3000);
 }
 const makeBurger=(veggies,Tikki,callback)=>{
    setTimeout(()=>{
        const burger=veggies + Tikki + "";
        console.log("burger prepared",burger);
        callback(burger)
    },3000);
 }
addveggies((veggies)=>{
    console.log("preparation for tikki started");
    addTikki(veggies,(Tikki)=>{
        console.log("preparing for burger started");
        makeBurger(veggies,Tikki,(Burger)=>{
            console.log("served burger");

        })
    })
})