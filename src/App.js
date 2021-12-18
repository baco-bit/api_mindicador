import './App.css';
import DatosSolicitar from './Components/DatosSolicitar';


function App() {



  const fetchData = async () => {
    try {

      const res = await fetch(`https://mindicador.cl/api/`)
      const data = await res.json()

      console.log(data);


      let fechas = [];
      for (let value of data.fecha.substring(0,10)) {
        fechas.push(value)
      }
      console.log(fechas);

    } catch (error) {
      console.log(error)
    }
  }

  fetchData()

  return (
    <div id='fechas'>
      <DatosSolicitar />

    </div>
  );
}

export default App;
