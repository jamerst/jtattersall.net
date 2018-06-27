$(document).ready(function () {
    $("body").on("click", ".close-button", function () {
        $(".cover").fadeOut(300, function () {
            $(".cover").remove();
        })
    });

    $(".project-entry").click(function () {
       $("body").append(`<div class="cover">
        <div class="page-content-center"></div>
        </div>`).hide().fadeIn(200);

       $(".page-content-center").load("project_content/" + this.id + "/index.html .center-window", function () {
           $(".page-content-center > .center-window > header").prepend("<div class='left'></div>").append("<div class='right'><div class='close-button' title='Close'><i class='far fa-times-circle'></i></div></div>");
       })
   });
});