var template = Handlebars.compile($("#buy-list").html());

var context = {
	items: [],
	total: null
};

var temp;
var i1;
var i2;
var i3;
var stringy;
var start = 100.00;
var totalspent;


localStorage.setItem("stringy", null);
totalspent=0

function renderHomeView() {
	$('body').html(template(context));
	$("#mainBtn").on('click', function() {
		i1 = $("#item1").val(); 
		i2 = $("#item2").val(); 
		i3 = parseInt($("#item3").val());
		if (JSON.parse(localStorage.getItem("stringy")) === null) {
			i4 =  context.items[0].remainder - i3;
		} else {
			i4 = JSON.parse(localStorage.getItem("stringy")).items[JSON.parse(localStorage.getItem("stringy")).items.length-1].remainder - i3;
		}
		
		newItem = {
			name:i1, 
			details:i2, 
			price:i3, 
			remainder:i4
		};
		context.items.push(newItem);



		for (i=0; i < context.items.length; i++) {		
			totalspent += parseInt(context.items[i].price);
			alert(parseInt(context.items[i].price));
		};
		context.total = totalspent; 
		context.balance = context.items[0].remainder - totalspent;
		alert(context.items[0].remainder);
		alert(totalspent);
		alert(context.balance)

		stringy = JSON.stringify(context);
		localStorage.setItem("stringy", stringy);
		context = JSON.parse(localStorage.getItem("stringy"));
		renderHomeView();
	});
};

if (JSON.parse(localStorage.getItem("stringy")) === null) {
	//Make the stuff that goes inside your table
	context = {
		items: [{
			name: "Starting Balance",
			details: "We start here.",
			price: 0,
			remainder: 100
		}],
		total: "0.00",
		balance: "Your remaining amount"
	}

	//Grabs last remainder amount for the final balance
	//context.total = context.items[context.items.length - 1].remainder;
	// renderHomeView()
} else {
	context = JSON.parse(localStorage.getItem("stringy"));
	// renderHomeView();
}




renderHomeView();
/*
//Action on btn click
$("body").on('click', "#mainBtn", function() {
	
	localStorage.setItem("item1", $("#item1").val());
	localStorage.setItem("item2", $("#item2").val());
	localStorage.setItem("item3", $("#item3").val());
	i1= localStorage.getItem('item1');
	i2= localStorage.getItem('item2');
	i3= localStorage.getItem('item3');
	newItem = {name:i1, details:i2, price:i3, remainder:"0.00"};
	context.items.push(newItem)
	//context.items[context.items.length - 1].name = temp;
	renderHomeView();
	
});*/


