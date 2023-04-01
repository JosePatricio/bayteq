
using DAL.Interface;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BAL.Service
{
    public class ReservationService
    {
        private readonly IRepository<RESERVATION> _repository;
        private readonly IRoomRepository<ROOM> _roomRepository;


        public ReservationService(IRepository<RESERVATION> repository, IRoomRepository<ROOM> roomRepository)
        {
            _repository = repository;
            _roomRepository = roomRepository;
        }
     

        public IEnumerable<RESERVATION> GetAll()
        {
            
            try
            {
                return _repository.GetAll().ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }


        public bool CheckIn(RESERVATION obj)
        {
            obj.STATUS = true;
              ROOM room = _roomRepository.GetAllRooms().Where(x => x.ROOM_NUMBER==obj.ROOM_NUMBER).ToList().First();
            if (room.STATUS==false) {
                return false;   
            }
            room.STATUS = false;
            _roomRepository.Update(room);
            _repository.Create(obj);
            return true;
        }


        public void CheckOut(RESERVATION obj)
        {

            int year = DateTime.Now.Year;
            int month = DateTime.Now.Month;
            int day = DateTime.Now.Day;
            int hour = DateTime.Now.Hour;
            int minute = DateTime.Now.Minute;
            int second = DateTime.Now.Second;


            obj.DEPARTURE = new DateTime(year, month, day, hour, minute, second);


            ROOM room = _roomRepository.GetAllRooms().Where(x => x.ROOM_NUMBER == obj.ROOM_NUMBER).ToList().First();
            room.STATUS = true;
            obj.STATUS = false;
            _repository.Update(obj);
            _roomRepository.Update(room);
            
        }

    }
}