import React,{ useState,useEffect} from 'react'

const Api = () => {
const [change, setChange] = useState([]);

const demo = async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/photos');
    setChange(await response.json())
}

useEffect(() => {
    demo();
},[])

    return (
        <>
           <div className="container mt-5">
               <div className="row gx-5">
                  {
                      change.map((para)=>{
                         return(
                            <div className="col-md-4">
                               <h2>{para.title}</h2>
                               <img style={{width:"200px"}} src={para.url} alt=""/>
                            </div>
                         )
                      })
                  }
               </div>
           </div>
        </>
    )
}

export default Api;
