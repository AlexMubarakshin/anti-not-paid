(
    function () {
        if (!document.getElementsByTagName("BODY")[0].style.opacity ||
            parseFloat(document.getElementsByTagName("BODY")[0].style.opacity) < 1) {
            document.getElementsByTagName("BODY")[0].style.opacity = 1;
        }
    }
)()