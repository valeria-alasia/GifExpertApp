import {getGifs} from '../helpers/getGifs';
import { useState, useEffect } from 'react';

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);

    const [ isLoading, setIsLoading] = useState(true)

     const getImages = async () => {

      const images = await getGifs(category);

       setImages(images);
       setIsLoading(false);
     }

useEffect(() => {

         getImages(category);

   }, [])


  return {
    images, 
    isLoading
  }
}
