// POPUP
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

// TIME
function time() {
    let time = document.getElementById('input-time');
    let compile = document.getElementById('compile');
    let resetbtn = document.getElementById('reset');

    function startTime() {
        let result = document.getElementById('result');
        result.innerText = 'Тут будет конечный результат';
    }

    function compileTime() {

        let result = document.getElementById('result');

        let second, min;
        let hours = 0;
        let day = 0;

        second = Math.floor(time.value % 60);
        min = Math.floor(time.value / 60);
        if (min > 60) {
            hours = Math.floor(min / 60);
            min = Math.floor(min % 60);
            if (hours >= 24) {
                day = Math.floor(hours / 24);
                hours = Math.floor(hours % 24);
            }
        }
        result.innerText = day + ' дн. ' + hours + ' ч. ' + min + ' мин. ' + second + ' сек. ';
    }

    function reset() {
        time.value = '';

        startTime();
    }
    startTime();
    compile.addEventListener("click", compileTime);
    resetbtn.addEventListener("click", reset);
}
time();

// VALIDATE
function validate() {
    let validinput = document.getElementById('input-valid');
    let validbtn = document.getElementById('btn-valid');
    let help = document.getElementById('help');
    if (validinput.value == '') {
        validbtn.classList.remove("active");
        validbtn.classList.add("no-active");
        help.innerText = 'Пустое поле';
    } else {
        if (validinput.value.length < 6) {
            validbtn.classList.remove("active");
            validbtn.classList.add("no-active");
            help.innerText = 'Нужно мин. 6 символов';
        } else {
            for (let i = 0; i < validinput.value.length; i++) {
                if (/^(0|[0-9]\d*)$/.test(validinput.value[i]) == true) {
                    validbtn.classList.remove("active");
                    validbtn.classList.add("no-active");
                    help.innerText = 'Цифры нельзя';
                    break;
                } else {
                    validbtn.classList.remove("no-active");
                    validbtn.classList.add("active");
                    help.innerText = '';
                }
            }
        }
    }
    validbtn.addEventListener("click", validate);
}
validate();