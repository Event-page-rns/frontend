import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios';

export const DocumentContext = createContext();
export const BASE_URL = "http://localhost:8080/api/v1"

const DocumentContextProvider = ({children}) => {

    const [events, setEvents] = useState([]);

    const getEvents = async () => {
        try {
            const response = await axios.get(BASE_URL + '/events');
            const eventsArray = response.data.map((item) => ({
                ...item,
                "description" : item.description.split(/ {2,}/)
            }));
            setEvents(eventsArray);
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };

    useEffect(()=>{
        getEvents();
    },[])
    
    
  return (
    <DocumentContext.Provider value={{getEvents,events}}>
        {children}
    </DocumentContext.Provider>
  )
}

export default DocumentContextProvider