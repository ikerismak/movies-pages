import { useState } from "react";
import { CreateMovie } from "./components/CreateMovie";
import { ListOfMovies } from "./components/ListOfMovies";
import { Searcher } from "./components/Searcher";


function App() {

    const[listState, setListState] = useState([]);

  return (
    <div className="App">

<div className="layout">
        {/* <!-- header page --> */}
        <header className="header">
            <h1>Peliculas</h1>
            <div className="logo">
                <div className="play"></div>
            </div>
        </header>
        {/* <!-- navbar --> */}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>

        </nav>
        {/* <!-- main content --> */}

        <section className="content">

           {/* content movies list */}

           <ListOfMovies listState = {listState} setListState = {setListState}/>

        </section>

        {/* <!-- side bar --> */}

        <aside className="lateral">
          {/* Searcher */}
            <Searcher listState = {listState} setListState = {setListState}/>
            <CreateMovie setListState = {setListState}/>
        </aside>
            {/* <!-- footer page --> */}
        <footer className="footer">
            &copy; Iker Ismak Toscano Santos, React proyect - <a href="https://github.com/ikerismak"> ikerismak.com</a>
        </footer>



    </div>

      
      
    </div>
  );
}

export default App;
