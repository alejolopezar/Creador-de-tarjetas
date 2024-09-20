 

  const repository = new Repository();



// agregar un Event Listener al boton que ejecutara la funcion creada anteriormente
document.getElementById('actividad-form').addEventListener('submit', function(event){
  event.preventDefault();
  handler();
  document.getElementById('actividad-form').reset()
});

