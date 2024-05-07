document.addEventListener('DOMContentLoaded', function () {
    let fakeAd = document.createElement("div");
    fakeAd.className = "textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox"
    fakeAd.style.height = "1px"

    document.body.appendChild(fakeAd)


    setTimeout(function() {
        let x_width = fakeAd.offsetHeight;
        if (x_width) {
            document.querySelector("#blocker-message").style.display = "none";
        } else {
            document.querySelector("#blocker-message").style.display = "flex";
        }
    }, 1000)
})