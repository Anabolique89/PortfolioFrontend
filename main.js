//------fancy smansy------//
const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

//smooth scrolling
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $("#toTopBtn").fadeIn();
    } else {
      $("#toTopBtn").fadeOut();
    }
  });

  $("#toTopBtn").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });
});
