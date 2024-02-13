import Header from './components/Header/Header';
import SearchCountry from './components/SearchCountry/SearchCountry';
import FilterCountry from './components/FilterCountry/FilterCountry';
import CountryList from './components/CountryList/CountryList';
import './App.css';

function App() {


  return (
    <>
      <Header />
      <main>
        <section>
          <SearchCountry />
          <FilterCountry />
        </section>
        <section>
          <CountryList />
        </section>
      </main>
    </>
  )
}

export default App
