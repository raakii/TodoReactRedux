import { Provider } from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import AddTask from './pages/AddTask';
import Home from './pages/Home';
import Update from './pages/Update';
import { StyledWrapper } from './styled/StyledWrapper';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <StyledWrapper>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/addTask" element={ <AddTask /> } />
      <Route path="/update/:id" element={ <Update /> } />
    </Routes>
   </StyledWrapper>
   </Provider>
  );
}

export default App;
