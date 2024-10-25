<template>
  <div class="page-wrapper">
    <div class="content container-fluid">
    
        <!-- Page Header -->
        <div class="page-header">
            <div class="row">
                <div class="col">
                    <h3 class="page-title">Add a Property</h3>
                </div>
            </div>
        </div>
        <!-- /Page Header -->
        
        <div class="row">
            <div class="col-md-12">
                <div class="card">

                    <form method="post" enctype="multipart/form-data">

                        <div class="card-body">
                            <h5 class="card-title">Property Details</h5>
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="form-group row">
                                        <label class="col-lg-2 col-form-label">Title</label>
                                        <div class="col-lg-9">
                                            <input type="text" class="form-control" name="title" required placeholder="Enter Title" value="">
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-lg-2 col-form-label">Location</label>
                                        <div class="col-lg-9">
                                            <textarea class="tinymce form-control" name="location" rows="1" cols="5"></textarea>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-lg-2 col-form-label">Description</label>
                                        <div class="col-lg-9">
                                            <textarea class="tinymce form-control" name="description" rows="10" cols="30"></textarea>
                                        </div>
                                    </div>   
                                    
                                    <div class="form-group row">
                                        <label class="col-lg-2 col-form-label">Price</label>
                                        <div class="col-lg-9">
                                            <input type="text" class="form-control" name="price" required placeholder="Enter Price">
                                        </div>
                                    </div>   

                                </div>
                                
                                <h4 class="card-title">Image & Status</h4>
                                <br>
                                <div class="row">
                                    <div class="col-xl-12">
                                      <div class="form-group row" v-for="n in 5" :key="n">
                                        <label :for="'file' + n" class="col-lg-3 col-form-label">File {{ n }}</label>
                                        <div class="col-lg-9">
                                            <input 
                                                class="form-control" 
                                                :name="'file' + n" 
                                                :id="'file' + n" 
                                                type="file" 
                                                required 
                                            >
                                        </div>
                                    </div>

                                    </div>
                                
                                <hr>

                                <input type="submit" value="Submit" class="btn btn-primary" name="add">
                            
                            </div>
                            </div>
                        </div>

                    </form>
                                                                    
                </div>
            </div>
        </div>
    
    </div>          
    </div>
</template>

<script>
export default {
  name: 'GAREA',
  props: {
    msg: String
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
  