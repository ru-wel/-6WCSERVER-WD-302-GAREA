<template>
  <div class="row mt-5 pt-5">
    <div class="col-md-12 mt-2 pt-2">
        <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="property in Properties" :key="property._id">
                    <td>{{ property.title }}</td>
                    <td>{{ property.location }}</td>
                    <td>{{ property.description }}</td>
                    <td>{{ property.price }}</td>
                    <td>
                        <router-link :to="{name:'edit', params: { id: property._id}}" class="btn btn-success">Edit</router-link>
                        <button @click.prevent="deleteProperty(property._id)" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
  import axios from 'axios';
  export default {
      data(){
          return{
              Properties: []
          }
      },
      created(){
          let apiUrl = 'http://localhost:4000/api/view-property';
          axios.get(apiUrl).then(res => {
              this.Properties = res.data;
          }).catch(error => {
              console.log(error);
          })
      },
      methods: {
          deleteProperty(id){
              let apiUrl = `http://localhost:4000/api/delete-property/${id}`;
              let indexOfArrayItem = this.Properties.findIndex(i => i._id === id);
              if (window.confirm("Do you really want to delete?")){
                  axios.delete(apiUrl).then(() => {
                      this.Properties.splice(indexOfArrayItem, 1)
                  }).catch(error => {
                      console.log(error);
                  })
              }
          }
      }
  }
</script>