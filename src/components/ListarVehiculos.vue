<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Acción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(vehiculoMostrar, index) in vehiculoMostrars" :key="index">
            <td>{{ vehiculoMostrar.placa }}</td>
            <td>{{ vehiculoMostrar.marca }}</td>
            <td>{{ vehiculoMostrar.modelo }}</td>
            <td><button @click="ver(vehiculoMostrar)">Ver</button></td>
            <td><button @click="borrar(index)">Borrar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        vehiculoMostrars: [
          { placa: "AAAA", marca: "AAA", modelo: "UNO" },
          { placa: "BBB", marca: "BBB", modelo: "dOS" },
          { placa: "CCC", marca: "CCC", modelo: "tRES" },
      
        ],
      };
    },
    
  };
  </script>
  
  <style scoped>
div{
  margin-top: 20px;
}
  table {
    width: 80%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #000;
    padding: 8px;
    text-align: left;
  }
  button {
    margin: 5px;
  }
  </style>
  