import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Data from "./data.json";
import { SectionDetails } from "./components/SectionDetails/SectionDetails";
import Section2 from "./components/Section2/Section2";
import UserDetails from "./components/UserDetail/UserDetails";
import { useEffect  ,useState} from "react";
import axios from "axios"


function App() {
  
  const[userdata,setUserData]=useState(null)
  const[loading,setLoading]=useState(true)
  useEffect(()=>{
    
    // axios({
    //   method: 'get',
    //   url: 'https://randomuser.me/api/'
      
    // })
    //   .then( (response) =>{
    //     setUserData( response.data.results[0])
    //     // console.log("useEffect--: once",  response.data.results[0])
    //   }).catch((error)=>{
    //     console.log("Error while loading user detail" , error.message)
    //   })
    loadDetails()
      
    },[])
  const loadDetails = () => {
    setLoading(true)
      
  //   console.log(Data.results);
    
  //   const obj={
  //     ...Data.results[0],
  //     name:{
  //       first:"Indra",
  //       last:"Suryawanshi",
  //       title:"Mr"
  //     }
        
      
  //   }
//     // setUserData(obj)
axios({
  method: 'get',
  url: 'https://randomuser.me/api/'
  
})
  .then( (response) =>{
    setUserData( response.data.results[0])
    // console.log("useEffect--: once",  response.data.results[0])
  }).catch((error)=>{
    console.log("Error while loading user detail" , error.message)
  }).finally(()=>{
    setLoading(false)
  })
   
  };
  return (
  //  <h1>skdjkj</h1>
   
    <div className="main">
      
     <div className="for-user">
       <img src={userdata?.picture?.medium}/> 
      <h6>Login info</h6> 
   { userdata && < UserDetails detail={userdata}/> }
    </div>
    <div className="user-generator-page">
      <div className="header-section">
        
        <h4>{userdata?.name?.first} {userdata?.name?.last}</h4>
        <Button variant="dark" onClick={loadDetails} >
          Generate New User
        </Button>
    </div>
  
   { userdata &&  < SectionDetails detail={userdata} />}
     {userdata && <Section2 detail={userdata}/>}
     
     
    </div>
    </div> 
    
  );
}

export default App;
