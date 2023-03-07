const BurgerShops = require('./Shop2')
const DrinkMachine = require('./DrinkMachine')

const burgerShop = new BurgerShops();
const drinkMachine = new DrinkMachine();

burgerShop.on("order", (size,topping) => {
    console.log(`Order recieved , a ${size} sized ${topping} burger`)
    drinkMachine.serveDrink(size);
})

burgerShop.order("large","Veg");
burgerShop.displayOrderNumber();

// burgerShop.order();
// burgerShop.displayOrderNumber();

burgerShop.order("small","Veg");
burgerShop.displayOrderNumber();