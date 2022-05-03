import './App.css';
import NavBar from './componets/NavBar/NavBar';
import Button from './componets/button';
import ItemsListConteiner from './componets/ItemsListConteiner/ItemsListConteiner';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Button texto= 'buscar'color= 'rgb(77, 174, 231)'/>
      <ItemsListConteiner greeting='Catalogo' />
    </div>
  );
}

export default App;
