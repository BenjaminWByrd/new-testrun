const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = for ( let i = 0 , basket.lenght; i++) {
	console.log(basket[i]);
}

basket.forEach(item => {
	console.log(item);
})

//for of

for (item of basket) {
	console.log(item);
}

//for in

