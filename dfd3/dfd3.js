let btnCalculate = document.getElementById('calculate')

btnCalculate.addEventListener('click' , (e) => {

    let liters    = parseInt(document.getElementById('liters').value);
    let min = 50000 / liters 
    let hours = min / 60

    let eleResult = document.getElementById('result')
    eleResult.innerHTML = `<h5> El Tanque tarda en llenarse ${ hours } horas<h5>`;
})
