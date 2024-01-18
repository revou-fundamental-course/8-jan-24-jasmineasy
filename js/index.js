// content
const luasBox = document.getElementById("calculator-luas");
const kelilingBox = document.getElementById("calculator-keliling");
const titleBox = document.querySelector(".container-title h3");
const inputs = document.querySelectorAll("input");

// button
const switchLuas = document.querySelector(".btn-luas");
const switchKeliling = document.querySelector(".btn-keliling");
const btnCalc = document.querySelector(".btn-hitung");
const btnReset = document.querySelector(".btn-reset");

// default display
luasBox.style.display = "block";
kelilingBox.style.display = "none";
highlightButton(switchLuas);

// action
switchKeliling.addEventListener("click", function() {
    luasBox.style.display = "none";
    kelilingBox.style.display = "block";
    resetResult("resultLuas");
    updateTitle("Kalkulator Keliling Persegi");
    highlightButton(switchKeliling);
    unhighlightButton(switchLuas);
});

switchLuas.addEventListener("click", function() {
    kelilingBox.style.display = "none";
    luasBox.style.display = "block";
    resetResult("resultKeliling");
    updateTitle("Kalkulator Luas Persegi");
    highlightButton(switchLuas);
    unhighlightButton(switchKeliling);
});


// function
function highlightButton(button) {
    button.style.backgroundColor = "var(--secondary)";
}

function unhighlightButton(button) {
    button.style.backgroundColor = "transparent";
}

function updateTitle(newTitle) {
    titleBox.innerText = newTitle;
}

function calcLuas() {
    let side = parseFloat(document.getElementById("number1").value);

    if(!isNaN(side)) {
        let area = (side * side).toFixed(2);
        showLuas("Luas = " + area + " cm");
    } else {
        alert("Masukkan panjang sisi berupa angka yang valid.")   
    }
}

function calcKeliling() {
    let side = parseFloat(document.getElementById("number2").value);

    if (!isNaN(side)) {
        let perimeter = (4 * side).toFixed(2);
        showKeliling("Keliling = " + perimeter + " cm"); 
    } else {
        alert("Masukkan panjang sisi berupa angka yang valid.");
    }
}

function showLuas(text) {
    const resultElement = document.getElementById("resultLuas");

    const paragraphElement = document.createElement("p");
    paragraphElement.innerText = text;

    if (!resultElement) {
        const newResultElement = document.createElement("div");
        newResultElement.id = "resultLuas";
        newResultElement.classList.add("result");
        newResultElement.appendChild(paragraphElement);
        document.querySelector(".result-box").appendChild(newResultElement);
    } else {
        resultElement.innerHTML = "";
        resultElement.appendChild(paragraphElement);
    }
}

function showKeliling(text) {
    const resultElement = document.getElementById("resultKeliling");

    const paragraphElement = document.createElement("p");
    paragraphElement.innerText = text;

    if (!resultElement) {
        const newResultElement = document.createElement("div");
        newResultElement.id = "resultKeliling";
        newResultElement.classList.add("result");
        newResultElement.appendChild(paragraphElement);
        document.querySelector(".result-box-2").appendChild(newResultElement);
    } else {
        resultElement.innerHTML = "";
        resultElement.appendChild(paragraphElement);
    }
}

function resetResult(elementId) {
    const resultElement = document.getElementById(elementId);

    if (resultElement) {
        resultElement.remove();
        inputs.forEach(input => {
            input.value = "";
        });
    }
}