import React from 'react';
import { useEffect } from 'react';

const UseTittle = title => {
    useEffect(()=>{
        document.title=`${title} | EduMart.bd`;
    },[title])
};

export default UseTittle;