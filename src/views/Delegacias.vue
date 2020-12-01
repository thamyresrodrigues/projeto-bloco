<template>
  <b-container class="bv-example-row">
    <b-row v-for="item in items" :key="item.nome"> 
      <b-col>
         <Map :item="item"/>
      </b-col>
    </b-row>
  </b-container>
</template> 

<script>
import Map from "../components/Maps";
import { latLng } from "leaflet";

export default {
  components: {
    Map,
  },
  data() {
    return {
      items: [
        {
          coordenada: latLng(-22.892401426922017, -43.116104554755985),
          nome: "11ª Delegacia do serviço militar"
        },
        {
          coordenada: latLng(-23.010919562858362, -43.29695284366607),
          nome: "16ª DP Barra da Tijuca"
        },
        {
          coordenada: latLng(-22.89348369875879, -43.117689740222865),
          nome: "76ª Delegacia de policia"
        },
        {
          coordenada: latLng(-22.8845010900135, -43.12201516011271),
          nome: "Policia militar",
        }
      ]
    };
  },
};
</script>

<style>
.pad {
  margin-left: 10px;
}
</style>