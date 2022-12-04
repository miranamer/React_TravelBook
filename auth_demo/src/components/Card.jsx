import React, {useState} from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Card = ({imageURL, country, city}) => {

    const [hover, setHover] = useState(false);
    const [like, setLike] = useState(false);

    function changeBackground(e) {
        setHover(true);
    }

    function leaveBackground(e){
        setHover(false);
    }

    const handleLike = () => {
        setLike(!like);
    }

  return (
    <>

        <div onMouseEnter={changeBackground} onMouseLeave={leaveBackground} className={`font-poppins drop-shadow-xl hover:cursor-pointer bg-center relative bg-cover w-[300px] h-[230px] rounded-md`} style={{backgroundImage: `url(${imageURL})`}}>
           {hover ?  
           <div className="w-full h-[230px] bg-black/60 relative top-0 left-0 rounded-md flex items-center justify-center">
                
                <div className="absolute">
                    <h1 className='text-2xl text-white text-center font-bold'>{country}</h1>
                    <p className='text-white text-center text-xl mt-1'>{city}</p>
                </div>
                
                <div className="top-4 text-white absolute right-4 text-3xl">
                    <p onClick={handleLike} className=''>{like ? <p className='text-red-400'><AiFillHeart /></p> : <AiOutlineHeart />}</p>
                </div>
            
            </div> : null}
            
            
        </div>
    
    </>
  )
}

export default Card