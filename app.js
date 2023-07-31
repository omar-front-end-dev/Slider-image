const mainImage = document.getElementById("main--image");
const all_Small_Images = document.querySelectorAll(".box img");
const btn_Prev = document.getElementById("prev");
const btn_Next = document.getElementById("next");

let state = 0;
btn_Next.onclick = () => {
    state+= 1
    if (state < all_Small_Images.length) {
        mainImage.src = all_Small_Images[state].src
    }else{
        state = 0;
        mainImage.src = all_Small_Images[state].src
    }
}
btn_Prev.onclick = () => {
    state = state -1
    if (state >= 0) {
        mainImage.src = all_Small_Images[state].src
    }else{
        state = all_Small_Images.length -1;
        mainImage.src = all_Small_Images[state].src
    }
}

all_Small_Images.forEach(element =>{
    element.onclick = () =>{
        mainImage.src = element.src
    }
});