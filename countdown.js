var cur_num = 0;
function change_num() {
  cur_num++;
  document.querySelectorAll(".cur_num p").forEach((n) => {
    n.innerText = cur_num;
  });
  document.querySelectorAll(".next_num p").forEach((n) => {
    n.innerText = cur_num + 1;
  });
}
function fold() {
  document
    .querySelector(".top_half_2")
    .animate(
      [{ transform: "rotateX(180deg)" }, { transform: "rotateX(0deg)" }],
      {
        duration: 850
      }
    );
  document
    .querySelector(".bottom_half")
    .animate(
      [{ transform: "rotateX(0deg)" }, { transform: "rotateX(-180deg)" }],
      {
        duration: 850
      }
    ).onfinish = change_num;
}

setInterval(() => {
  fold();
}, 1234);
