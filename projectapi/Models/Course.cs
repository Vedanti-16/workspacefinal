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
        public int FeesAmount { get; set; }
        public string? CreatedBy {get; set;}
        public string? ModifiedBy {get; set;} 
        public Boolean IsDeleted { get; set; }
        public ICollection<Admission>? Admission { get; set; }
        
        public ICollection<Enquiry>? Enquiries { get; set; }
 
    }
}