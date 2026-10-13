(function () {
    document.querySelector("#ex1_button").addEventListener("click", () => {
        let btn1 = document.querySelector("#ex1_content");
        for (let i = 0; i < 10; i++) {
            btn1.textContent += `${i} `;
        }
    });
    let input = document.querySelector("#ex2_text");
    let info = document.querySelector("#ex2_content");
    input.addEventListener("change", () => {
        let text = input.value;
        if (/\p{L}/u.test(text)) {
            info.textContent = "Numer nie może zawierać liter";
        } else if (/[^0-9]/.test(text)) {
            info.textContent = "Numer nie może zawierać znaków specjalnych";
        } else if (text.length !== 9) {
            info.textContent = "Długość numeru musi być równa 9";
        } else {
            info.textContent = "";
        }
    });
})();
