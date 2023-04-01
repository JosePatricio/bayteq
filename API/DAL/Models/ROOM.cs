using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    [Table("ROOM")]
    public class ROOM
    {
        [Key]
        public int ROOM_NUMBER { get; set; }
        public Nullable<bool> STATUS { get; set; }

    }
}
