import React, {useState, useEffect} from 'react'
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';
import SavedCard from './SavedCard';

const SavedLocations = () => {

    const { user } = UserAuth();
    const [locations, setLocations] = useState([]);
    const locationRef = doc(db, 'users', `${user?.email}`)

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
          setLocations(doc.data()?.savedLocations);
        });
      }, [user?.email]);
    
      const deleteLocation = async (passedID) => {
        try {
          const result = locations.filter((item) => item.id !== passedID)
          await updateDoc(locationRef, {
              savedLocations: result
          })
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <>

        <div className="ml-5 pt-5 font-bold">
            <h1 className='text-2xl drop-shadow-lg font-poppins'>Saved Locations</h1>
            </div>
            <div className="mt-10 flex gap-10 justify-center px-5 flex-wrap">
            {locations && locations.map((item) => (
                <SavedCard item={item} deleteLocation={deleteLocation} />
            ))}
        </div>

    </>
  )
}

export default SavedLocations