import './Chatonline.css'

const Chatonline=() =>{
    const PF = " http://localhost:8000/images/"
  return (
   <>
    
    <div className='chatonline'>
        <div className='chatonlinewrapper'>
            <div className='dotbox'>
            <img src={PF+"profile1.jpg"} className='profileimg' alt="" />
            <div className='dot'></div>
            </div>
           
        </div>
        <span>Sonali Jagushte</span>
    </div>
   
   
   
   </>
  )
}

export default Chatonline
