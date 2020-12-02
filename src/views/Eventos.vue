<template>
  <b-container class="professores">
    <b-row>
      <b-col class="listItem single-img" id="user1">
        <img
          src="https://image.freepik.com/fotos-gratis/praia-tropical_74190-188.jpg"
          title="Paisagem praia"
          alt="Paisagem de praia com areia e mar ao fundo"
        />
        <div class="img-text">
          <h4>Beaches</h4>
          <p>
           Here are you can do more than just go swimming.
          </p>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="listItem single-img" id="user1">
        <img
          src="https://image.freepik.com/fotos-gratis/tomando-o-caminho-para-as-montanhas_1098-12856.jpg"
          title="Pessoas caminhando"
          alt="Duas pessoas com mochilas nas costas caminhando pela grama"
        />
        <div class="img-text">
          <h4>Hiking</h4>
          <p>
            You can go for long walks, especially in the country or woods.
          </p>
        </div>
      </b-col>
    </b-row>
      <b-row>
      <b-col class="listItem single-img" id="user1">
        <img
          src="https://image.freepik.com/fotos-gratis/os-adultos-vao-em-boates-para-beber-alcool-e-se-divertir_144627-4438.jpg"
          title="Tres bebidas alcoolicas"
          alt="Tres copos com bebidas alcoolicas de cor azul"
        />
        <div class="img-text">
          <h4>Night clubs</h4>
          <p>
           Time to have fun! Nightclub serving drinks here. 
          </p>
        </div>
      </b-col>
    </b-row>
  
  </b-container>
</template>

<script>
export default {};
</script>

<style>
.col{
  padding-right: 0px !important; 
  padding-left: 0px !important;
}
.professores {
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 50px;
}

.listItem {
  margin: 30px;
}

.single-img {
  border-radius: 5px;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: nowrap;
  width: 325px;
  height: 350px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transform: translate(0, 0);
  transition: 0.3s;
}

.single-img:hover {
  transform: translate(0, -9px);
}

.img-text {
  background: #fff;
  background-color: white;
  padding: 0px 10px 30px 10px;
  width: 100%;
  height: auto;
  position: absolute;
  transform: translate(0, 110px);
  line-height: 24px;
  transition: 0.5s ease;
  display: inline-block;
}

.img-text p a {
  padding-right: 20px;
}

.img-text h4 {

  margin: 10px 0px 29px;
}

.single-img:hover .img-text {
  transform: translate(0, 0);
}
</style>