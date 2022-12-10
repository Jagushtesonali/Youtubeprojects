import { useState , useEffect } from "react"



const Usefetch = (url)=>{

  
    const [error  ,seterror] = useState("")

useEffect(() => {
   
    const fetchdata = async()=>{
        setloading(true)

        try {
            const res = await fetch(url, {
                method:"GET",
                headers:{
                 Accept:"application/json",
                 "content-Type":"application/json"
                },
            credentials:"include"
        });

        const newdata = await res.json()
 
           setdata(newdata)
           setloading(false)

        } catch (error) {
            seterror(error)

        }
       
      }
    
    fetchdata()
}, [])
    
    }
    export default Usefetch