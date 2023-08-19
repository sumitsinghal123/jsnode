const data=[
    {
        id:1,
        img:" zebra.jpeg",
        desc:"",
        title:"zebra"

    },
    {
        id:2,
        img:"pupy.jpg ",
        desc:"",
        title:"pupy"

    },{
        id:3,
        img:"monkey.jpg",
        desc:"",
        title:"monkey"

    },
    {
        id:4,
        img:"peacock.jpeg",
        desc:"",
        title:"Peacock"

    },
    
    
]

data.map((item)=>{
    console.log(`id:${item.id}`)
    console.log(`img:${item.img}`)
    console.log(`title:${item.title}`)
    console.log(`desc:${item.desc}`)
    console.log("-----------------------")
})
