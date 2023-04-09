    /*==========================================================================
    |||||||||||||||||||||||||||Formulir section||||||||||||||||||||||||||||||||||
    ===========================================================================*/ 
    const inputMassage = document.getElementById("textmessege");
    const inputName = document.getElementById("pass");
    function keatas1(){
        if ( inputMassage.value.length<1 ) {
            document.getElementById("unamelbl").style.visibility = "hidden";
        } else {
            document.getElementById("unamelbl").style.visibility = "visible";
        }
        if ( inputMassage.value.length>1 && inputName.value.length>5 ) {
            document.getElementById('login').removeAttribute("disabled");
        } else {
            document.getElementById('login').setAttribute("disabled", "");
        }
    }
    function keatas2(){
        if ( inputName.value.length<1 ) {
            document.getElementById("unamelb3").style.visibility = "hidden";
            document.getElementById("unamelb23").style.visibility = "hidden";
            document.getElementById("unamelb24").style.visibility = "hidden";
        } else {
            document.getElementById("unamelb3").style.visibility = "visible";
            document.getElementById("unamelb23").style.visibility = "visible";
            document.getElementById("unamelb24").style.visibility = "visible";
        }
        if ( inputMassage.value.length>1 && inputName.value.length>5 ) {
            document.getElementById('login').removeAttribute("disabled");
        } else {
            document.getElementById('login').setAttribute("disabled", "");
        }
    }
    function show() {
        var x = inputName;
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
        document.getElementById("unamelb23").style.display = "none";
        document.getElementById("unamelb24").style.display = "inline-block";
    }
    function hide() {
        var x = inputName;
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
        document.getElementById("unamelb23").style.display = "inline-block";
        document.getElementById("unamelb24").style.display = "none";
    }


    /*==========================================================================
    |||||||||||||||||||||||||||Captur Section|||||||||||||||||||||||||||||||||||
    ===========================================================================*/ 
    var myIndex = 0;
    carousel();

    function carousel() {
    var i;
    var x = document.getElementsByClassName("gbig");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }

    /*==========================================================================
    |||||||||||||||||||||||||||Modal Section|||||||||||||||||||||||||||||||||||
    ===========================================================================*/ 
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get button untuk membuka modal
    var btn = document.getElementById("myBtn");

    // Get <span> untu menutup the modal
    var span = document.getElementsByClassName("close")[0];

    // ketika tombol di klik, membuka modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // ketika <span> (x) di klik, close modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // ketika klik di luar modal, close modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }