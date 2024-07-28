import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
import { DocumentContext } from '../../Contexts/DocumentContext';

const ProtectedRoutesChat = ({children}) => {

    const {isAuth} = useContext(DocumentContext);

    if(!isAuth){
        return <Navigate to="/login" replace={true} />;
    }

  return <>{children}</>
}

export default ProtectedRoutesChat