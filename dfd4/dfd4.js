let btnCalculate = document.getElementById('calculate')

btnCalculate.addEventListener('click' , (e) => {

    let miles    = parseInt(document.getElementById('miles').value);
    let meter = miles * 1852
    

    let eleResult = document.getElementById('result')
    eleResult.innerHTML = `<h5> La distancia en metros es ${ meter } <h5>`;
})
