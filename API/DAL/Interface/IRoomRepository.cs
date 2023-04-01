using System.Collections.Generic;

namespace DAL.Interface
{
    public interface IRoomRepository<T>
    {
        public IEnumerable<T> GetAllRooms();
        public void Update(T _object);

    }
}