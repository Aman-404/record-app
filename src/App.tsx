import './App.css';
import { Header } from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import {useState} from 'react'

import DeleteIcon from "@mui/icons-material/Delete";
function App() {
  const[name,setName]:any = useState("")
  const[email,setEmail]:any=useState("")
  const[data,setData]:any = useState([])

  const addData=()=>{
    if(name.length>=1 && email.length>1){
      setData([...data,{name,email}]);
      setName("");
      setEmail("");
    }
  }
  const removeData =(index:any)=>{
    let arr = data;
    arr.splice(index,1)
    setData([...arr]);
  }
  
  return (
    <div className="App">
      <Header/>

      <div className='form'>
      <Stack direction="row" spacing={2}>
      <TextField value={name} id="name" onChange={(event)=>setName(event.target.value)} label="Name" variant="outlined" />
      <TextField value={email} id="email"  onChange={(event)=>setEmail(event.target.value)} label="Email" variant="outlined" />
      <Button variant="contained" color="success" onClick={addData}>
      <AddIcon/>
      </Button>
      </Stack>
      </div>
      {/* Data */}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        <hr />
        {
          data.map((ele:any,index:any)=>{
            return(
          
              <div key={index} className="data_val">
              <h4>{ele.name}</h4>
              <h4>{ele.email}</h4>
              <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="error" onClick={()=>removeData(index)}>
                      <DeleteIcon />
                  </Button>
              </Stack>
              
          </div>
            )
          })
        
        }
    
      </div>
    </div>
  );
}

export default App;
