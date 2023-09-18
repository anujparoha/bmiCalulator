const form = document.querySelector('form');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const result = document.querySelector('#result');

function calculateBMI() {
    const height = parseInt(heightInput.value);
    const weight = parseInt(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height === '' || weight === '') {
        result.innerHTML = " 😵‍💫😵‍💫 Please provide both height and weight values";
    } else if (height < 0 || weight < 0) {
        result.innerHTML = "OOPS!! 😁 Height and weight values should be positive";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            result.innerHTML = `<span>Your result is ${bmi}<br> You Need to gain weight 🫠🫠</span>`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = `<span>Your result is ${bmi}<br> Congrats 😎😎 You are in the healthy range</span>`;
        } else {
            result.innerHTML = `<span>Your result is ${bmi}<br> Oops 🥲🥲! You are Overweight</span>`;
        }
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    calculateBMI();
});

heightInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        calculateBMI();
    }
});

weightInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        calculateBMI();
    }
});
