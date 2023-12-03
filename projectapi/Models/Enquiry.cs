using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace projectapi.Models
{
    public class Enquiry
    {
        public int EnquiryID { get; set; }
 
        public DateTime EnquiryDate { get; set; }
 
        public string? Title { get; set; }
 
        public string? Description { get; set; }
 
        public string? EnquiryType { get; set; }
 
        public int? UserId { get; set; }
        public string? CreatedBy {get; set;}
        public DateTime? CreatedAt {get;set;}
        public string? ModifiedBy {get; set;}
        public DateTime? ModifiedAt {get;set;}
 
        public Boolean? IsDeleted { get; set; }
        public virtual User? User {get;set;}
    }
}