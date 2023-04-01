
using DAL.Interface;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BAL.Service
{
    public class RoomService
    {
        private readonly IRoomRepository<ROOM> _roomRepository;

        public RoomService(IRoomRepository<ROOM> roomRepository)
        {
            _roomRepository = roomRepository;
        }
     

        public IEnumerable<ROOM> GetAllRooms()
        {
            try
            {
                return _roomRepository.GetAllRooms().ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }



    }
}