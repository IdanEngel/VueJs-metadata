<template>
  <div class="metadata">
    <input v-on:keyup.enter="post" type="text" v-model="url" id="url" placeholder="Please enter url" required />
    <button v-on:click.prevent="post" >Get data</button> <br>
    <img id="img" v-bind:src= "img" alt="sorry there is no image">
    <p> <strong>Title </strong> - {{ title }}</p>
    <p> <strong>Description </strong> - {{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      url: "",
      img: "",
      title: "",
      description: ""
    };
  },
  methods: {
    post: function() {
      this.$http
        .post("http://localhost:3000/", {
        url: this.url
        })
        .then( 
          function(data) {
         console.log(data);
          this.img = data.body.image;
          this.title = data.body.title;
          this.description = data.body.description;
          // alert(this.img);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #img {
    width: 50%;
    height: 50%;
    margin: 20px;
  }
  .meatadata {
    display: grid;
    grid-template-columns: 1fr, 1fr;
    grid-template-rows: 1fr, 1fr;
    };
</style>