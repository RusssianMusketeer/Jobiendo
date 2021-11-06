import React from 'react'
import { useRef,useEffect } from 'react';

const usePrevious=(data)=>{
    
    const ref = useRef();
    
    useEffect(()=>{
      ref.current = data
    }, [])
    
    return ref.current
  }

  export default usePrevious;