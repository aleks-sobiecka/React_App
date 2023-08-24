import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm'
import List from './components/List/List';
import Container from './components/Container/Container';

const App = () => {
  //włączenie funkcji Hero i SearchForm
  //zwrócenie tego co te komponenty zwracają do App
  return (
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
  );
};

export default App;