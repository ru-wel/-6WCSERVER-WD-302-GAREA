<template>
  <div class="main-container">
    <div class="background-image"></div>

    <div class="view">
      <div class="content">
        <div class="row mt-5 pt-5">
          <div class="col-md-12 mt-2 pt-2">
            <div class="card transparent-card">
              <div class="card-body">
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
                        <router-link 
                          :to="{name:'edit', params: { id: property._id}}"
                          class="btn btn-edit">Edit</router-link>
                        <button 
                          @click.prevent="deleteProperty(property._id)"
                          class="btn btn-delete">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      Properties: []
    }
  },
  created() {
    const apiUrl = 'http://localhost:4000/api/view-property';
    axios.get(apiUrl)
      .then(res => {
        this.Properties = res.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    deleteProperty(id) {
      const apiUrl = `http://localhost:4000/api/delete-property/${id}`;
      const indexOfArrayItem = this.Properties.findIndex(i => i._id === id);
      if (window.confirm("Do you really want to delete?")) {
        axios.delete(apiUrl)
          .then(() => {
            this.Properties.splice(indexOfArrayItem, 1);
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
}
</script>

<style scoped>
html, body {
    height: 100%; 
    margin: 0;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh; 
  background-image: url('../assets/bg2.jpg'); 
  background-size: cover; 
  background-position: center;
  background-attachment: fixed;
  filter: brightness(0.7); 
  margin: 0;
  padding: 0;
  z-index: 0;

}

.main-container {
  position: relative;
  width: 100%;
  height: 100vh; 
  background-color: #333;  
  margin: 0;
  padding: 0;
  overflow: hidden; 
}

.content {
    flex: 1; 
    padding: 0; 
}

.card.transparent-card {
    background-color: rgba(255, 255, 255, 0.85); 
    border: none; 
    border-radius: 8px; 
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
    margin: 20px; 
}

.table {
    margin-bottom: 0; 
}

.thead-dark {
    background-color: rgba(0, 0, 0, 0.6); 
    color: #fff;
}

.table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05); 
}


.btn-edit {
    background-color: #707c56; 
    color: white; 
}

.btn-edit:hover {
    background-color: #515a40; 
}

.btn-delete {
    background-color: #a07d83; 
    color: white; 
}

.btn-delete:hover {
    background-color: #79575a; 
}


.footer {
    background-color: #f8f9fa;
    padding: 0; 
    width: 100%; 
}

.container {
    display: flex;
    justify-content: center; 
}

.text-muted {
    color: #6c757d; 
}
</style>
