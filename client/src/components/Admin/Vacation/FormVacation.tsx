import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import CustomInput from "../../UI/CustomInput";
import { IVacation } from "../../../interface/Vacation.interface";
import "./createVacation.css";
import { useAppDispatch, useAppSelector } from "./../../Hook/ReduxHook";
import {
  addVacationRequest,
  editVacationRequest,
  toggleModalForEdit,
} from "../../../store/redusers/VacationSlice";
import { isEmpty } from "../../../utils/_NotEmptyObject";

const initialState: IVacation = {
  checkInDate: "",
  checkOutDate: "",
  description: "",
  destination: "",
  imgUrl: "",
  price: 0,
  title: "",
};

function FormVacation({ vacation ,titleForm}: { vacation: IVacation | null ,titleForm:string}) {
  // const userName = useSelector((state: any) => state.authReducer?.userName);
  const [vacationValues, setVacationValues] = useState<IVacation>(initialState);
  const {} = useAppSelector((state) => state.vacationSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    vacation && setVacationValues(vacation);
    return () => setVacationValues(initialState);
  }, [vacation]);

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

  function vacationFormHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isEmpty(vacationValues)) {
      if (vacation?.vacation_id) {
        dispatch(editVacationRequest({ ...vacationValues }));
        dispatch(toggleModalForEdit(false));
      } else if (!vacation?.vacation_id)
        dispatch(addVacationRequest({ ...vacationValues }));
    }
  }
  const {
    checkInDate,
    checkOutDate,
    price,
    description,
    destination,
    imgUrl,
    title,
    numberOfFollowers,
  } = vacationValues;

  return (
    <div>
      <h1>{titleForm}</h1>
      <form onSubmit={(e) => vacationFormHandler(e)}>
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
                value={title}
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
                value={imgUrl}
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
                value={description}
              />
            </span>

            <span className="input--col">
              <CustomInput
                value={destination}
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
                value={checkInDate}
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
                value={checkOutDate}
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
                value={String(price)}
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

export default FormVacation;
