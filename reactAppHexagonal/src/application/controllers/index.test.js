
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { Reservation } from '../controllers/';
import { reducer } from "../reducers";


var container; 

describe("Reservation controller", () => {
  beforeEach( function() {
    const middleware = [thunk]
    if (process.env.NODE_ENV !== 'production') {
        // @ts-ignore
        middleware.push(createLogger())
    }
    
    const store = createStore(reducer, applyMiddleware(...middleware))
    container  = render(<Provider store={store}>
    
      <Reservation />
      
    </Provider>);
  });



  it("Reservation render",  () => {
    const textoTitulo = screen.getByText("Listado de Reservation"); 
    expect(textoTitulo).toBeInTheDocument();
  });
  


it("Abrir formulario para crear Reservation",  () => {
   let app= container.container;
   const buttonNuevoReservation = app.querySelector('button')
   expect(buttonNuevoReservation).toBeInTheDocument();

   fireEvent.click(buttonNuevoReservation); 
   const textoTituloFormulario = screen.getByText("Nuevo Reservation"); 
   expect(textoTituloFormulario).toBeInTheDocument();
});



it("Validar campos, habilitar botón Guardar si los campos están completos",  () => {
  let app= container.container;
  const buttonNuevoReservation = app.querySelector('button')
  expect(buttonNuevoReservation).toBeInTheDocument();

  fireEvent.click(buttonNuevoReservation); 
  const textoTituloFormulario = screen.getByText("Nuevo Reservation"); 
  expect(textoTituloFormulario).toBeInTheDocument();

  
  const inputNombre = app.querySelector('#idName');
  expect(inputNombre).toBeInTheDocument();

  const inputImagen = app.querySelector('#idImage');
  expect(inputImagen).toBeInTheDocument();

  const crearBoton = app.querySelector('#crearId');
  expect(crearBoton).toBeInTheDocument();

  expect(crearBoton).toBeDisabled();
  
  fireEvent.change(inputNombre, { target: { value: 'Pikachu' } })
  fireEvent.change(inputImagen, { target: { value: 'https://img.Reservationdb.net/artwork/pikachu.jpg' } })

  expect(crearBoton).not.toBeDisabled();

});


it("Cerrar formulario para crear Reservation",  () => {
  let app= container.container;

  const buttonNuevoReservation = app.querySelector('button')
  fireEvent.click(buttonNuevoReservation); 

  const cancelarBtn = app.querySelector('#cancelarId');
   expect(cancelarBtn).toBeInTheDocument();

  const crearBtn = app.querySelector('#crearId');
  expect(crearBtn).toBeInTheDocument();


  fireEvent.click(cancelarBtn);
  expect(cancelarBtn).not.toBeInTheDocument();
  expect(crearBtn).not.toBeInTheDocument(); 
});




  });

  export { };

