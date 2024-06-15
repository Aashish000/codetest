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
                  <div id="errorMessages" style="color:red"></div>
      <form>
        <div class="col-lg-6 offset-lg-3 align-items-center justify-content-center mx-auto">
        
        <div class="form-group">
    <label for="title">Title</label>
    <input type="text" v-model="formInfo.title" class="form-control" id="title" value="{{ formInfo.title }}">
  </div>
  <div class="form-group">
    <label for="author">Author</label>
    <input type="text" v-model="formInfo.author" class="form-control" id="author">
  </div>
  <div class="form-group">
    <label for="genre">Genre</label>
    <input type="text" v-model="formInfo.genre" class="form-control" id="genre" >
  </div>
  <div class="form-group">
    <label for="author">Published year</label>
    <input class="date-own form-control" id="published_year" style="width: 300px;" type="text" v-model="formInfo.published_year" maxlength="4" onkeypress="return event.charCode >= 48 && event.charCode <=57" placeholder="yyyy" required>
  </div>
  <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" v-model="formInfo.description" id="description" rows="3"></textarea>

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
name: "EditBook",
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
created(){
  this.getBooks();
  
},
methods:{
  async getBooks(){

   const id = this.$route.params.id;
      await axios.get(`books/edit/${id}`)
                        .then(response => {
                            this.formInfo = response.data;
                            this.error = '';
                        })
                        .catch(error => {
                            this.formInfo = null;
                            this.error = 'Book not found or an error occurred!';
                            console.log(error);
                        });
  },
  async submitForm(){
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const published_year = document.getElementById("published_year").value;
    const description = document.getElementById("description").value;
    if (title == "") {
      document.getElementById('errorMessages').innerHTML="*Please enter title* <br/>";
      return;
    }
    if(author == ""){
      document.getElementById('errorMessages').innerHTML="*Please enter Author* <br/>"; 
      return;
    }
    if(genre == ""){
      document.getElementById('errorMessages').innerHTML="*Please enter Genre* <br/>";
      return;
    }
    if(published_year == ""){
      document.getElementById('errorMessages').innerHTML="*Please enter Published Year* <br/>";
      return;
    }
    if(description == ""){
      document.getElementById('errorMessages').innerHTML="*Please enter Description* <br/>";
      return;
    }
    const id = this.$route.params.id;
    axios.post(`books/update/${id}`, this.formInfo,
    {headers: {'content-type': 'application/x-www-form-urlencoded'}}
    )
    .then(response=>{
        console.log(response);
        alert("Book Successfully Edited");
        this.$router.push('/'); 
      })
    
      .catch(error=>{
        console.log(error);
      });
    },
  },
}


</script>

<style>

</style>