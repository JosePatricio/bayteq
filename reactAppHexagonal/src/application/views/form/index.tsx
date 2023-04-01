import { useEffect, useState } from "react";
import { Room } from "../../../domain/entities";
import { ReservationModel } from "../../models";
import DateTimePicker from 'react-datetime-picker';
import "../form/index.css";

interface IProps {
  reservation: ReservationModel
  handleChange: (e: any) => void;
  handleCheckInChange: (e: any) => void;
  handleCheckOutChange: (e: any) => void;
  onClickSave: () => void;
  rooms: Room[],
}




export const ReservationForm = ({ ...props }: IProps) => {
  const { reservation, rooms, handleChange,  onClickSave ,handleCheckInChange,handleCheckOutChange} = props;
  const [enabledButton, setEnabledButton] = useState(false);
  const [fieldCss, setFieldCss] = useState({ name: 'input', identification: 'input', room: 'input', save: '' });



  useEffect(() => {
    if (reservation.IDENTIFICATION == undefined || reservation.NAME == undefined || reservation.ROOM_NUMBER == undefined || reservation.ROOM_NUMBER == 0) {
      setEnabledButton(false);
    }
    else {
      setEnabledButton(true);
    }

  }, [reservation])



  return (
    <div id="formContainer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <h4>Reservation form</h4>


      <div style={{ width: '50%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ justifyContent: 'center' }}>
            DNI:
          </div>

          <div style={{ padding: 10 }}>  <input
            id="idIdentification"
            type="text"
            value={reservation?.IDENTIFICATION}
            placeholder={'Identification'}
            name="IDENTIFICATION"
            onChange={handleChange}
            className={fieldCss.identification}
            onBlur={() => {
              setFieldCss({ ...fieldCss, identification: !reservation?.IDENTIFICATION ? 'inputRequired' : 'input' });
            }}
          />
          </div>

        </div>
      </div>


      <div style={{ width: '50%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

          <div style={{ justifyContent: 'center' }}>
            NAME:
          </div>
          <div style={{ padding: 10 }}>  <input
            id="idName"
            type="text"
            value={reservation?.NAME}
            placeholder={'Nombre'}
            name="NAME"
            required={true}
            onChange={handleChange}
            onBlur={() => {
              setFieldCss({ ...fieldCss, name: !reservation?.NAME ? 'inputRequired' : 'input' });
            }}
            className={fieldCss.name}
          />
          </div>


        </div>
      </div>


      <div style={{ width: '50%',paddingTop:10,paddingBottom:10 }}>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

          <div style={{ justifyContent: 'center' }}>
            ROOM NUMBER: </div>

          <div >
            <select name="ROOM_NUMBER" onChange={handleChange} >
              <option value={0} selected={true}>{'Choose room'}</option>
              {rooms.map(function (n, index) {
                return (<option key={`${index}`} value={n.ROOM_NUMBER} selected={n === reservation.ROOM_NUMBER}>{n.ROOM_NUMBER}</option>);
              })}
            </select> </div>
        </div>
      </div>


      <div style={{ width: '50%',paddingTop:10,paddingBottom:10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

          <div style={{ justifyContent: 'center',paddingTop:15 }}>
            CHECKIN:
          </div>
          <div style={{ padding: 10 }}> 
            <DateTimePicker format="y MM dd HH:mm:ss"  onChange={handleCheckInChange} value={reservation.CHECKIN} />
          </div>
        </div>
      </div>



      <div style={{ width: '50%',paddingTop:10,paddingBottom:10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>

          <div style={{ justifyContent: 'center',paddingTop:15 }}>
            CHECKOUT:
          </div>
          <div style={{ padding: 10 }}> 
            <DateTimePicker format="y MM dd HH:mm:ss" onChange={handleCheckOutChange} value={reservation.CHECKOUT} />
          </div>
        </div>
      </div>





      <div style={{ paddingTop: 50 }}>
        <button id="crearId"
          disabled={!enabledButton}
          className={(enabledButton) ? "button" : "button-inactive"} onClick={onClickSave} ><i className="fa fa-window-maximize" style={{ paddingRight: 10 }} ></i>Save</button>

      </div>
    </div>
  )
}