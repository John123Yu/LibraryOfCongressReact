import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar';
import InfoList from './components/InfoList';
import { DataService } from './services/DataService';
import LibraryProvider from './utils/LibraryContext';


function App() {
  return (
    <LibraryProvider>
      <SearchBar dataService={new DataService()} />
      <InfoList />
    </LibraryProvider>
  );
}

export default App;
