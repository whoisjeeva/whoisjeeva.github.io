let nextVideo = document.querySelectorAll("a.next-video");
let nextVideoReal = document.querySelectorAll("a.next-video-real");


if (nextVideo.length > 0) {
    nextVideo[0].addEventListener("click", e => {
        nextVideoReal[0].click();
    }, false);
}


let videoItems = Array.from(document.querySelectorAll(".video-item-container a.video-item"));

for (let el of videoItems) {
    el.addEventListener("click", e => {
        el.parentElement.querySelector(".real-link").click();
    }, false)
}
