import logo from './logo.svg';
import './App.css';
import ListeCellulaires from './components/ListeCellulaires';
import ModifierCellulaire from './components/ModifierCellulaire';
import AjouterCellulaire from './components/AjouterCellulaire';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Navbar';

function App() {
  return (
    <div>
        <Router>
          <div>
            <Header  />
            <Routes>
               <Route path='/' element={ <ListeCellulaires 
                                           />}>
     
               </Route>
               {/* <Route path='/ajouter' element={<AjouterCellulaire                                     
                                             />}>
     
             </Route>
             <Route path='/modifier' element={<ModifierCellulaire
                                               />}>
             </Route> */}
            </Routes>
          </div>
        </Router>
     </div>
  );
}

export default App;
