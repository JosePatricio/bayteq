import { ReservationModel } from "../../models";
import "../list/index.css";

interface IProps {
  reservations: Array<ReservationModel>;
  onClickCheckOut:(item:ReservationModel)=>void;
}

export const ReservationList= ({ ...props }: IProps) => {
  
 
  

  const {reservations,onClickCheckOut}=props;
  

  
  return reservations.length > 0 ? (<div className="container-list">
      <table style={{width:'800px'}}>
        <thead>
          <tr>
            <th>Identification</th>
            <th>Name</th>
            <th>Room number</th>
            <th>CheckIn Date</th>
            <th>CheckOut Date</th>
            <th>Departure</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
      
          {reservations.map((reservation: ReservationModel, index: number) => (
            <tr key={`${index}`}>
              <td>{reservation.IDENTIFICATION}</td>
              <td>{reservation.NAME}</td>
              <td>{reservation.ROOM_NUMBER}</td>
              <td>{reservation.CHECKIN!.toString()}</td>
              <td>{reservation.CHECKOUT?.toString()}</td>
              <td>{reservation.STATUS?'':reservation.DEPARTURE?.toString()}</td>
              <td>{reservation.STATUS?'Active':'Inactive'}</td>
              <td>
                <div style={{flexDirection:'row'}}>

                <button className="button" onClick={()=>onClickCheckOut(reservation)} ><i className="fa fa-trash" style={{ paddingRight: 10 }} ></i>Checkout</button>

                </div>
               
              </td>
            </tr>
          ))}

          <tr></tr>
        </tbody>
      </table>
      </div>
  ) : (
    <div >Empty</div>
  );
};
