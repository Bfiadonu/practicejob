import './App.css';
import Axios from 'axios'
import {useState, useEffect} from 'react'
import Job from './components/Job.js';

function App() {

  

  
  const [Jobs, setJobs] = useState([])

  useEffect(() => {
    Axios.get('https://remotive.com/api/remote-jobs?search=front%20end')
    .then(res => {
      console.log(res.data.jobs)
      setJobs(res.data.jobs)
    }).catch(err => console.log(err))
  }, [])
  
  const listItems = Jobs.map((job) => <Job key={job.id} job={job} />);

 
  return (
    
  
   <div className="App">
<ul>{listItems}</ul>
     
  
  
   </div>



   
    
   
   
  );
}

export default App;
