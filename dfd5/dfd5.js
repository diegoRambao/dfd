let btnCalculate = document.getElementById('calculate')

btnCalculate.addEventListener('click' , (e) => {

    let rate            = parseInt(document.getElementById('rate').value);
    let pricePaid       = parseInt(document.getElementById('pricePaid').value);
    let discount = pricePaid - rate
    let percent =  discount * 100 / rate

    

    let eleResult = document.getElementById('result')
    eleResult.innerHTML = `<h5> El porcentaje del descuento es ${ percent }% <h5>`;
})
