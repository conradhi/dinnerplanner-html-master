var AllDishesView = function (container, model) {

	var all = container.find("#all");
	var allDishes = model.getAllDishes("dessert");


	var allDishesHtml = "<div class='row'>";



	for (key in allDishes) { 

		allDishesHtml += "<div class='col-md-4'>" + 
							"<div class='col-md-12 text-center'>" + 
								"<img src='images/"+ allDishes[key].image + "'>" + 
							"</div>" +

							"<div class='col-md-12' style='text-align: center;'>" +
								"<h3>" + allDishes[key].name + "<h3>" +
							"</div>" +

							"<div class='col-md-12' style='text-align: center;'>" +
								"<h5>" + allDishes[key].description + "<h5>" +
							"</div>" +
						"</div>";

    }

	allDishesHtml += "</div>";






	all.html(allDishesHtml);
}