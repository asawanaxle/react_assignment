import React from 'react';
import './Forms.css';
import {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
function Forms(){
     let baseURL = "https://qghcujpqbvrdfszremfe.supabase.co/rest/v1/blogs"
    const [blogTitle, setblogTitle] = useState('');
    const [blogDes, setblogDes] = useState('');
    const [blogAuth, setblogAuth] = useState('');
    const [blogReadTime, setblogReadTime] = useState('');

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault(); //  prevent page refresh
    
        console.log('Title ', blogTitle);
        console.log('Description ', blogDes);
        console.log('Author ', blogAuth);
        console.log('Reading Time ', blogReadTime);

        const objectname = {
            title: blogTitle,
            description:blogDes,
            author:blogAuth,
            reading_time:blogReadTime
         }
        
        axios.post(baseURL,objectname , {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM',
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM'
            }
        }).then(console.log("Successfully created Post"));
        setblogTitle('');
        setblogDes('');
        setblogAuth('');
        setblogReadTime('');
      };

    return(

        <div>
            <div class="slider-form">
   
   <h2><i>User Details</i></h2>
   <form onSubmit={handleSubmit}>
      
      <div class="form-group">
         <input type="text" id="name" placeholder="Title" value={blogTitle} onChange={event => setblogTitle(event.target.value)}/>
      </div>

      <div class="form-group">
            <input type="text" id="email" placeholder="Description" value={blogDes} onChange={event => setblogDes(event.target.value)}/>
      </div>
      
      <div class="form-group">
            <input type="text" id="phone" placeholder="Author" value={blogAuth} onChange={event => setblogAuth(event.target.value)}/>
      </div>

      <div class="form-group">
            <input type="number" id="zipcode" placeholder="Reading Time" value={blogReadTime} onChange={event => setblogReadTime(event.target.value)}/>
      </div>
         
      <button type="submit" class="btn btn-default" >POST</button>
         
   </form>
</div>
        

</div>
    
    )
    
}

export default Forms;