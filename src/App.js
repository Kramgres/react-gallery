import './sass/main.scss'
import {BrowserRouter, Route} from "react-router-dom";
import CatalogContainer from "./components/Catalog/CatalogContainer";
import AlbumContainer from "./components/Album/AlbumContainer";

function App() {
  return (
    <BrowserRouter>
        <div className='main'>
            <Route exact path='/' render={() => <CatalogContainer/>}/>
            <Route path='/album/:albumId' render={() => <AlbumContainer/>}/>
        </div>
    </BrowserRouter>
  )
}

export default App;
