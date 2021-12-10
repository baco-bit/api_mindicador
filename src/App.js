import './App.css';

function App() {


  fetch('https://mindicador.cl/api').then(function (response) {
    return response.json();
  }).then(function (dailyIndicators) {
    document.getElementById("UF").innerHTML = 'El valor actual de la UF es $' + dailyIndicators.uf.valor;
    document.getElementById("DolarO").innerHTML = 'El valor actual del Dólar observado es $' + dailyIndicators.dolar.valor;
    document.getElementById("DolarA").innerHTML = 'El valor actual del Dólar acuerdo es $' + dailyIndicators.dolar_intercambio.valor;
    document.getElementById("Euro").innerHTML = 'El valor actual del Euro es $' + dailyIndicators.euro.valor;
    document.getElementById("IPC").innerHTML = 'El valor actual del IPC es ' + dailyIndicators.ipc.valor;
    document.getElementById("UTM").innerHTML = 'El valor actual de la UTM es $' + dailyIndicators.utm.valor;
  
    document.getElementById("IVP").innerHTML = 'El valor actual del IVP es $' + dailyIndicators.ivp.valor;
    document.getElementById("Imacec").innerHTML = 'El valor actual del Imacec es ' + dailyIndicators.imacec.valor;
  }).catch(function (error) {
    console.log('Requestfailed', error);
  });



  return (
    <div className='colorFondo'>
      <div className="px-6 pt-3 pb-6 flex flex-row space-x-6">
        <div className="flex flex-col">
          <label>Indicador</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>--- Selecciona una opción ---</option>
            <option value="UF" id="UF">Unidad de Fomento (UF)</option>
            <option value="DolarO">Dolar Observado</option>
            <option value="DolarA">Dolar Acuerdo</option>
            <option value="Euro">Euro</option>
            <option value="IPC">Índice de Precios al Consumidor (IPC)</option>
            <option value="UTM">Unidad Tributaria Mensual (UTM)</option>
            <option value="IVP">Índice de Valor Promedio (IVP)</option>
            <option value="Imacec">Imacec</option>
          </select>

        </div>


        <div className="flex flex-col">
          <label>Año</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>--- Selecciona una opción ---</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

        </div>


        <div className="flex flex-col">
          <label>Mes</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>--- Selecciona una opción ---</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

        </div>
      </div>
    </div>
  );
}

export default App;
