<template>
    <div class="row align-items-center justify-content-center mx-auto">
        <div class="col-md-offset-1 col-md-10">
            <div class="panel">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-sm-12 col-xs-12">
                            <h4 class="title pull-left">Book Lists</h4>
                            <router-link :to="`/create`" class="btn btn-outline-success mx-1 pull-right">Add New</router-link>
                            <!-- <a href="#" class="btn btn-sm btn-primary pull-right"><i class="fa fa-plus"></i> Add New</a> -->
                        </div>
                    </div>
                </div>
                <div class="panel-body table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                              <th>#</th>
                              <th>Title</th>
                              <th>Author</th>
                              <th>Genre</th>
                              <th>Published Year</th>
                              <th>Description</th>
                              <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                          <tr v-for="book in books" :key="book.id">
                            <td scope="row" style="color: #666666">{{ book.id }}</td>
                            <td>{{ book.title }}</td>
                            <td>{{book.author}}</td>
                            <td>{{book.genre}}</td>
                            <td>{{book.published_year}}</td>
                            <td>{{book.description}}</td>

                            <ul class="action-list">
                              <li><router-link :to="`/edit/${book.id}`" class="btn btn-lg btn-primary">Edit</router-link></li>
        <!-- <router-link :to="`/delete/${book.id}`" class="btn btn-outline-success mx-1">Delete</router-link> -->
        <li><a @click="deleteBook(book.id)" class="btn btn-danger">Delete</a></li>
        <!-- <li><a href="javascript:;" v-on:click="DeleteUser(artist.id, index)">Delete</a> -->
        <!-- </li> -->
                     
        <!-- <li><a @click="deleteBook(book.id)" class="btn btn-danger">Delete</a></li> -->

        <!-- <button @click="editItem(book)">Edit</button> -->
        <!-- <button>Delete</button> -->
      </ul>
                          </tr>
                           
                          
                        </tbody>
                    </table>
                </div>
                <div class="panel-footer">
                    <div class="row">
                       
                    </div>
                </div>
            </div>
        </div>
    </div>







  
</template>

<script>
import axios from "axios";
export default {
name: "ListBook",
data(){
  return{
    books: [],
  };
},
created(){
  this.getBooks();
},
methods:{
  async getBooks(){
    try{
      var baseUrl = 'localhost/'
      // var localhost/
      console.log(baseUrl);
      const response = await axios.get("books");
      
      this.books = response.data;
      console.log(this.books);
    }
    catch(error){
      console.log(error);
    }
  },
  async editItem(item){
    alert(item.id);
    this.$router.push({
      name: 'editbook',
      params: { data: item.id}
    });

    // this.$router.push({ name: '/books/'+item.id });
  },
  async deleteBook(id){
    if(confirm('are you sure?'))
    try{
      await axios.delete(`books/delete/${id}`);
      this.getBooks();
      alert('Product deleted');

    }
    catch(error){
      console.log(error);
    }
  }
  
}
}
</script>

<style>

</style>