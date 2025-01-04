import Header from '../header/Header';
import Ticker from '../ticker/Ticker';
import Lecture from '../lecture/Lecture';
import Tournament from '../tournament/Tournament';
import './_app.scss';

function App() {
  return (
    <>
      <Header />
      <Ticker />
      <Lecture />
      <Tournament />
    </>
  );
}

export default App;
