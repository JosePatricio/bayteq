using DAL.Data;
using DAL.Interface;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DAL.Repository
{
    public class RepositoryReservation : IRepository<RESERVATION>
    {
        ApplicationDbContext _dbContext;
        public RepositoryReservation(ApplicationDbContext applicationDbContext)
        {
            _dbContext = applicationDbContext;
        }
        public async Task<RESERVATION> Create(RESERVATION _object)
        {
            var obj = await _dbContext.Reservations.AddAsync(_object);
            _dbContext.SaveChanges();
            return obj.Entity;
        }

        public void Update(RESERVATION _object)
        {
            _dbContext.Reservations.Update(_object);
            _dbContext.SaveChanges();
        }


        public IEnumerable<RESERVATION> GetAll()
        {
            try
            {
                return _dbContext.Reservations.ToList();
            }
            catch (Exception ee)
            {
                throw;
            }
        
        }

      

    }
}
