import React, { useState } from 'react'
import { useEffect } from 'react';
import { EditMovie } from './EditMovie';

export const ListOfMovies = ({listState , setListState}) => {

    // inicializamos con un arry vacio

    // pasamos el stado a traves de props en la app general

    //const[listState, setListState] = useState([]);

    const[editState,setEditState] = useState()

    useEffect(() =>{

        getMovies();

    }, []);

    // obtenemos lo que hay en el local storage

    const getMovies = () =>{

        let movies = JSON.parse(localStorage.getItem("movies"));

        setListState(movies);


        return movies


    };

    // se utiliza el use efecct para conseguir la informacion del local storage una vez cargada la pagina

   //borrdar pelicula

   const deleteMovie = (id) =>{
    
        let savedMovies = getMovies();

        

        // Filtrar peliculas 

        let newArrayMovies = savedMovies.filter( movie => movie.id !== parseInt (id))
        
        console.log(savedMovies,newArrayMovies)

        //actualizar el estado de la lista de peliculas 
        

        setListState(newArrayMovies)

        //actualizar  los datos en el local storage

        localStorage.setItem("movies",JSON.stringify(newArrayMovies));
   }

  return (
    <>

    { listState != null ? 
    
    listState.map((movie,key) => {

        return(

            <article key={movie.id} className="peli-item">

                    <h3 className="title">{movie.title}</h3>
                    <p className="description"> {movie.description}</p>
                    <button 
                        className="edit"
                        onClick={ () => setEditState(movie.id)}
                        >Editar</button>
                    <button 
                        className="delete"
                        onClick={ () =>  deleteMovie(movie.id)}
                    > Borrar
                    </button>


                     { editState === movie.id && (

                        <EditMovie 
                        movie = {movie} 
                        getMovies = {getMovies}
                        setListState = {setListState}
                        setEditState ={setEditState}/>
                    )}

            </article>


        )

    }):
    <h1>No hay peliculas para mostrar...</h1>
    }
       
        
    </>
  )
}
