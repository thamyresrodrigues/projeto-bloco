<template>
  <b-container class="bv-example-row">
    <b-row v-for="item in items" :key="item.nome"> 
      <b-col>
         <Map :item="item"/>
      </b-col>
      <b-col>
        <div class="div-lorem">
          <strong><p>{{ item.nome }}</p></strong>
          <p>Endereco: {{ item.endereco }}</p>
          <p>Horario de Funcionamento: {{ item.horario }}</p>
          <p>Contato: {{ item.telefone }}</p>
        </div>
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
          coordenada: latLng(-22.982371002958317, -43.21741099952502),
          nome: "Policia Federal PEP - Leblon",
          endereco: 'R. Prof. Antônio Maria Teixeira, 33 - Leblon, Rio de Janeiro - RJ, 22430-050',
          horario: '24 horas',
          telefone: '2199-9090'
        },
        {
          coordenada: latLng(-22.956775720621398, -43.17522885662832),
          nome: "Policia Federal - Urca",
          endereco: 'Rua Marechal Ramon Castilla, 25 - Urca, Rio de Janeiro - RJ, 22290-175',
          horario: '08:00h - 17:00',
          telefone: '2909-0987'
        },
        {
          coordenada: latLng(-22.91326087628367, -43.1662384227832),
          nome: "Policia Federal - Delegacia de imigracao",
          endereco: 'Praça Sen. Salgado Filho - Centro, Rio de Janeiro - RJ, 20021-340',
          horario: '08:00h - 17:00h',
          telefone: '2203-4771'
        },
        {
          coordenada: latLng(-22.904660103603483, -43.16942525783122),
          nome: "Policia Federal - Nepon",
          endereco: 'Praça Mal. Âncora - Centro, Rio de Janeiro - RJ, 20021-200',
          horario: '24 horas',
          telefone: '2092-9821'
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
.div-lorem {
  margin-top: 55px;
  text-align: left;
}
</style>