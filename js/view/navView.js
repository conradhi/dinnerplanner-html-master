var NavView = function(container, model){

	var numberOfGuests = container.find("#numberOfGuests");
	numberOfGuests.html(model.getNumberOfGuests());

	var leftMenu = container.find("#leftMenu");
	var leftMenuHtml = "";
	var dishes = model.getFullMenu();
	var totalPrice = container.find("#totalPrice");
	var totalPriceNav = container.find("#totalPriceNav");


	for(key in dishes){
		var tempDish = dishes[key];
		leftMenuHtml += '<div class="col-10">' + tempDish.name + '</div><div class="col-2" id="cost">' + model.getTotalDishPrice(tempDish.id)*model.getNumberOfGuests() + '</div>';
	}


	leftMenu.html(leftMenuHtml);
	totalPrice.html("SEK: " + model.getTotalMenuPrice());
	totalPriceNav.html("<h4>SEK " + model.getTotalMenuPrice() + "</h4>");


}