const placeorder=(callback)=>{
    setTimeout(()=>{
        console.log("user name printed");
        callback();
    },2000);
}
const user=(callback)=>{
    setTimeout(()=>{
        console.log("Ticket booked");
        callback();
    },2000);
}
const airport=(callback)=>{
    setTimeout(()=>{
        console.log("go to airport");
        callback();
    },2000);
}
const boardingPass=(callback)=>{
    setTimeout(()=>{
        console.log("collect boarding pass");
        callback();
    },2000);
}
const checkSecurity=(callback)=>{
    setTimeout(()=>{
        console.log("check by security");
        callback();
    },2000);
}
const checkSelf=(callback)=>{
    setTimeout(()=>{
        console.log("check by self");
        callback();
    },2000);
}
const checkNavigation=(callback)=>{
    setTimeout(()=>{
        console.log("check Navigation");
        callback();
    },2000);
}
const byBus=(callback)=>{
    setTimeout(()=>{
        console.log("go by Bus");
        callback();
    },2000);
}
const byAirplane=(callback)=>{
    setTimeout(()=>{
        console.log("go by Airplane");
        callback();
    },2000);
}
const byAircraft=(callback)=>{
    setTimeout(()=>{
        console.log("go by Aircraft");
        callback();
    },2000);
}
const godestination=(callback)=>{
    setTimeout(()=>{
        console.log("dropped destination");
        callback();
    },2000);
}
console.log("user");
placeorder(()=>{
    console.log("order");
    user(()=>{
        console.log("go to airport");
        airport(()=>{
            console.log("get bording pass");
            boardingPass(()=>{
                console.log("security checking");
                checkSecurity(()=>{
                    console.log("self checking");
                    checkSelf(()=>{
                        console.log("navigation pannel");
                        checkNavigation(()=>{
                            console.log("got by bus");
                            byBus(()=>{
                                console.log("go by airplane");
                                byAirplane(()=>{
                                    console.log("go by aircraft");
                                    byAircraft(()=>{
                                        console.log("go to destinaion");
                                        godestination(()=>{
                                            console.log("travel complete")
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})