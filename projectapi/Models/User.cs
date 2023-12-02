using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace projectapi.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string Email { get; set; }
 
 
        public string Password { get; set; }
 
        public string Username { get; set; } ="";
 
        public string MobileNumber { get; set; }
 
        public string UserRole { get; set; }
        public ICollection<Enquiry>? Enquiry {get;set;}
        public ICollection<Admission>? Admission {get;set;}

    }
}