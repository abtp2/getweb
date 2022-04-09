function search(){
var slow = document.getElementById("search-form").value;
if (slow ==  "HTML" ){
	location. href = "htmltut.html";
}

/* For html tutorial*/
else if (slow ==  "html" ) {
   location. href = "htmltut.html";
}
else if (slow ==  "Html" ) {
   location. href = "htmltut.html";
}



/* For csstutorial*/
else if (slow ==  "CSS" ) {
   location. href = "csstut.html";
}
else if (slow ==  "Css" ) {
   location. href = "csstut.html";
}
else if (slow ==  "css" ) {
   location. href = "csstut.html";
}


/* For certification */
else if (slow ==  "Certificate" ) {
   location. href = "certificatesender.html";
}
else if (slow ==  "certificate" ) {
   location. href = "certificatesender.html";
}
else if (slow ==  "CERTIFICATE" ) {
   location. href = "certificatesender.html";
}


/* for editor */
else if (slow ==  "Online Editor" ) {
   location. href = "#editor";
}
else if (slow ==  "online editor" ) {
   location. href = "#editor";
}
else if (slow ==  "ONLINE EDITOR" ) {
   location. href = "#editor";
}


/* for color picker */
else if (slow ==  "Color Picker" ) {
   location. href = "colorpick.html";
}
else if (slow ==  "COLOR PICKER" ) {
   location. href = "colorpick.html";
}
else if (slow ==  "color picker" ) {
   location. href = "colorpick.html";
}


/* for nothing filling */
else if (slow ==  "" ) {
}


/* no service available*/
else{
	document.getElementById("no-ser").style.display = "flex"
}
}

