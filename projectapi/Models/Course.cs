using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace projectapi.Models
{
    public class Course
    {
        public int CourseID { get; set; }
 
        public string? CourseName { get; set; }
 
        public string? Description { get; set; }
 
        public string? Duration { get; set; }
 
        public decimal FeesAmount { get; set; }
        public string? CreatedBy {get; set;}
        public DateTime? CreatedAt {get;set;}
        public string? ModifiedBy {get; set;}
        public DateTime? ModifiedAt {get;set;}
 
        public Boolean? IsDeleted { get; set; }
        public ICollection<Enquiry>? Enquiries { get; set; }
    }
}