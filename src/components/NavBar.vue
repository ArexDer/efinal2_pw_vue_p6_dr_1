<template>
    <div>
      <router-link to="/guardarVehiculo">Guardar Vehículo</router-link>
      <router-link to="/listarVehiculos">Listar Vehículos</router-link>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  div {
    padding: 0px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  div a {
    color: black;
    font-size: 20px;
    margin: 0px 30px;
    padding: 10px;
    border: 2px solid black;
    margin-top: 50px;
    border-radius: 10px;
    background: #41c78f;
  }
  </style>
  