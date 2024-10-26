<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Add a Property</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" class="form-control" v-model="property.title" required>
                </div>
                <div class="form-group">
                    <label>Location</label>
                    <input type="text" class="form-control" v-model="property.location" required>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="property.description" required>
                </div>
                <div class="form-group">
                    <label>Price</label>
                    <input type="text" class="form-control" v-model="property.price" required>
                </div>

                <!-- <div class="form-group" v-for="n in 5" :key="n">
                    <label :for="'image' + n" class="col-lg-3 col-form-label">Image {{ n }}</label>
                    <input 
                        class="form-control" 
                        :id="'file' + n" 
                        type="file" 
                        required 
                        @change="onFileChange($event, n)"
                    >
                </div> -->

                <div class="form-group">
                    <button class="btn btn-danger btn-block">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';
  export default {
      data(){
          return{
              property: {
                  title: '',
                  location: '',
                  description: '',
                  price: '',
              }
          }
      },
      methods: {
        handleSubmitForm(){
            let apiUrl = 'http://localhost:4000/api/add-property';
            axios.post(apiUrl, this.property).then(() => {
                this.$router.push('/properties')
                this.property = {
                  title: '',
                  location: '',
                  description: '',
                  price: '',
                }
            }).catch(error => {
                console.log(error);
            })
        },
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
  