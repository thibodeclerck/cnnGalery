

const setup = () => {

    let thumbMain = document.getElementById("thumbnails");
    let thumbDiv = thumbMain.lastElementChild;

    for (let i = 0; i < galleryData.length; i++){

        let img = document.createElement("img");
        if (i == 0){
            img.classList.add("activeThumbnail");
        }
        img.setAttribute("src", galleryData[i].urlThumb);
        img.setAttribute("index-data", i);
        img.classList.add("thumbnail");
        img.addEventListener("click", geklikt);
        thumbDiv.appendChild(img);

    }
    let right = document.getElementById("image-nav-right");
    let left = document.getElementById("image-nav-left");
    right.addEventListener("click", geklikt);
    left.addEventListener("click", geklikt);
}

const geklikt = (event) => {

    let pic = event.target;
    let index = 0;

    let thumbnails = document.querySelectorAll(".thumbnail");

    if (event.target.id == "image-nav-right"){
        for (let i = 0; i < thumbnails.length; i++){
            if (thumbnails[i].classList.contains("activeThumbnail")){
                index = thumbnails[i].getAttribute("index-data");
                if (index == 10) {
                    index = 0;
                }
                else index++;
                pic = thumbnails[index];
            }
        }
    }

    if (event.target.id == "image-nav-left"){
        for (let i = 0; i < thumbnails.length; i++){
            if (thumbnails[i].classList.contains("activeThumbnail")){
                index = thumbnails[i].getAttribute("index-data");
                if (index == 0) {
                    index = 10;
                }
                else index--;
                pic = thumbnails[index];
            }
        }
    }

    for (let i = 0; i < thumbnails.length; i++){
        thumbnails[i].classList.remove("activeThumbnail");
    }

    if (!event.target.classList.contains("thubmnail") ) {
        pic.classList.add("activeThumbnail");
    }



    index = pic.getAttribute("index-data");
    let counter = document.getElementById("counter");

    let indexLil = index;
    indexLil++;
    counter.innerHTML = `${indexLil} of 11`;

    let copy = document.getElementById("copyright");
    copy.innerHTML = `<strong>Photos: </strong> ${galleryData[index].copyright}`

    let desciption = document.getElementById("description");
    desciption.innerHTML = galleryData[index].description;

    let bigImageDiv = document.querySelector(".image-navigator");
    let bigimage = bigImageDiv.lastElementChild;
    bigimage.setAttribute("src", galleryData[index].urlFull)

}


window.addEventListener("load", setup);