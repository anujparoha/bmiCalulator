const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "OOPS!! 😁 Please provide a valid Height";
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "OOPS!! 😁 Please provide a valid Weight";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            result.innerHTML = `<span>Your result is ${bmi}<br> You Need to gain weight 🫠🫠</span>`;
        } else if (bmi > 18.6 && bmi < 24.9) {
            result.innerHTML = `<span>Your result is ${bmi}<br> Congrats 😎😎 You are in the healthy range</span>`;
        } else {
            result.innerHTML = `<span>Your result is ${bmi}<br> Oops 🥲🥲! You are Overweight</span>`;
        }
    }
});
