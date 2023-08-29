function slider(name_slider, index_slider) {
    for (i = 0; i < name_slider.length; i++) {
        if (i == index_slider) {
            name_slider[i].classList.add("active");
        } else {
            name_slider[i].classList.remove("active");
        }
    }
}

const menu = document.querySelector('.main-container');
menu.addEventListener('click', () => document.getElementById("check-menu").checked = false);

let reason_slider = document.querySelectorAll(".reason-slider-list .reason-slider-item");
let reason_slider_index = 0;
let reason_slider_left_button = document.querySelector(".reason-slider-button.left").onclick = () => {reason_slider_index = (reason_slider_index + reason_slider.length - 1) % reason_slider.length; slider(reason_slider, reason_slider_index)};
let reason_slider_rigth_button = document.querySelector(".reason-slider-button.right").onclick = () => {reason_slider_index = (reason_slider_index + 1) % reason_slider.length;slider(reason_slider, reason_slider_index)};

let comment_slider = document.querySelectorAll(".comment-slider-list .comment-slider-item");
let comment_slider_index = 0;
let comment_slider_left_button = document.querySelector(".comment-slider-button.left").onclick = () => {comment_slider_index = (comment_slider_index + comment_slider.length - 1) % comment_slider.length; slider(comment_slider, comment_slider_index)};
let comment_slider_rigth_button = document.querySelector(".comment-slider-button.right").onclick = () => {comment_slider_index = (comment_slider_index + 1) % comment_slider.length;slider(comment_slider, comment_slider_index)};



slider(reason_slider, reason_slider_index);
slider(comment_slider, comment_slider_index);

