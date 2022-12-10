import { createContext, useEffect, useReducer } from "react"

const INITIAL_STATE = {
     user:JSON.parse(localStorage.getItem("userdata")),
     loading:false,
     error:null

       }


export const Authcontext = createContext(INITIAL_STATE)
const Authreducer = (state,action)=>{
      
    switch (action.type) {
        
       case "LOGIN_START":
        
       return({
           user:null,
           loading: true,
           error:null


       })
       case "LOGIN_SUCCESS":
        return({
            user:action.payload,
            loading:false,
            error:null
        })
        case "LOGIN_FAILURE":

        return({
             user:null,
             loading:false,
             error:action.payload


        })
        case "LOGOUT":
            return({
              user:null,
              loading:false,
              error:null

            })


}}

export const Authcontextprovider = ({children})=>{



    const [state,dispatch] = useReducer(Authreducer,INITIAL_STATE)
    useEffect(()=>{

     localStorage.setItem("userdata",JSON.stringify(state.user))


    },[state.user])

   return(
       <Authcontext.Provider
       value={{
          user:state.user,
          loading:state.loading,
          error:state.error,
          dispatch


       }}
       
       >



        {children}
       </Authcontext.Provider>



   )

}