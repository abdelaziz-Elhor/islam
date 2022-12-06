window.onscroll = function () {
    if (window.scrollY >= 700) {
        if ($("#topcontrol").length == 0) {

            $("body").append(`<div id="topcontrol" class="fa fa-angle-up" title="اعلى" style="bottom: 10px;"></div>`)
            $("#topcontrol").click(function () {
                window.scrollTo(0, 0)

            })
        }
    } else {
        $("#topcontrol").remove()


    }
}
