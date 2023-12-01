using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace projectapi.Models
{
    public class Payment
    {
        public int AdmissionId { get; set; }
        public int CourseId { get; set; }
        public int UserId { get; set; }
        public string? Status { get; set; }
        public virtual User? User { get; set; }
        public Boolean IsDeleted { get; set; }
    }
}