import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const DocumentContext = createContext();
export const BASE_URL = "http://localhost:8080/api/v1";

const DocumentContextProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [myPassword, setMyPassword] = useState("admin@123");

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  const getEvents = async () => {
    try {
      const response = await axios.get(BASE_URL + "/events");
      const eventsArray = response.data.map((item) => ({
        ...item,
        description: item.description.split(/ {2,}/),
      }));
      const filteredEvents = eventsArray.filter(
        (item) => new Date(item.eventDate) > new Date()
      );
      setEvents(filteredEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <DocumentContext.Provider
      value={{ getEvents, events, isAuth, setIsAuth, myPassword }}
    >
      {children}
    </DocumentContext.Provider>
  );
};

export default DocumentContextProvider;
