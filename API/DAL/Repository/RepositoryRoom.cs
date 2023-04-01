using DAL.Data;
using DAL.Interface;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DAL.Repository
{
    public class RepositoryRoom : IRoomRepository<ROOM>
    {
        ApplicationDbContext _dbContext;
        public RepositoryRoom(ApplicationDbContext applicationDbContext)
        {
            _dbContext = applicationDbContext;
        }
      
        public IEnumerable<ROOM> GetAllRooms()
        {
            try
            {
                return _dbContext.Rooms.ToList();
            }
            catch (Exception ee)
            {
                throw;
            }
        }

        public void Update(ROOM _object)
        {
            _dbContext.Rooms.Update(_object);
            _dbContext.SaveChanges();
        }
    }
}
