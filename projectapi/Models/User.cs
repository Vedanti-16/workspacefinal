using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace projectapi
{
    public class User
    {

        public long UserId { get; set; }
 
        public string? Email { get; set; }
 
        public string? Password { get; set; }
 
        public string? Username { get; set; }
 
        public string? MobileNumber { get; set; }
 
        public string? UserRole { get; set; }
 
        public string? Token { get;set; }
    }
}