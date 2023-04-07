function popup() {
    let open = document.getElementById('btn-open');
    let close = document.getElementById('btn-close');
    let block = document.getElementById('block');

    open.addEventListener("click", () => {
        block.style.display = "flex";
    })
    close.addEventListener("click", () => {
        block.style.display = "none";
    })
}
popup();