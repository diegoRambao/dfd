let btnCalculate = document.getElementById('calculate')

btnCalculate.addEventListener('click' , (e) => {

    let base    = parseInt(document.getElementById('base').value);
    var height  = parseInt(document.getElementById('height').value);


    let area = (base * height) / 2

    let eleResult = document.getElementById('result')
    eleResult.innerHTML = `<h5> El arae de este triangulo es ${ area }<h5>`;
})
