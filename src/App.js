import './App.css'
import Header from './components/Header/Header';
import Countrieslist from './components/ContriesList/CountriesList';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Countrieslist />
    </div>
  );
}

export default App;
