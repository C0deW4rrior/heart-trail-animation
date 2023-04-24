const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (e) => {
    const xPos = e.clientX;
    const yPos = e.clientY;
    const spanEl = document.createElement("span");
    const size = Math.random() * 100;

    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});