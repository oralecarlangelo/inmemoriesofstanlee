// function changeParagraphContent() {
// 	var content = document.getElementsByTagName('p');
// 	content[0].innerHTML = "Test";
// }

// changeParagraphContent();


var sidebar = document.getElementsByClassName('sidebar');

function updateFloat(){
	var contents = document.getElementsByClassName('content');
	var floatValue = contents[0].style.float;

	if(floatValue=="right"){
		contents[0].style.float = "left";
		sidebar[0].style.float = "left";
	}
	else{
		contents[0].style.float = "right";
		sidebar[0].style.float = "right";
	}
}

