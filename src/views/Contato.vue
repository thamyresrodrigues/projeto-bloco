<template>
<div>
  <h3 class="pad-top">
    Send your opinion
  </h3>
    <form @submit="onSubmit" v-if="show" class="form">
    <div class="form-group">
      <label for="name">Name:</label>
      <input v-model="form.name" required type="text" class="form-control" id="name" />
    </div>
    <div class="form-group">
      <label for="email">Email address:</label>
      <input
        required
        v-model="form.email"
        type="email"
        class="form-control"
        id="email"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="form-group">
      <label for="textarea1">Message:</label>
      <textarea
        required
        v-model="form.textarea"
        class="form-control"
        id="textarea1"
        rows="4"
      ></textarea>
    </div>

    <button type="submit" class="btn btn-primary btn-form">Submit</button>
  </form>
</div>


</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        textarea: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  },
};
</script>
<style>
.form {
  width: 80%;
  margin: auto;
  text-align: left;
  padding-top: 24px;
  padding-bottom: 24px;
}
.btn-form {
  margin-right: 25px;
}
.pad-top{
  padding-top: 15px;
}
</style>
