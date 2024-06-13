<template>
<div class="row align-items-center justify-content-center mx-auto">
    <div class="col-md-offset-1 col-md-10">
            <div class="panel">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-sm-12 col-xs-12">
                            <h4 class="title pull-left">Book Lists</h4>
                            <router-link :to="`/`" class="btn btn-outline-success mx-1 pull-right">View All</router-link>
                            <!-- <a href="#" class="btn btn-sm btn-primary pull-right"><i class="fa fa-plus"></i> Add New</a> -->
                        </div>
                    </div>
                </div>
                <div class="panel-body">
                  <br>
                  <h2>Please Fill the Form Below to create book</h2>
                  <br>
                
      
      <form>
        <div class="col-lg-6 offset-lg-3 align-items-center justify-content-center mx-auto">
        
        <div class="form-group">
    <label for="title">Title</label>
    <input type="text" v-model="formInfo.title" class="form-control" id="title" required>
  </div>
  <div class="form-group">
    <label for="author">Author</label>
    <input type="text" v-model="formInfo.author" class="form-control" id="author" required>
  </div>
  <div class="form-group">
    <label for="genre">Genre</label>
    <input type="text" v-model="formInfo.genre" class="form-control" id="genre" required>
  </div>
  <div class="form-group">
    <label for="author">Published year</label>
    <!-- <input type="text" 
       maxlength="4" 
       onkeypress='return event.charCode >= 48 && event.charCode <= 57'    
       required 
/> -->
    <input class="date-own form-control" style="width: 300px;" type="text" v-model="formInfo.published_year" maxlength="4" onkeypress="return event.charCode >= 48 && event.charCode <=57" placeholder="yyyy" required>
    <!-- <input type="year" v-model="formInfo.published_year" class="form-control" id="published_year" required> -->
  </div>
  <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" v-model="formInfo.description" id="exampleFormControlTextarea1" rows="3" required></textarea>

  </div>
  

  <button type="button" @click.prevent="submitForm()" class="btn btn-primary">Submit</button>
</div>
      </form>
</div>
</div>
</div>
</div>
  
</template>

<script>


import axios from "axios";
export default {
name: "AddBook",
  data(){
    return{
      formInfo: {
        title: '',
        author: '',
        genre: '',
        published_year: '',
        description: ''
      }
    }
  },

  methods: {
    async getBooks(){
    try{
    const response = await axios.get(`books`)
    this.books = response.data; 
    
    }
    catch(error){
      console.log(error);
    }
  },
  async submitForm(){
    await axios.postForm('books/add', this.formInfo,
  {headers: {'content-type': 'application/x-www-form-urlencoded'}}
)

    
    .then(response=>{
        console.log(response);
        alert("Book Successfully Added");

      })
    
      .catch(error=>{
        console.log(error);
      });
      this.$router.push({path: '/'});
    }
  },
}

</script>

<style>

</style>