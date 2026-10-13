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
        if (text.length != 9) {
            info.textContent = "Długość numeru musi być równa 9";
        } else if (!/^\d+$/.test(text)) {
            info.textContent = "Numer nie może zawierać liter";
        } else {
            info.textContent = "";
        }
    });
})();
