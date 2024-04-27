let bookItems = document.querySelectorAll("[data-image]");
var imgArray = Array.from(bookItems);

var checkImage = function checkImage(bookItem) {
    if (bookItem.getBoundingClientRect().top < window.innerHeight) {
        bookItem.style.background = "url(" + bookItem.getAttribute("data-image") + ")";
        bookItem.style.backgroundPosition = "center";
        bookItem.style.backgroundSize = "cover";
        return false;
    }
    return true;
};


var scrollHandler = function scrollHandler() {
    imgArray = imgArray.filter(checkImage);
    if (!imgArray.length) {
        window.removeEventListener("scroll", scrollHandler);
    }
};

window.addEventListener("scroll", scrollHandler);
imgArray = imgArray.filter(checkImage);
