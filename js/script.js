
// Show/hide drawings when hover:link

function auSuivant() {
	var marginset = $(".tableau").css("margin-right").replace(/[^-\d\.]/g, '');
	var posgall = $("#gallery").css("margin-left").replace(/[^-\d\.]/g, '');
	var n = posgall -500 - marginset;
	$("#gallery").css("margin-left", n);
}

// function hideIm(image) {
// 	var id = image + '_banner';
// 	var eggz = image + '_egg';
// 	$("#"+id).css("opacity",0);
// 	$("#"+eggz).css("opacity", 0);
// 	$(".box").css("margin-top", "20px");
// }


// // Change background image 

// function changeIm(image) {
// 	document.getElementById('funbanner').style.backgroundImage = "url(" + image + ")";
// };

