<template>
  <div>
    <LMap id="map" :zoom="15" :center="item.coordenada">
      <LTileLayer :url="url" :attribution="attribution" />
      <LMarker
      :lat-lng="item.coordenada"
    >
    </LMarker>
    </LMap>
    
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { latLng, Icon } from "leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default {
  name: "Maps",
  props: ['item'],
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      RJ: latLng(-22.90278, -43.2075),

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
  margin-left: auto;
  margin-right: auto;
}
</style>
