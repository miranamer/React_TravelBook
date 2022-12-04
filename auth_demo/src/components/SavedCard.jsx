import React, {useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai';

const SavedCard = ({item, deleteLocation}) => {
    const [hover, setHover] = useState(false);

    function changeBackground(e) {
        setHover(true);
    }

    function leaveBackground(e){
        setHover(false);
    }
  
    return (
    <>
    
            <div key={item['id']} onMouseEnter={changeBackground} onMouseLeave={leaveBackground} className={`font-poppins drop-shadow-xl hover:cursor-pointer bg-center relative bg-cover w-[300px] h-[230px] rounded-md`} style={{backgroundImage: `url(${item['img']})`}}>
                {hover ?  
                <div className="w-full h-[230px] bg-black/60 relative top-0 left-0 rounded-md flex items-center justify-center">
                     
                     <div className="absolute">
                         <h1 className='text-2xl text-white text-center font-bold'>{item['id']}</h1>
                         <p className='text-white text-center text-xl mt-1'>{item['title']}</p>
                     </div>
                     
                     <div className="top-4 text-white absolute right-4 text-3xl">
                         <p onClick={() => deleteLocation(item['id'])}><AiOutlineClose /></p>
                     </div>
     
                     <div className=" text-gray-400 absolute bottom-4 text-lg">
                         <p className='hover:text-white'>View More</p>
                     </div>
                 
                 </div> : null} 
             </div>

    </>
  )
}

export default SavedCard