$(document).ready(function () {
    let theme = Cookies.get("theme");
 
    if (theme === "light") {
        $("#theme-switch").text("Switch to Dark Theme");
    } else {
        $("#theme-switch").text("Switch to Light Theme");
    }
 
    $("#theme-switch").on("click", function () {
        if (theme === "light") {
            theme = "dark";
            Cookies.set("theme", "dark", { expires: 3650 });
            $("head").append("<link href='/css/main_dark.css' type='text/css' rel='stylesheet'/>");
            $("#theme-switch").text("Switch to Light Theme");
        } else {
            theme = "light";
            Cookies.set("theme", "light", { expires: 3650 });
            $("link[rel=stylesheet][href='/css/main_dark.css']").remove();
            $("#theme-switch").text("Switch to Dark Theme");
        }
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $(".current-page").removeClass("current-page");
        $(this).parent().addClass("current-page");

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 5
        }, 500);
    });

    $("body").on("click", ".close-button", function () {
        $(".cover").fadeOut(300, function () {
            $(".cover").remove();
        })
    });

    $("body").on("click", ".project-entry", function () {
        if (window.matchMedia("only screen and (max-device-width: 480px)").matches) {
            $(location).attr("href", "./project_content/" + this.id + "/index.html");
        } else {
            $("body").append(`<div class="cover">
        <div class="page-content-center"></div>
        </div>`).hide().fadeIn(200);

            $(".page-content-center").load("project_content/" + this.id + "/index.html .center-window", function () {
                $(".page-content-center > .center-window > header").prepend("<div class='left'></div>").append("<div class='right'><div class='close-button' title='Close'><i class='far fa-times-circle'></i></div></div>");
            });
        }
   });
});