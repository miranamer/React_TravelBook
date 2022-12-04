import React, {useState} from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';

const Card = ({imageURL, country, city, info}) => {

    const [hover, setHover] = useState(false);
    const [like, setLike] = useState(false);
    const { user } = UserAuth();
    const navigate = useNavigate();

    const locationID = doc(db, 'users', `${user?.email}`);

    const saveLocation = async () => {
        if (user?.email) {
          setLike(!like);
          await updateDoc(locationID, {
            savedLocations: arrayUnion({
              id: country,
              title: city,
              img: imageURL,
            }),
          });
        } else {
          navigate('/login')
          alert('Please log in to save a location');
        }
      };

    function changeBackground(e) {
        setHover(true);
    }

    function leaveBackground(e){
        setHover(false);
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
                    <p onClick={saveLocation} className=''>{like ? <p className='text-red-400'><AiFillHeart /></p> : <AiOutlineHeart />}</p>
                </div>

                <div className=" text-gray-400 absolute bottom-4 text-lg">
                    <Link to='/view' state={{ city: city, country: country, img: imageURL, info: info }}>
                      <p className='hover:text-white'>View More</p>
                    </Link>
                </div>
            
            </div> : null}
            
            
        </div>
    
    </>
  )
}

export default Card