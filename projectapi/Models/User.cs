using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace projectapi.Models
{
    public class User
    {
         public string Email { get; set; }
 
        public long UserId { get; set; } = 0;
 
        public string Password { get; set; }
 
        public string Username { get; set; } ="";
 
        public string MobileNumber { get; set; }
 
        public string UserRole { get; set; }
    }
}