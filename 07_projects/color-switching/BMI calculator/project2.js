const form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const guide = document.querySelector('#output')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Enter valid height ${weight}`;
    }
    if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Enter valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
        if (bmi < 18.6) {
            guide.innerHTML = "You are Under weight!";
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            guide.innerHTML = "You are in normal range";
        }
        else{
            guide.innerHTML = "You are Overweight!";
        }
    }
})