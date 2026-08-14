"use strict";
var fruitprice;
(function (fruitprice) {
    fruitprice[fruitprice["appleprice"] = 0] = "appleprice";
    fruitprice[fruitprice["peachprice"] = 1] = "peachprice";
    fruitprice[fruitprice["bananaprice"] = 2] = "bananaprice";
})(fruitprice || (fruitprice = {}));
const fruit1 = fruitprice.appleprice;
const fruit2 = fruitprice.peachprice;
const fruit3 = fruitprice.bananaprice;
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
