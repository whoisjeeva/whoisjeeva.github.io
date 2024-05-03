document.addEventListener('DOMContentLoaded', function() {
    if (location.hostname !== "localhost") {
        setTimeout(function () {
            fetch('https://www3.doubleclick.net', {
                method: "HEAD",
                mode: "no-cors",
                cache: "no-store",
            }).catch(() => {
                document.querySelector("#message-dialog").style.display = "flex";
                document.querySelector("#blocker-message").style.display = "flex";
            });
        }, 1000);
    }
})