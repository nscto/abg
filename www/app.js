var firstUrl = "https://www.abatigresik.com/app/",
	urlService = firstUrl + "services/apps.php",
	urlContent = firstUrl + "contents/";

$.getScript(urlContent+"main.js");
function run_first(){
    var height = $(window).outerHeight(), height2 = height - 0;
    $("#main-loading").height(height).removeClass("hide");
}
run_first();