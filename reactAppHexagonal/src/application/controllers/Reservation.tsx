import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CheckIn, CheckOut, GetReservations, GetRooms } from "../../domain/use-cases"
import { ReservationModel } from "../models"
import { ReservationForm, ReservationList } from "../views"
import "./index.css"


export const Reservation= () => {
  
 const dispatch = useDispatch()
  // @ts-ignore
  const {  reservations,rooms } = useSelector(({ userReducer }) => userReducer)
  const [reservation, setReservation] = useState<ReservationModel>({CHECKIN:new Date(),CHECKOUT: new Date()});

  useEffect(() => {
     const getReservations = new GetReservations();
     dispatch(getReservations.execute()); 

     const getRooms = new GetRooms();
     dispatch(getRooms.execute()); 
 }, []);

  
  const handleChange = (e: any) => {
     const { value ,name} = e.target;
    setReservation({...reservation,[name]:value}); 
  };
 
  const handleCheckInChange = (e: Date) => {
   setReservation({...reservation,CHECKIN:e}); 
 };

 const handleCheckOutChange = (e: any) => {
  setReservation({...reservation,CHECKOUT:e}); 
};

  




  const onClickCheckOut = (reservation:ReservationModel) => {
    const service = new CheckOut();
    dispatch(service.execute(reservation));
  }

  
  
  const onClickCheckIn=()=>{
    const service = new CheckIn();
    dispatch(service.execute(reservation));

}

  return (
    <React.Fragment >
      <div className="container">
      
      <ReservationForm   handleChange={(e) => handleChange(e)} 
      handleCheckInChange={(e) => handleCheckInChange(e)} 
      handleCheckOutChange ={(e) => handleCheckOutChange(e)} 
           onClickSave={() => onClickCheckIn()} 
        rooms={rooms}
          reservation={reservation} /> 
      
        <ReservationList reservations={reservations}  onClickCheckOut={(e)=>onClickCheckOut(e)} 
          />
        

      </div>
    </React.Fragment>
  );
}