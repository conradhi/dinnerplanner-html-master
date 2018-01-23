var FoodInfoView = function (container, model) {

	var info = container.find("#info");
	var recipe = container.find("#recipe");
	var dish = model.getDish("100");
	//var recipe = container.find("#recipe");
	var infoHtml = "";
	var recipeHtml = "";
	var dishIngredients = dish.ingredients;
	var totalPrice = 0;

	infoHtml += "<div class='text-center'>" + 
					"<h3>" + dish.name + "</h3>" + 
					"<img src='images/"+ dish.image + "' class='img-fluid' alt='Responsive image'>" +
				"</div>" + 
				dish.description +
				"<div class='text-center'>" + 
					"<a class='btn btn-primary' href='index.html' role='button'>Back to search</a>" + 
				"</div>";

	recipeHtml += 	"<div class='container-fluid'>" +
						"<div class='row' >" + 
							"<div class='col-xs-12' style='margin-bottom: 20px;'>" + 
								"INGREDIENTS FOR " + model.getNumberOfGuests() + " PEOPLE" + 
							"</div>" +
						"</div>" + 
					"</div>";

	for(key in dishIngredients){
		recipeHtml +=  	"<div class='container-fluid'>" + 
							"<div class='row'>" + 

								"<div class='col-3'>" + 
									dishIngredients[key].quantity + " " + 
									dishIngredients[key].unit + 
								"</div>" +

								"<div class='col-6'>" + 
									dishIngredients[key].name + 
								"</div>" +

								"<div class='col-1 d-none d-md-block'>" + 
									"SEK" + 
								"</div>" + 
								
								"<div class='col-2' style='text-align: right;'>" + 
									dishIngredients[key].price*model.getNumberOfGuests() + 
								"</div>" +

							"</div>" + 
						"</div>";

		totalPrice += dishIngredients[key].price*model.getNumberOfGuests();
	}

	recipeHtml += 	"<div class='container-fluid'>" + 
						"<div class='row'>" +

							"<div class='col-9' style='margin-top: 20px;'>" +
								"<div class='text-center'>" + 
									"<a class='btn btn-primary' href='index.html' role='button'>Add to menu</a>" + 
								"</div>" + 
							"</div>" + 

							"<div class='col-1  d-none d-md-block' style='margin-top: 20px;'>" + 
								"SEK" + 
							"</div>" + 

							"<div class='col-2' style='text-align: right; margin-top: 20px;'>" + 
								totalPrice + 
							"</div>" +

						"</div>" + 
					"</div>";
	
	info.html(infoHtml);
	recipe.html(recipeHtml);
}
