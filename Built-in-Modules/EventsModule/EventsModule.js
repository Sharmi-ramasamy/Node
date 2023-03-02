const EventEmitter = require("node:events")

const emitter = new EventEmitter()

emitter.on("order-burger", (size,topping) => {
    console.log(`order recieved,preparing, ${size} size ${topping} burger`)
})
emitter.on("order-burger", (size) => {
    if(size === "large") {
        console.log("Serving is complement")
    }
    else {
        console.log("Order will be placed soon")
    }
})
emitter.on("order-burger",(size,topping)=> {                 // if no size given, topping = large bcoz 2 args only available
    if(topping === "vegs") {
        console.log("You have ordered a veg burger")
    }
    else {
        console.log("you have ordered a non-veg burger")
    }
})
console.log("This works first before event occurs")
emitter.emit("order-burger","large","vegs")