function compile() { var html = document.getElementById("html"); var css = document.getElementById("css"); var js = document.getElementById("js"); var code = document.getElementById("code").contentWindow.document; 
document.querySelector("button").onclick = function() { code.open(); code.writeln( html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>" ); code.close(); }; } compile();



function get(){
  const  x = document.getElementById("check");
  const  y = document.getElementById("html");

  if (x.style.justifyContent === "flex-end") {
    x.style.justifyContent = "flex-start";
     x.style.background = "#fff";
     x.style.color = "#8419e5";
     y.style.background  = "#fff";
     y.style.color = "#000";
    
  } else {
   x.style.justifyContent = "flex-end";
   x.style.background = "#000";
     x.style.color = "#fff"; 
     y.style.background  = "#000";
     y.style.color = "#fff";
  }
}
