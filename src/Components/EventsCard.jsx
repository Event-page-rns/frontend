import React from "react";
import { useNavigate } from "react-router-dom";
import ticketImg from "../assets/confirmation_number_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import img from "../assets/WhatsApp Image 2024-05-31 at 17.49.28_0bf84ad1.jpg";

const EventsCard = (props) => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full max-sm:flex-col max-sm:items-center mb-4 gap-y-3  lg:min-w-[700px] md:max-w-[700px] max-md:max-w-[600px] max-sm:max-w-[500px] p-3 gap-x-3 border-2 border-black rounded-md ">
      <div className="min-w-[250px] max-w-[250px] max-sm:max-w-[350px] flex justify-center items-center">
        <img
          src={props.base32Url}
          className="rounded-lg w-full object-cover"
          alt="Responsive Image"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-evenly max-sm:gap-y-3 overflow-hidden">
        <h1 className="text-3xl max-sm:text-xl font-bold ">{props.title}</h1>
        <p className="text-lg">Hosted by: {props.clubName}</p>
        <p>
          <mark>
            Date : {props.eventDate} · Time :{props.eventTime}
          </mark>
        </p>
        <p className="flex items-center gap-2">
          <img src={ticketImg} className="brightness-0" />
          {props.entryFee == 0 ? 'FREE' : `${props.entryFee} RS`}
        </p>
        <button
          className="px-4 py-2 bg-red-500 rounded-md text-white w-[150px] text-lg"
          onClick={() => navigate(`/events/${props.eventId}`)}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default EventsCard;
