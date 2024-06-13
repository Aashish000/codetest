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
    <input class="date-own form-control" style="width: 300px;" type="text" v-model="formInfo.published_year" maxlength="4" onkeypress="return event.charCode >= 48 && event.charCode <=57" placeholder="yyyy" required>
  </div>
  <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" v-model="formInfo.description" id="exampleFormControlTextarea1" rows="3"></textarea>

  </div>
  <button type="button" @click.prevent="submitForm()" class="btn btn-primary">Submit</button>
</div>
      </form>
</div>
</div>
</div>
</div>













<!-- 
  <h2>Create Book</h2>
  <form>
    
  <div class="col-lg-6 offset-lg-3">
    <div class="form-group">
    <label for="title">Title</label>
    <input type="text" v-model="formInfo.title" class="form-control" id="title">
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
    <input type="text" v-model="published_year" class="form-control" id="pubished_year" >
  </div>
  <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" v-model="description" id="exampleFormControlTextarea1" rows="3"></textarea>

  </div>
 
  
  <button type="button" @click.prevent="submitForm()" class="btn btn-primary">Submit</button>
</div>
</form> -->


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
  
  // const id = this.$route.params.id;
  //     axios.get(`http://localhost/codingtest/books/edit/${id}`)
  //     .then(response=>{
  //       let bookInfo = response.data
  //       this.book.title = bookInfo.title
  //       this.book.author = bookInfo.author
  //       this.book.genre = bookInfo.genre
  //       this.book.published_year = bookInfo.published_year
  //       this.book.description = bookInfo.description
  //       return response
        
  //     })
  //     .catch(error=>{
  //       console.log(error);
  //     });
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