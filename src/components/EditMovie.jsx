import React from 'react'

export const EditMovie = ({movie, getMovies, setListState,setEditState}) => {

    const editMovieTitle = "Edit movie"

    const saveEditForm = (e, id ) =>{
        
        e.preventDefault()

        console.log(id);

        //conseguir el target


        let data = e.target;


        let storagedMovies = getMovies();

        //buscar el indice a actualizar

        let index = storagedMovies.findIndex(movie => movie.id === id);

        console.log(index)

        //crear un objeto del indice

        let updatedMovie = {

            id,
            title: data.title.value,
            description: data.description.value,

        }

        //actualizar el elemento

        storagedMovies[index] = updatedMovie;

        //guardar el nuevo array

        localStorage.setItem("movies",JSON.stringify(storagedMovies));


        //actializar estados

        setEditState(storagedMovies);
        setEditState(0);


    }


  return (
    <div className='editForm'>
        
        <h3 className='title'>{editMovieTitle}</h3>
        <hr />
        <form onSubmit={ (e) => saveEditForm(e,movie.id)} >
            <input type="text" 
                   name='title'
                   className='editedTitle'
                   defaultValue= {movie.title}/>
            <textarea 
                    id='description'
                    name='description'
                    defaultValue= {movie.description}
                    className='editedDescription'>
            </textarea>
            <input type="submit"
                   className='editMovieButton'
                   value="Actualizar" />
             <input type="submit"
                   className='editMovieButtonCancel'
                   value="Cancelar" />
        </form>
    </div>
  )
}
