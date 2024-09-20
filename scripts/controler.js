//crear una funcion que reciva como parametro un  objeto instancia de Activity
function crearTarjeta (activity){

    //extraer sus propiedades en variables utilizando destructuring
    const {id, title, descripcion, imgUrl} = activity;
  
    //crear los elementos HTML que formaran parte de la tarjeta
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
  
    //asignar los valores a las propiedades correspondientes a cada uno de los elementos
    img.src = imgUrl;
    img.alt = title;
    h3.textContent = title;
    p.textContent = descripcion;
  
    //agregar los elementos a las clases CSS correspondientes que hayas implementado para darles estilos
    
    //crear un <div> que sera la tarjeta donde incluiremos todo los demas elementos
    const div = document.createElement("div");
    
    //Asignar el ID al div para poder identificarlo
    div.setAttribute("id", id);
  
    //"Appendear" al nuevo <div> los elementos creados
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    
    //asignar al <div> la clase css que tengas implementada para dale estilos
    div.classList.add("actividad-tarjeta");
    
    //creo un event listener para eleiminar tarjetas
    div.addEventListener("dblclick", (event) => {
      const id = parseInt(event.currentTarget.getAttribute("id"));
      repository.deleteActivity(id);
      event.currentTarget.remove();
    })
    
    //Retorna <div> finalizado con todos los elementos correspondientes dentro
    return div;
  }
  
  //crear una funcion que convertira todas las intancias de "Activity" en elementos HTML
  function convertidor (){
    
    // seleccionar el contenedor donde queremos agregar las actividades
    const actividadesContainer = document.getElementById ("actividades-container");
  
    // vaciar el contenido actual del contenedor
    actividadesContainer.innerHTML = "";
  
    // obtener el listado completo de actividades
    const listAtivities = repository.getAllActivities();
  
    //"Mapear" el listado de actividades para convertirlos en elementos HTML
    const arrayTarjetas = listAtivities.map(crearTarjeta);
  
    //"Appendear" todos los elementos HTML del nuevo array dentro del contenedor
    arrayTarjetas.forEach(tarjeta => actividadesContainer.appendChild(tarjeta));
  }
  
  // Crear funcon handler
  function handler (){
  
    // seleccionar los inputs de title, description e imgUrl
    const title = document.getElementById("actividad");
    const description = document.getElementById("descripcion");
    const imgUrl = document.getElementById("link");
  
    // tomar los valores ingresados en los inputs y guardarlos en varibles
    const valorInputTitulo = title.value;
    const valorInputDescription = description.value;
    const valorInputImgUrl = imgUrl.value;
  
    // validar que estos valores esten completos
    if (valorInputDescription === "" || valorInputImgUrl === "" || valorInputTitulo === ""){
      return alert("Hay datos incompletos");
    }
  
    // llamar al metodo correspondiente de la instancia de Repository para crear una nueva actividad
    repository.createActivity(valorInputTitulo,valorInputDescription,valorInputImgUrl);
    
    // invocar la funcion que implementamos anteriormente para "refrescar" el contenedor de actividades
    convertidor();
  }