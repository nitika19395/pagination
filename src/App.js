import React, {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Pagination from './components/pagination';
import Todo from './components/todo';

function App() {
  const [posts,setPosts] = useState([{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},
  {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},
  {"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},
  {"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},
  {"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},
  {"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"},
  {"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},
  {"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},
  {"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},
  {"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},
  {"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},
  {"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}])
  
  const[showPerPage, setShowPerPage] = useState(6);

  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  })
  
 const onPaginationChange = (start,end) => {
   setPagination({start:start,end:end});
 }
  
  
  return (
    <div className="App">
      <div className ="container">
    <div className="row new">
    {
      posts.slice(pagination.start,pagination.end).map((post) => (
      
        <div className="col-md-4" key={post.id}>
          <div className="card">
            <div className="card-body">
              <h5>{post.id} {post.email}</h5>
               <p>{post.first_name} {post.last_name}</p>
               <img src={post.avatar}/>
              </div>
            </div>
          </div>
         
      ))
    }
     </div>
     <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={posts.length}/>
     <Todo/>
     </div>
     
    </div>
  );
}

export default App;
