{
    var crd1 = document.getElementById("panel-card1");
    var crd2 = document.getElementById("panel-card2");
    var crd3 = document.getElementById("panel-card3");
    var crd4 = document.getElementById("panel-card4");

    function on1(){
        if (crd1.classList.contains("menu-inactive")) {
            crd1.classList.remove("menu-inactive");
            
        } else {
            crd1.classList.add("menu-inactive");
            crd2.classList.remove("menu-inactive");
            crd3.classList.remove("menu-inactive");
            crd4.classList.remove("menu-inactive");
        }
    }

    function on2(){
        if (crd2.classList.contains("menu-inactive")) {
            crd2.classList.remove("menu-inactive");
            
        } else {
            crd2.classList.add("menu-inactive");
            crd1.classList.remove("menu-inactive");
            crd3.classList.remove("menu-inactive");
            crd4.classList.remove("menu-inactive");
        }
    }

    function on3(){
        

        if (crd3.classList.contains("menu-inactive")) {
            crd3.classList.remove("menu-inactive");
            
        } else {
            crd3.classList.add("menu-inactive");
            crd2.classList.remove("menu-inactive");
            crd1.classList.remove("menu-inactive");
            crd4.classList.remove("menu-inactive");
        }
    }

    function on4(){
        if (crd4.classList.contains("menu-inactive")) {
            crd4.classList.remove("menu-inactive");
            
        } else {
            crd4.classList.add("menu-inactive");
            crd2.classList.remove("menu-inactive");
            crd3.classList.remove("menu-inactive");
            crd1.classList.remove("menu-inactive");
        }
    }
}