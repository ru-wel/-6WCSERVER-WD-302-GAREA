<template>
  <div class="main-container">
    <div class="background-image"></div>

    <div class="form-container">
      <h3 class="form-title">Update Property</h3>
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" v-model="property.title" required />
        </div>
        <div class="form-group">
          <label for="location">Location</label>
          <input type="text" id="location" v-model="property.location" required />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" id="description" v-model="property.description" required />
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="text" id="price" v-model="property.price" required />
        </div>
        <button type="submit" class="submit-button">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      property: {
        title: '',
        location: '',
        description: '',
        price: '',
      },
    };
  },
  created() {
    let apiUrl = `http://localhost:4000/api/edit-property/${this.$route.params.id}`;
    axios.get(apiUrl).then((res) => {
      this.property = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiUrl = `http://localhost:4000/api/update-property/${this.$route.params.id}`;
      axios.put(apiUrl, this.property)
        .then(() => {
          this.$router.push('/properties');
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
html, body {
  height: 100%; 
  margin: 0;
  padding: 0; 
}

.main-container {
  position: relative;
  height: 100vh; 
  overflow: hidden; 
}

.background-image {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%; 
  background-image: url('../assets/bg1.jpg');
  background-size: cover; 
  background-position: center; 
  filter: brightness(0.7);  
  z-index: -1; 
}

.form-container {
  position: relative; 
  z-index: 1; 
  max-width: 600px; 
  margin: auto;
  padding: 40px; 
  background-color: rgba(255, 255, 255, 0.9); 
  border-radius: 8px; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); 
  margin-top: 130px; 
}

.form-title {
  font-size: 28px; 
  margin-bottom: 20px; 
  text-align: center; 
  color: #333; 
}

.form-group {
  margin-bottom: 15px; 
  display: flex;
  flex-direction: column; 
}

label {
  font-weight: bold; 
  color: #333; 
  margin-bottom: 5px; 
}

input[type="text"] {
  width: 100%; 
  padding: 12px; 
  border: 1px solid #ccc; 
  border-radius: 4px; 
  font-size: 16px; 
}

.submit-button {
  width: 100%; 
  padding: 12px; 
  background-color: #737f5b; 
  color: #fff; 
  border: none; 
  border-radius: 4px; 
  cursor: pointer; 
  font-size: 16px; 
  margin-top: 20px; 
  transition: background-color 0.3s ease; 
}

.submit-button:hover {
  background-color: #5d684b; 
}
</style>
