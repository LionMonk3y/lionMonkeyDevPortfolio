// Rotation circle with logo.
// (i * 360)/textLong}deg - auto letters spread

const circleInfo = document.querySelector(".circleText");
const textLong = circleInfo.innerText.length;

circleInfo.innerHTML = circleInfo.innerText
  .split("")
  .map(
    (char, i) =>
      `<span style = "transform:rotate(${
        (i * 360) / textLong
      }deg)">${char}</span>`
  )
  .join("");
