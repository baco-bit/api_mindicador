
function DatosSolicitar() {


  return (
    <div className='colorFondo'>
      <div className="px-6 pt-3 pb-6 flex flex-row space-x-6">
        <div className="flex flex-col">
          <label>Indicador</label>

          <div className="btn-group" role="group" aria-label="Basic example">

            <button type="button" className="btn btn-outline-primary" id="UF">UF</button>
            <button type="button" className="btn btn-outline-primary" id="DolarO">DolarO</button>
            <button type="button" className="btn btn-outline-primary" id="DolarA">DolarA</button>
            <button type="button" className="btn btn-outline-primary" id="Euro">Euro</button>
            <button type="button" className="btn btn-outline-primary" id="IPC">IPC</button>
            <button type="button" className="btn btn-outline-primary" id="UTM">UTM</button>
            <button type="button" className="btn btn-outline-primary" id="IVP">IVP</button>
            <button type="button" className="btn btn-outline-primary" id="Imacec">Imacec</button>

          </div>

        </div>


        <div className="flex flex-col">
          <label>Año</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>--- Selecciona una opción ---</option>
            <option id="dates"></option>

          </select>

        </div>


        <div className="flex flex-col">
          <label>Mes</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>--- Selecciona una opción ---</option>
            <option value="1">Enero</option>
            <option value="2">Febrero</option>
            <option value="3">Marzo</option>
            <option value="4">Abril</option>
            <option value="5">Mayo</option>
            <option value="6">Junio</option>
            <option value="7">Julio</option>
            <option value="8">Agosto</option>
            <option value="9">Septiembre</option>
            <option value="10">Octubre</option>
            <option value="11">Noviembre</option>
            <option value="12">Diciembre</option>
          </select>

        </div>
      </div>
    </div>
  );
}

export default DatosSolicitar;
