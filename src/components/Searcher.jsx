import React from 'react'
import { useState } from 'react'

export const Searcher = ({listState,setListState}) => {


  const [searchState, setSearchState] = useState('');

  const [notFound,setNotFound] = useState(false);






  const searchMovie = (e) =>{

     //crear un estado y actualizarlo

     setSearchState(e.target.value)

     console.log(searchState);

    // Listado completo de peliculas
    
    let searchedMovies = listState.filter(movie => {

      return movie.title.toLowerCase().includes(searchState.toLowerCase());

    })


    if(searchState.length <= 1 || searchedMovies.length <=0){

      searchedMovies = JSON.parse(localStorage.getItem("movies"))
      setNotFound(true)

    }else{
      setNotFound(false)
    }


    console.log(searchedMovies)

    setListState(searchedMovies)





    // filtrar para buscar coincidencias
    // Comprobar si hay resultado
    // dar valor de todo en local storage
    // Actualizar estado del listado principal con lo filtrado






  }

 


  return (

    <div className="search">
        <h3 className="title">Buscar: {searchState}</h3>

        { (notFound === true && searchState.length > 1)&& (

             <span className='notFound'> No se encontraron coincidencias </span>

        )}
     
        <form action="">
            <input type="text"
                   name='searchField'
                   autoComplete='off'
                   value= {searchState}
                   onChange = {searchMovie}
                    />
            <button>Buscar</button>
        </form>
    </div>
    
  )
}
