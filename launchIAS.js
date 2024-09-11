const refreshBtn = document.querySelector(".fa-sync-alt");
const captchaText = document.querySelector(".code_box p");
const Top = document.querySelector(".show_bar_top");
const bar = document.querySelector(".fa-bars");
const slider = document.querySelectorAll(".slide");
const move = document.querySelector(".slide");
const Slider = document.querySelectorAll(".Slide");
const Greater = document.querySelector(".fa-less-than");
const Less = document.querySelector(".fa-greater-than");
const greater = document.querySelectorAll(".greater");
const submitBtnForm = document.querySelector('.submit-btn-form');
const form = document.querySelector("form");

submitBtnForm.addEventListener('click', (event) => {
  event.preventDefault(); 
  let isEmpty = false;

 
  Array.from(form.elements).forEach((element) => {
    if (element.type !== "submit" && element.value.trim() === '') {
      isEmpty = true;
    }
  });

  if (isEmpty) {
    alert('Please check the form and provide some input.');
  } else {
    alert('Your form is successfully submitted.');
    form.submit();
  }
});
const input = document.querySelector("input");
const add = document.querySelector(".fa-search");
const arrow = document.querySelector(".fa-plus");
const searchBar = document.querySelector(".search_bar");


add.addEventListener("click", () => {
  searchBar.classList.toggle("search_bar_show");
});
arrow.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please provide input");
  } else {
    alert("Successfully Searched your item");
    setTimeout(() => {
      input.value = "";
    }, 140);
    setTimeout(() => {
      
      searchBar.classList.remove("search_bar_show");
    }, 1000);
  }
});

let counter = 0;

Greater.addEventListener("click", function () {
  counter++;
  carousel();
  // console.log("click");
});

Less.addEventListener("click", function () {
  counter--;
  carousel();
 
});

function carousel() {
  // working with slides
  if (counter === Slider.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = Slider.length - 1;
  }
  // working with buttons

  Slider.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
    slide.style.textAlign = "center";
  });
}
// ###########
slider.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

Slider.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

const time = document.querySelector(".fa-times-circle");
bar.addEventListener("click", () => {
  Top.classList.add("show_back");
});

time.addEventListener("click", () => {
  Top.classList.remove("show_back");
});

const data = ["a", "B", "C", "d", "E", "@", "#", "$", 1, 3, 4, 6, 7, 8];

function generateCaptcha() {
  let captcha = [];
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    console.log(data[randomIndex]);

    captcha += data[randomIndex];
  }
  captchaText.textContent = captcha;
}

refreshBtn.addEventListener("click", generateCaptcha);

const btns = document.querySelectorAll(".fa-caret-right");
const texts = document.querySelectorAll(".text");

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    texts[index].classList.toggle("show-text");
    btn.classList.toggle("active");
  });
});
