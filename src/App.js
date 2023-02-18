import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar';
import { DataService } from './services/DataService';

function App() {
  return (
    <div className="App">
      <SearchBar dataService={new DataService()} />
    </div>
  );
}

export default App;
