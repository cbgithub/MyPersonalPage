



var manualToggle = false;

function toggleTheme(isManual) {
 
  if (localStorage.getItem("dark") === null) {
   
    localStorage.setItem("dark", true);
    setTheme();
  }
  if (localStorage.getItem("dark") === "true") {
    localStorage.setItem("dark", false);
    setTheme();
   
  } else {
    localStorage.setItem("dark", true);
    setTheme();

  }


}

function setTheme() {

    if (localStorage.getItem("dark") === "true") {
      document.body.setAttribute("theme", "dark");
      document.getElementById("logo").src = "assets/images/logoWhiteTransparency.png";
      if (document.getElementById("card-title") != undefined) {
      
          document.getElementById("card-title").style.color = "lightblue";
      
      }
  
    
    } else {
     
      document.body.setAttribute("theme", "light");
      document.getElementById("logo").src =
      "assets/images/logoTransparency.png";
      if (document.getElementById("card-title") != undefined) {
      
            document.getElementById("card-title").style.color = "blue";
        
        }
  
    }

 
}
