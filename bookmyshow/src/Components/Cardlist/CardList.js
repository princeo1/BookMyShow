import React ,{useState,useEffect} from 'react';
import Axios from 'axios';
import Card from '../Card/Card';

const CardList=({list1,buttonInfo})=>{
    // console.log(list1,'hii');

    const [List,setList]=useState([]);
    // const [showingList,setShowingList] = useState([]);

    useEffect(()=>{
    Axios.get('https://peaceful-forest-62260.herokuapp.com/')
    .then(res=>{setList(res.data);})
    .catch(err=>{console.log(err)})
    },[])

    const movieList = List.moviesData;
    let arr=[];
    let arr1=[];

    for(let movie in movieList)
    {
        arr.push(movieList[movie]);
    }
    if(list1.length===0)
    {
        arr1=arr;
    }
    else
    {
        arr1 = arr.filter(function(val)
        {
            return(
                list1.includes(val.EventLanguage) || list1.includes(val.EventGenre)
            )
        })
        // console.log('hihi',arr1);
    }

    return(
        <div className="card-area">
        {
          arr1.map((val,index)=>{
            return (<Card onClick={()=>buttonInfo(val)}imageLink={`${val.EventImageUrl}`} rDate={`${val.DispReleaseDate}`} wtsCount={`${val.wtsCount}`} />)
          })
        }
      </div>
    )
}
export default CardList;
