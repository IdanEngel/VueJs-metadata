<template>
  <div class="metadata" >
    <input
      v-on:keyup.enter="post"
      type="text"
      v-model="url"
      id="url"
      placeholder="Please enter your favorite links"
      required
    />
    <button v-on:click.prevent="post">Get data</button>
    <br />
    <div v-for ="item in items" v-if="" :key="item.id">
      <p v-if="item.url"> 
          <strong>Your link - </strong>
        <a  v-bind:href="item.url">
          {{ item.url }}
        </a>
      </p>
      <img  v-if="item.img" id="img" v-bind:src="item.img" alt="sorry there is no image" />
      <p v-if="item.title">
        <strong>Title - </strong>
        {{ item.title }}
      </p>
      <p v-if="item.description"> 
        <strong>Description - </strong>
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      items: []
    };
  },
  methods: {
    post: function() {
      this.$http
        .post("http://localhost:3000/", {
          url: this.url
        })
        .then(function(data) {
          console.log(data);
          this.items.push(
            { img: data.body.image },
            { title: data.body.title },
            { description: data.body.description },
            { url: data.body.url },
          );
          this.url =""
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
#url {
  width:30%;
}
</style>