<template>
    <div class="formulario-container">
      <h1>Nuevo </h1>
      <form>
        <ul class="formulario-campos">
          <li class="campo">
            <label for="placa">PLaca:</label>
            <input type="text" id="placa" v-model="placa" />

            <label for="marca">Marca</label>
            <input type="text" id="marca" v-model="marca"/>

            <label for="modelo">Modelo</label>
            <input type="text" id="modelo" v-model="modelo"/>

            <label for="color">Color</label>
            <input type="text" id="color" v-model="color"/>

            <label for="precio">Color</label>
            <input type="text" id="precio" v-model="precio"/>

          </li>
          
        </ul>
        <div class="form-actions">
          <button type="button" @click="guardar">Guardar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
   import {guardarFachada} from '../cliente/clienteVehiculo.js'
  export default {
    data() {
      return {
        
          placa: '',
          marca: '',
          modelo: '',
          color: '',
          precio: ''
        
      };
    },
    methods: {
      async guardar() {
        const bodyV ={
            placa:this.placa, modelo:this.modelo, marca:this.marca,
            color:this.color, precio:this.precio
        }
        const data =await guardarFachada(bodyV)
       console.log(data)
      }
    }
  };
  </script>
  
  <style scoped>
  
  .formulario-container {
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: flex-start;
    background-color: #f9f9f9;
    padding: 20px;
    margin: 0 auto;
    max-width: 600px; 
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  form {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
  }
  
  .formulario-campos {
    list-style-type: none; 
    padding: 0; 
    margin: 0; 
  }
  
  .campo {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  
  .campo label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .campo input,
  .campo select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .form-actions {
    display: flex;
    justify-content: center;
  }
  
  .form-actions button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #28a745;
    color: white;
    cursor: pointer;
  }
  
  .form-actions button:hover {
    background-color: #218838;
  }
  </style>
  