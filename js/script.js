$(function () {

    //scroll
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });



    //modal popup

    //modal 공통 
    $(".close-btn").click(function () {
        $(".modal, .popup").fadeOut();
    });


    //Main_1 
    //1
    $("#pp_b1").click(function () {
        $("#modal1").fadeIn();
    });

    $("#modal1").click(function (event) {
        if ($(event.target).is("#modal1")) {
            $("#modal1").fadeOut();
        }
    });

    //2
    $("#pp_b2").click(function () {
        $("#modal2").fadeIn();
    });

    $("#modal2").click(function (event) {
        if ($(event.target).is("#modal2")) {
            $("#modal2").fadeOut();
        }
    });

    //3
    $("#pp_b3").click(function () {
        $("#modal3").fadeIn();
    });

    $("#modal3").click(function (event) {
        if ($(event.target).is("#modal3")) {
            $("#modal3").fadeOut();
        }
    });

    //4
    $("#pp_b4").click(function () {
        $("#modal4").fadeIn();
    });

    $("#modal4").click(function (event) {
        if ($(event.target).is("#modal4")) {
            $("#modal4").fadeOut();
        }
    });

    //5
    $("#pp_b5").click(function () {
        $("#modal5").fadeIn();
    });

    $("#modal5").click(function (event) {
        if ($(event.target).is("#modal5")) {
            $("#modal5").fadeOut();
        }
    });

    //6
    $("#pp_b6").click(function () {
        $("#modal6").fadeIn();
    });

    $("#modal6").click(function (event) {
        if ($(event.target).is("#modal6")) {
            $("#modal6").fadeOut();
        }
    });

    //7
    $("#pp_b7").click(function () {
        $("#modal7").fadeIn();
    });

    $("#modal7").click(function (event) {
        if ($(event.target).is("#modal7")) {
            $("#modal7").fadeOut();
        }
    });

    //8
    $("#pp_b8").click(function () {
        $("#modal8").fadeIn();
    });

    $("#modal8").click(function (event) {
        if ($(event.target).is("#modal8")) {
            $("#modal8").fadeOut();
        }
    });

    //9
    $("#pp_b9").click(function () {
        $("#modal9").fadeIn();
    });

    $("#modal9").click(function (event) {
        if ($(event.target).is("#modal9")) {
            $("#modal9").fadeOut();
        }
    });

    //10
    $("#pp_b10").click(function () {
        $("#modal10").fadeIn();
    });

    $("#modal10").click(function (event) {
        if ($(event.target).is("#modal10")) {
            $("#modal10").fadeOut();
        }
    });

    //11
    $("#pp_b11").click(function () {
        $("#modal11").fadeIn();
    });

    $("#modal11").click(function (event) {
        if ($(event.target).is("#modal11")) {
            $("#modal11").fadeOut();
        }
    });

    //12
    $("#pp_b12").click(function () {
        $("#modal12").fadeIn();
    });

    $("#modal12").click(function (event) {
        if ($(event.target).is("#modal12")) {
            $("#modal12").fadeOut();
        }
    });

    //13
    $("#pp_b13").click(function () {
        $("#modal13").fadeIn();
    });

    $("#modal13").click(function (event) {
        if ($(event.target).is("#modal13")) {
            $("#modal13").fadeOut();
        }
    });

    //14
    $("#pp_b14").click(function () {
        $("#modal14").fadeIn();
    });

    $("#modal14").click(function (event) {
        if ($(event.target).is("#modal14")) {
            $("#modal14").fadeOut();
        }
    });

    //15
    $("#pp_b15").click(function () {
        $("#modal15").fadeIn();
    });

    $("#modal15").click(function (event) {
        if ($(event.target).is("#modal15")) {
            $("#modal15").fadeOut();
        }
    });

    //contact
    $("#pp_ct").click(function(){
        $(".popup").fadeIn();
    })
    $(".popup").click(function (event) {
        if ($(event.target).is(".popup")) {
            $(".popup").fadeOut();
        }
    });





    //contact (date/time)
    function updateDate() {
        let current = new Date();
        let Year = current.getFullYear();
        let Month = String(current.getMonth() + 1).padStart(2, '0');
        let Day = String(current.getDate()).padStart(2, '0');
        document.getElementById('date').innerHTML = `${Year} - ${Month} - ${Day}`;
    }
    updateDate();

    function updateTime() {
        let current = new Date();
        let Hours = String(current.getHours()).padStart(2, '0');
        let Minutes = String(current.getMinutes()).padStart(2, '0');
        let Seconds = String(current.getSeconds()).padStart(2, '0');

        document.getElementById('time').innerHTML = `${Hours} : ${Minutes} : ${Seconds}`;
    }
    setInterval(updateTime, 1000);
    updateTime();

    //nav


    const Visual = document.querySelectorAll("#header, #Main_visual");
    let nav = document.querySelector("header nav");
    
    Visual.forEach(element => {
        element.addEventListener("mouseenter", () => {
            nav.style.display = "block";
        });
    
        element.addEventListener("mouseleave", () => {
            nav.style.display = "none";
        });
    });

}); //ready