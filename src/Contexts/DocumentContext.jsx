import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const DocumentContext = createContext();
export const BASE_URL = "http://localhost:8080/api/v1";

const DocumentContextProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const response = await axios.get(BASE_URL + "/events");
      const eventsArray = response.data.map((item) => ({
        ...item,
        description: item.description.split(/ {2,}/),
      }));
      setEvents(eventsArray);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  const register = async (email, password) => {
    try {
      const response = await axios.post(BASE_URL + "/register", {
        email: email,
        password: password,
      });
      console.log("response:");
      console.log(response);
    } catch (error) {
      console.error("Error fetching events: ", error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <DocumentContext.Provider value={{ getEvents, events, register }}>
      {children}
    </DocumentContext.Provider>
  );
};

export default DocumentContextProvider;
