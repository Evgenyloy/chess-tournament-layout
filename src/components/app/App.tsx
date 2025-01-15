import Header from '../header/Header';
import Ticker from '../ticker/Ticker';
import Lecture from '../lecture/Lecture';
import Tournament from '../tournament/Tournament';
import Transformation from '../transformation/Transformation';
import Participants from '../participants/Participants';
import Footer from '../footer/Footer';
import './_app.scss';

function App() {
  return (
    <>
      <Header />
      <Ticker />
      <Lecture />
      <Tournament />
      <Transformation />
      <Participants />
      <Ticker />
      <Footer />
    </>
  );
}

export default App;
