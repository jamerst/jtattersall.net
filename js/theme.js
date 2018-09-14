if (Cookies.get("theme") == undefined) {
    Cookies.set("theme", "light");
}

if (Cookies.get("theme") === "dark") {
    $("head").append("<link href='/css/main_dark.css' type='text/css' rel='stylesheet'/>");
}
