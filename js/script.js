function slider(main_slider, counter_slider = 0, index_slider = 0) {
    
    function inner() {
        index_slider = (index_slider + counter_slider) % main_slider.length;
        for (i = 0; i < main_slider.length; i++) {
            if (i == index_slider) {
                main_slider[i].classList.add("active");
            } else {
                main_slider[i].classList.remove("active");
            }
        }
        console.log(index_slider);
    }
    return inner
  
}

const menu = document.querySelector('.main-container');
let reason_slider = document.querySelectorAll(".reason-slider-list .reason-slider-image")
let reason_slider_left = slider(reason_slider, reason_slider.length-1);
let reason_slider_right = slider(reason_slider, 1);

let reason_slider_left_button = document.querySelector(".reason-slider-button.left").onclick = () => reason_slider_left();
let reason_slider_rigth_button = document.querySelector(".reason-slider-button.right").onclick = () => reason_slider_right();

menu.addEventListener('click', ()=>  document.getElementById("check-menu").checked = false);

slider(reason_slider)

