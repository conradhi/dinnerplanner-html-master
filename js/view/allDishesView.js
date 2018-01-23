var AllDishesView = function (container, model) {

	var all = container.find("#all");
	var allDishes = model.getAllDishes("dessert");


	var allDishesHtml = "<div class='row'>";



	for (key in allDishes) { 

		allDishesHtml += "<div class='col-sm-4 col-12'>" + 
							"<div class='col-12 text-center'>" + 
								"<a href='foodInfo.html'>" + 
									"<img src='images/"+ allDishes[key].image + "'>" +
								"</a>" + 
							"</div>" +

							"<div class='col-12' style='text-align: center;'>" +
								
									"<h3>" + allDishes[key].name + "<h3>" +
								
								//"<a class='btn btn-primary' href='foodInfo.html' role='button'>" + allDishes[key].name + "</a>" + 
							"</div>" +
						"</div>";

    }

	allDishesHtml += "</div>";






	all.html(allDishesHtml);
}