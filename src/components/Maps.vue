<template>
  <div>
    <LMap id="map" :zoom="13" :center="RJ">
      <LTileLayer :url="url" :attribution="attribution" />
    </LMap>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import { latLng } from "leaflet";
export default {
  name: "Maps",
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      RJ: latLng(-22.90278, -43.2075),

       locais: {
        hospitais: [
            { coordenada: latLng(-22.977438568834373, -43.22376255373936), nome: 'Hospital Casa Sao Bernardo', endereco: ''},
            { coordenada: latLng(-22.894501747923233, -43.11561745194479), nome: 'CHN Complexo Hospitalar de Niterói', endereco: ''},
            { coordenada: latLng(-22.894126168786492, -43.11276358166504), nome: 'Hospital Icaraí', endereco: ''},
            { coordenada: latLng(-22.89507499827216, -43.112076936111066), nome: 'Hospital Universitario Antônio Pedro', endereco: ''}
        ],
        delegacias: [
            { coordenada: latLng(-22.892401426922017, -43.116104554755985), nome: '11ª Delegacia do serviço militar', endereco: '' },
            { coordenada: latLng(-23.010919562858362, -43.29695284366607), nome: '16ª DP Barra da Tijuca', endereco: 'Praça Des. Araújo Jorge, s/n - Barra da Tijuca' },
            { coordenada: latLng(-22.89348369875879, -43.117689740222865), nome: '76ª Delegacia de policia', endereco: '' },
            { coordenada: latLng(-22.8845010900135, -43.12201516011271), nome: 'Policia militar', endereco: '' },
        ],
        eventos:[
            {coordenada: latLng(-22.91138889, -43.11083333), nome: 'Praia de Icaraí', endereco: ''},
            {coordenada: latLng(-22.96679444, -43.04854722), nome: 'Praia de Camboinhas', endereco: ''},
            {coordenada: latLng(-22.926165880269334, -43.09607839011997), nome: 'Praia de Charitas', endereco: ''},
            {coordenada: latLng(-22.98944444 , -43.19166667), nome: 'Praia do Arpoador', endereco: ''}
        ],
    },

      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors',
    };
  },
};
</script>

<style>
#map {
  width: 400px;
  height: 400px;
  margin-top: 50px;
  margin-bottom: 15px;
  margin-left:auto;
  margin-right:auto;
}
</style>
