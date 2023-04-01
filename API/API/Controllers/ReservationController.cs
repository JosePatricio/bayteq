
using BAL.Service;
using DAL.Interface;
using DAL.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationController : ControllerBase
    {
        private readonly ReservationService _reservationService;
      
        private readonly IRoomRepository<ROOM> _roomRepository;

        public ReservationController( IRoomRepository<ROOM> roomRepository, ReservationService reservationService)
        {
            _reservationService = reservationService;
            _roomRepository = roomRepository;
        }
        
        [HttpPost("CheckIn")]
        public async Task<Object> CheckIn([FromBody] RESERVATION obj)
        {
            try
            {
                return _reservationService.CheckIn(obj);
            }
            catch (Exception)
            {

                return false;
            }
        }


        
        [HttpPut("CheckOut")]
        public bool CheckOut(RESERVATION Object)
        {
            try
            {
                _reservationService.CheckOut(Object);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }


        [HttpGet("GetAll")]
        public Object GetAll()
        {
            var data = _reservationService.GetAll();
            var json = JsonConvert.SerializeObject(data, Formatting.Indented,
                new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                }
            );
            return json;
        }

        [HttpGet("GetAllRooms")]
        public Object GetAllRooms()
        {
            var data = _roomRepository.GetAllRooms();
            var json = JsonConvert.SerializeObject(data, Formatting.Indented,
                new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                }
            );
            return json;
        }
    }
}