


 export const SendToLocalStorage = (key, item) => {

  // conseguir los elementos que existen en el localStorage

  let items = JSON.parse(localStorage.getItem(key))

  console.log(items);

  // comprobar si es un array

  if(Array.isArray(items)){

      items.push(item)
  }else{

      items = [item];
  }

  console.log(items)

  // guardarmos en el localStorage

  localStorage.setItem(key, JSON.stringify(items));

  //  devolver el objeto guardado

  return item


}