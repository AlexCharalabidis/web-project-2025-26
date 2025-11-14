menu=false;
function menu_button(){
	menu=!menu;
	if(menu==true){
		document.getElementsByClassName("menu")[0].style.visibility="visible";
	}
	else{
		document.getElementsByClassName("menu")[0].style.visibility="hidden";
	}
}