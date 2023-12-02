using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace projectapi.Models
{
    public class Admission
    {
        public int AdmissionId { get; set; }
        public int? CourseID { get; set; }
        public int? UserId { get; set; }
        public string? Status { get; set; }
        public virtual User? User { get; set; }

        // public virtual Course? Course {get;set;}
        // public string? CreatedBy {get; set;}
        // public DateTime CreatedAt {get;set;}
        // public string? ModifiedBy {get; set;}
        // public DateTime ModifiedAt {get;set;}
        public Boolean IsDeleted { get; set; }
    }
}