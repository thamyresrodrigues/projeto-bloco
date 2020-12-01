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

export default {
  components: {
    Map,
  },
};
</script>

<style>
.pad{
  margin-left: 10px;
}
</style>