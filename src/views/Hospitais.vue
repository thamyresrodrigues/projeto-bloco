<template>
  <b-container class="bv-example-row">
    <b-row v-for="item in items" :key="item.nome">
      <b-col>
        <Map :item="item" />
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
          coordenada: latLng(-22.977382321015533, -43.224022013842635),
          nome: "Hospital Municipal Miguel Couto",
          endereco: 'Leblon, Rio de Janeiro - RJ, 22793-260',
          horario: '24 horas',
          telefone: '2596-0089'
        },
        {
          coordenada: latLng(-22.900619093887563, -43.27795142280398),
          nome: "Hospital Municipal Salgado Filho",
          endereco: 'R. Arquias Cordeiro, 370 - Méier, Rio de Janeiro - RJ, 20770-000',
          horario: '24 horas',
          telefone: '3111-4100'
        },
        {
          coordenada: latLng(-22.86709593589926, -43.2483362811155),
          nome: "Hospital Geral de Bonsucesso",
          endereco: 'Av. Londres, 616 - Bonsucesso, Rio de Janeiro - RJ, 21041-020',
          horario: '24 horas',
          telefone: '3977-9502'
        },
        {
          coordenada: latLng(-22.99446009127222, -43.36252396071194),
          nome: "Hospital Municipal Lourenço Jorge",
          endereco: 'Leblon, Rio de Janeiro - RJ, 22793-260',
          horario: '24 horas',
          telefone: '2596-0089'
        },
      ],
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