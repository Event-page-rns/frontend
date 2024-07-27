import { useRef, useState, useContext } from "react";
import { BASE_URL } from "../Contexts/DocumentContext";
import { DocumentContext } from "../Contexts/DocumentContext";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEventPage = () => {
  const fileRef = useRef();
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    clubName: "",
    eventDate: "",
    eventTime: "",
    eventVenue: "",
    entryFee: "",
    priceMoney: "",
    base32Url: "",
    createdBy: "",
    applyLink: "",
    whatsAppGroupLink: "",
  });

  const handleChange = (e) => {
    setEventData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFileUpload = (e) => {
    console.log(e.target.files);
    const reader = new FileReader();

    reader.onload = () => {
      //console.log(reader.result);
      //setImg(reader.result);
      setEventData((prev) => ({
        ...prev,
        [e.target.name]: reader.result,
      }));
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      console.log(eventData);
      const response = await axios.post(BASE_URL + "/events", eventData);
      if(response){
        toast.success(response.data.responseMessage)
        setTimeout(()=>{
          window.location.reload()
        },1000)
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center w-full h-full px-[10%] py-5 gap-2 max-lg:p-5">
        <ToastContainer />
      <div className="flex flex-col gap-1 w-full">
        <label>Title</label>
        <input
          type="text"
          placeholder="Type here"
          onChange={handleChange}
          className="input input-bordered input-primary w-full  focus:border-blue-600"
          name="title"
        />
      </div>
      <div className="flex w-full flex-col gap-1">
        <label>Description</label>
        <textarea
          className="textarea textarea-primary w-full"
          name="description"
          onChange={handleChange}
          rows={5}
          placeholder="Bio"
        ></textarea>
      </div>
      <div className="flex w-full flex-col gap-1">
        <label>club name</label>
        <input
          type="text"
          name="clubName"
          onChange={handleChange}
          placeholder="Type here"
          className="input input-bordered input-primary w-full focus:border-blue-600"
        />
      </div>

      <div className="flex gap-4 w-full max-sm:flex-col">
        <div className="flex w-full flex-col gap-1">
          <label>time</label>
          <input
            type="date"
            name="eventDate"
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered input-primary w-full  focus:border-blue-600"
          />
        </div>
        <div className="flex w-full flex-col gap-1">
          <label>time</label>
          <input
            type="time"
            name="eventTime"
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered input-primary w-full  focus:border-blue-600"
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-1">
        <label>venue</label>
        <input
          type="text"
          name="eventVenue"
          onChange={handleChange}
          placeholder="Type here"
          className="input input-bordered input-primary w-full  focus:border-blue-600"
        />
      </div>
      <div className="flex w-full flex-col gap-1">
        <label>Entry fee</label>
        <input
          type="text"
          name="entryFee"
          onChange={handleChange}
          placeholder="Type here"
          className="input input-bordered input-primary w-full  focus:border-blue-600"
        />
      </div>
      <div className="flex w-full flex-col gap-1">
        <label>Price money</label>
        <input
          type="text"
          name="priceMoney"
          onChange={handleChange}
          placeholder="Type here"
          className="input input-bordered input-primary w-full  focus:border-blue-600"
        />
      </div>

      <div className="flex w-full flex-col gap-1">
        <label>Apply link</label>
        <input
          type="text"
          name="applyLink"
          onChange={handleChange}
          placeholder="Type here"
          className="input input-bordered input-primary w-full  focus:border-blue-600"
        />
      </div>
      <div className="flex w-full flex-col gap-1">
        <label>Whatsapp link</label>
        <input
          type="text"
          name="whatsAppGroupLink"
          onChange={handleChange}
          placeholder="Type here"
          className="input input-bordered input-primary w-full  focus:border-blue-600"
        />
      </div>
      <div className="flex w-full flex-col gap-1">
        <input
          type="file"
          name="base32Url"
          ref={fileRef}
          onChange={handleFileUpload}
          className="hidden"
        ></input>

        {eventData.base32Url != "" ? (
          <img
            src={eventData.base32Url}
            className="rounded-lg w-full object-fill"
            alt="Responsive Image"
          />
        ) : null}
        <button
          name="base32Url"
          onClick={(e) => fileRef.current.click()}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Upload Image
        </button>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full p-2 bg-red-500 rounded-lg text-white hover:bg-red-600"
      >
        Add event
      </button>
    </section>
  );
};

export default AddEventPage;
