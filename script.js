function calculateCalories() {
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const sport = parseFloat(document.getElementById("sport").value);
    const activity = parseFloat(document.getElementById("activity").value);
    const goal = document.getElementById("goal").value;

    if (isNaN(age) || isNaN(height) || isNaN(weight)) {
        alert("Bitte gib alle Felder korrekt ein.");
        return;
    }

    let bmr;
    if (gender === "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === "female") {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    } else {
        bmr = 500 + (12 * weight) + (5 * height) - (5 * age);
    }

    const tdee = bmr * activity * sport;

    let calories;
    if (goal === "deficit") {
        calories = tdee - 500;
    } else if (goal === "surplus") {
        calories = tdee + 500;
    } else {
        calories = tdee;
    }

    document.getElementById("calories-result").innerText = `Dein Kalorienbedarf ist ca. ${Math.round(calories)} kcal pro Tag.`;
}

function calculateBMI() {
    const age = parseInt(document.getElementById("bmi-age").value);
    const height = parseInt(document.getElementById("bmi-height").value);
    const weight = parseInt(document.getElementById("bmi-weight").value);

    if (isNaN(age) || isNaN(height) || isNaN(weight)) {
        alert("Bitte gib alle Felder korrekt ein.");
        return;
    }

    const bmi = weight / ((height / 100) ** 2);

    let interpretation;
    if (bmi < 18.5) {
        interpretation = "Untergewicht";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = "Normalgewicht";
    } else if (bmi >= 25 && bmi < 29.9) {
        interpretation = "Übergewicht";
    } else {
        interpretation = "Adipositas";
    }

    document.getElementById("bmi-result").innerText = `Dein BMI ist: ${bmi.toFixed(1)}`;
    document.getElementById("bmi-interpretation").innerText = `Interpretation: ${interpretation}`;
}