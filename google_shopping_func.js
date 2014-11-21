var data = require("./products.json")
// 1)

var getItems = function() {
	return (data["items"]);
};
//var seeItems = getItems(); 

// console.log(seeItems);


// 2)

var getItemsByBrand = function(array, itemBrand) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i].product.brand === itemBrand) {
			newArray.push(array[i]);
		
		}
	}
	return newArray;
};


//console.log(getItemsByBrand(data["items"], "Nikon"));

// 3)

var getItemsByAuthor = function (array, author) {
	var newArray =[];
	for (var i = 0; i < array.length; i++) {
		if (array[i].product.author["name"].split(" ")[0] === author) {
			newArray.push(array[i]);
		}
	}
	return newArray;
};

//console.log(getItemsByAuthor(data["items"], "Abt Electronics & Appliances"));

// 4)

var getAvailableProducts = function (array) {
	var newArray =[];
	for (var i = 0; i < array.length; i++) {
		if (array[i].product.inventories[0].availability === "inStock") {
			newArray.push(array[i]);	
		}
	}
	return newArray; 
};

// console.log(getAvailableProducts(data["items"]);

// 5) 

var getItemsByNameAndAuthor = function (brand, author) {
	var newArray =[];
	for (var i = 0; i < data["items"].length; i++) {
		if (data["items"][i].product.brand === brand && data["items"][i].product.author["name"] === author) {
			newArray.push(data["items"][i]);
		}
	}
	return newArray;
};

//console.log(getItemsByNameAndAuthor("Nikon", "Ebay");



// Neither this or the function worked so far...
//console.log(getItemsByAuthor(getItemsByBrand(getItems(), "Nikon"), "eBay"));
//console.log(getItemsByBrand(data["items"], "Sony"));
console.log(getAvailableProducts(getItemsByBrand(getItems(), "Sony")));




