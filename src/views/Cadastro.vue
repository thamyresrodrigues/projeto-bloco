<template>
<div>
  <h3 class="pad-top">
    Create an account
  </h3>
  <form class="form">
    <div class="form-group">
      <label for="name">Name:</label>
      <input
        required
        type="text"
        class="form-control"
        id="name"
      />
    </div>
    <div class="form-group">
      <label for="email">Email address:</label>
      <input
        required
        type="email"
        class="form-control"
        id="email"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
      />
    </div>
     <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary btn-form">Submit</button>
  </form>
</div>
</template>


<script>
export default {};
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
  margin-top: 25px;
}
.pad-top{
  padding-top: 15px;
}
</style>
