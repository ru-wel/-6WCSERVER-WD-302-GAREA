<template>
  <div class="row justify-content-center mt-5 pt-5">
      <div class="col-md-6 mt-2 pt-2">
          <h3 class="text-center">Update Property</h3>
          <form @submit.prevent="handleUpdateForm">
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
              <div class="form-group">
                    <button class="btn btn-danger btn-block">Update</button>
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
              property: { }
          }
      },
      created(){
          let apiUrl = `http://localhost:4000/api/edit-property/${this.$route.params.id}`;
          axios.get(apiUrl).then((res) => {
              this.property = res.data;
          })
      },
      methods: {
          handleUpdateForm(){  
              let apiUrl = `http://localhost:4000/api/update-property/${this.$route.params.id}`;
              axios.put(apiUrl, this.property).then((res) => {
                  console.log(res);
                  this.$router.push('/properties')
              }).catch(error => {
                  console.log(error);
              })
          }
      }
  }
</script>