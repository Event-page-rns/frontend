import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DocumentContext } from "../Contexts/DocumentContext";
import { useContext } from "react";
import EventsCard from "./EventsCard";

const Events = () => {
  const { text, getEvents, events } = useContext(DocumentContext);
  const navigate = useNavigate();

  useEffect(() => {
    getEvents();
  }, []);

  // useEffect(() => {
  //   console.log(events);
  //   events.forEach((element) => {
  //     console.log(element.base32Url);
  //   });
  // }, [events]);

  return (
    <section className=" flex justify-center items-center mt-20">
      <div className="w-[95%] gap-10 max-md:w-[98%] max-sm:gap-0 flex justify-center flex-wrap ">
        {events.map((item, index) => (
          <EventsCard
            key={index}
            eventId={item.eventId}
            base32Url={item.base32Url}
            clubName={item.clubName}
            entryFee={item.entryFee}
            eventDate={item.eventDate}
            eventTime={item.eventTime}
            priceMoney={item.priceMoney}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Events;
