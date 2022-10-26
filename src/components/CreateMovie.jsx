import React from 'react'
import { useState } from 'react';
import { SendToLocalStorage } from '../helpers/services/SendToLocalStorage';

export const CreateMovie = ({setListState}) => {

    const[movieState,setMovieState] = useState({

        id: " ",
        title:" ",
        description: " "
        
    })

    const ComponentTitle = "Add movie";

    // destructuracion de objeto 

    const { title, description} = movieState;

    const getDataForm = (e) =>{

        e.preventDefault();

        alert("Formulario enviado");

        let data = e.target;

        let title = data.title.value;

        let description = data.description.value
        
        console.log(`este es el titulo ${title} y esta su descripcion ${description}`);
        
        // create a movie object

        let movie = {

            id: new Date().getTime(),
            title,
            description
        }

        // guardar el estado

        setMovieState(movie);

        //actualizar el estado de la lista de peliculas
        setListState(elements => {

            return [...elements,movie]
            
        })

        // guardar en el localStorage
        // metodo para guardar en el localStorage importado de servicios

        SendToLocalStorage("movies", movie);

        

        // se creo un helper utilizable para guardar cualquier cosa en local storage

        SendToLocalStorage("movies_copy", movie)

        



        console.log(movie);

    }

   





  return (

    <div className="add">
        <h3 className="title"> {ComponentTitle} </h3>

        {/* usamos la desestructuracion de objeto */}

        <h4>{(title && description) && "Has creado la pelicula : " + title }</h4>



        <form onSubmit={getDataForm}>

            <input type="text"
                   id='title'
                   placeholder='Movie...'
                   name='title'/>

            <textarea 
                      placeholder="Descripcion..."
                      id='description'
                      name='description'
                        
            ></textarea>

            <button type="submit" 
                    id='save'
                    value="save"
                    name='save'
                    > Guardar 
            </button>
        </form>
    </div>
    
  )
}
