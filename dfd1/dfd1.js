let btnCalculate = document.getElementById('calculate')

btnCalculate.addEventListener('click' , (e) => {

    let inputYearMost   = parseInt(document.getElementById('yearMost').value);
    var inputYearMinor  = parseInt(document.getElementById('yearMinor').value);
    

    if( inputYearMinor > inputYearMost ) {
        alert('El año menor es mayor que el añor mayor, ingrese un año menor. ')
        return
    }

    let years = inputYearMost - inputYearMinor
    let months = years * 12

    let eleResult = document.getElementById('result')
    eleResult.innerHTML = `<h5> Entre el año ${ inputYearMinor } y el año ${ inputYearMost } hubo ${ months } meses.<h5>`;
})
