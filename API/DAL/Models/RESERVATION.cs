using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;
namespace DAL.Models
{
    [Table("RESERVATION")]
    public class RESERVATION
    {
        [Key]
        [Required]
        public string IDENTIFICATION { get; set; }

        [Required]
        public string NAME { get; set; }

        [Required]
        public int ROOM_NUMBER { get; set; }

        [Required]
        public System.DateTime CHECKIN { get; set; } = DateTime.Now;

        [Required]
        public System.DateTime CHECKOUT { get; set; } = DateTime.Now;
        [Required]
        public System.DateTime DEPARTURE { get; set; } = DateTime.Now;
        public Nullable<bool> STATUS { get; set; }

    }
}
