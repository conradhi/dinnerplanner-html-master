$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	model.setNumberOfGuests(3);
	model.addDishToMenu("100");
    model.addDishToMenu("2");
    model.addDishToMenu("3");
    model.addDishToMenu("1");
    model.addDishToMenu("3");
    model.addDishToMenu("3");
    model.addDishToMenu("100");
    model.addDishToMenu("200");
	// And create the instance of ExampleView
	var navView = new NavView($("#navView"), model);
	var allDishesView = new AllDishesView($("#allDishesView"), model);
	var foodInfoView = new FoodInfoView($("#foodInfoView"), model);
	var dinnerView = new DinnerView($("#dinnerView"), model);
	var printView = new PrintView($("#printView"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});