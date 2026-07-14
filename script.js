const checks = document.querySelectorAll("input[type='checkbox']");
const progress = document.getElementById("progress");

function updateProgress() {
    let done = 0;

    checks.forEach((check, index) => {
        if (check.checked) {
            done++;
            check.parentElement.classList.add("done");
        } else {
            check.parentElement.classList.remove("done");
        }

        // сохраняем состояние
        localStorage.setItem("goal-" + index, check.checked);
    });

    progress.innerHTML = "Выполнено: " + done + " / 10";
}

// загружаем сохранённые цели
checks.forEach((check, index) => {
    let saved = localStorage.getItem("goal-" + index);

    if (saved === "true") {
        check.checked = true;
    }

    check.addEventListener("change", updateProgress);
});

// обновляем вид сразу после загрузки
updateProgress();
