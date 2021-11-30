import React ,{useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';                // importing  Navbar component
import CardList from './Components/Cardlist/CardList';           // importing  CardList component which contains all the all cards
// import Trailer from './Components/Trailer/Trailer';                // importing  Trailer component which shows the trailer

function App() {

  let [arr1,setArray] = useState([]);                         
  let [infoButton,setInfoButton] = useState();
  const finalFilter = (arr)=>{
    setArray(arr);
    // console.log(arr1);
  }

  let buttonInfo=(val)=>{                   
    console.log(val);
  }
  return (
    <div className="App">
      <Navbar finalFilter={finalFilter}/>      
      {/* <Trailer/> */}
      <CardList list1 = {arr1} buttonInfo={buttonInfo}/>
    </div>
  );
}
export default App;
