var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root", 
	password: "",
	database: "bamazonDB"
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
	displayProducts();
});


function displayProducts() {
	console.log("Here is a list of all available products");
	connection.query("SELECT * FROM products", function(err, res) {
		if (err) throw err;
		console.log(res);

		placeOrder(res);
	});
}

function placeOrder(inventory) {
	inquirer
		.prompt([
		{
			name: "itemID",
			type: "input",
			message: "Enter the ID of the item you would like to purchase",
			validate: function(value) {
				if (isNaN(value) === false) {
					return true;
				}
				return false
			}
		},
		{
			name: "quantity",
			type: "input",
			message: "Enter the quantity you would like to purchase",
			validate: function(value) {
				if (isNaN(value) === false) {
					return true;
				}
				return false
			}
		}
		]).then(function(order) {
				console.log("Item ID: " + order.itemID);
				////////////
				console.log(inventory.product_name);
				console.log(order.quantity);

				checkInventory(inventory, order.itemID, order.quantity);

		});
}

function checkInventory(inventory, orderId, quantity) {
	for (var i = 0; i < inventory.length; i++) {
		if (inventory[i].item_id == orderId) {
			console.log("we found a match")
			if (inventory[i].stock_quantity > quantity) {
				var updatedQuantity = inventory[i].stock_quantity - quantity;

				console.log("This order can be fulfilled");
				updateInventory(inventory, orderId, updatedQuantity);
			}
			else {
				console.log("Sorry, there is insufficent inventory to fulfill this order");
			}
		}
	}
};


function updateInventory(inventory, orderId, updatedQuantity) {


	connection.query(
		"UPDATE products SET ? WHERE ?",
		[
			{
				stock_quantity: updatedQuantity
			},
			{
				item_id: orderId
			}
			], function(error) {
				if (error) throw error;
				console.log("Thanks! We're updating our inventory");
				//console.log("You have ordered" + quantity + " of " order.  )
			}
		);
}







