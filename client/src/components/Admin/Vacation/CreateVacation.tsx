import React, { useState } from "react";

import { useSelector } from "react-redux";

import CustomInput from "../../UI/CustomInput";
import { IVacation } from "./../../../interface/Vacation.interface";
import "./createVacation.css";
function AddVacation() {
  // const userName = useSelector((state: any) => state.authReducer?.userName);
  const [vacationValues, setVacationValues] = useState<IVacation>({
    checkInDate: "",
    checkOutDate: "",
    description: "",
    destination: "",
    imgUrl: "",
    price: 0,
    title: "",
  });

  const handleVacationForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

   
    switch (name) { 
      case "title":
        return setVacationValues({ ...vacationValues, title: value });
      case "destination":
        return setVacationValues({ ...vacationValues, destination: value });
      case "description":
        return setVacationValues({ ...vacationValues, description: value });
      case "imgUrl":
        return setVacationValues({ ...vacationValues, imgUrl: value });
      case "checkInDate":
        return setVacationValues({ ...vacationValues, checkInDate: value });
      case "checkOutDate":
        return setVacationValues({ ...vacationValues, checkOutDate: value });
      case "price":
        return setVacationValues({
          ...vacationValues,
          price: parseInt(value),
        });

      default:
    }
  };

  

  function addVacation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({ vacationValues });
   
  }

  return (
    <div>
      <h1>Add Vacation</h1>
      <form onSubmit={(e) => addVacation(e)}>
        <div className="form-container">
          {/* Title */}
          <div className="input--row">
            <span className="input--col">
              <CustomInput
                label="Title"
                name="title"
                onChange={handleVacationForm}
                placeholder="Title"
                type="text"
              />
            </span>

            {/* imgUrl */}

            <span className="input--col">
              <CustomInput
                label="imgUrl"
                name="imgUrl"
                onChange={handleVacationForm}
                placeholder="imgUrl"
                type="text"
              />
            </span>
          </div>
          {/* description */}
          <div className="input--row">
            <span className="input--col">
              <CustomInput
                label="description"
                name="description"
                onChange={handleVacationForm}
                placeholder="description"
                type="text"
              />
            </span>

            <span className="input--col">
              <CustomInput
                label="destination"
                name="destination"
                onChange={handleVacationForm}
                placeholder="destination"
                type="text"
              />
            </span>
          </div>
          {/* checkInDate */}

          <div className="input--row">
            <span className="input--col">
              <CustomInput
                label="checkInDate"
                name="checkInDate"
                onChange={handleVacationForm}
                placeholder="checkInDate"
                type="date"
              />
            </span>
            {/* checkOutDate */}
            <span className="input--col">
              <CustomInput
                label="checkOutDate"
                name="checkOutDate"
                onChange={handleVacationForm}
                placeholder="checkOutDate"
                type="date"
              />
            </span>
            {/* price */}
          </div>
          <div className="input--row ">
            <span className="input--col ">
              <CustomInput
                label="price"
                name="price"
                onChange={handleVacationForm}
                placeholder="price"
                type="number"
              />
            </span>
            <button className="btn--submit--create--vacation" type="submit">
                Send
              </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddVacation;
