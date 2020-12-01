<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col><Map/><span class="pad">Lorem ipsum dolor uia fugit iste quod nisi? Exercitatnem, quibusdam.</span></b-col>
      <b-col><Map /><span class="pad">Lorem ipsum dolor uia fugit iste quod nisi? Exercitatnem, quibusdam.</span></b-col>
      <b-col><Map /><span class="pad">Lorem ipsum dolor uia fugit iste quod nisi? Exercitionem, quibusdam.</span></b-col>
      <b-col><Map /><span class="pad">Lorem ipsum dolor uia fugit iste quod nisi? Exertationem, quibusdam.</span></b-col>
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
          coordenada: latLng(-22.977438568834373, -43.22376255373936),
          nome: "Hospital Casa Sao Bernardo",
          endereco: "",
        },
        {
          coordenada: latLng(-22.894501747923233, -43.11561745194479),
          nome: "CHN Complexo Hospitalar de Niterói",
          endereco: "",
        },
        {
          coordenada: latLng(-22.894126168786492, -43.11276358166504),
          nome: "Hospital Icaraí",
          endereco: "",
        },
        {
          coordenada: latLng(-22.89507499827216, -43.112076936111066),
          nome: "Hospital Universitario Antônio Pedro",
          endereco: "",
        },
      ],
    };
  },
};
</script>

<style>
.pad{
  margin-left: 10px;
}
</style>