using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace projectapi.Models
{
    public class Payment
    {
        public int PaymentID {get; set;}
        public int AdmissionId { get; set; }
        public int CourseId { get; set; }
        public int UserId { get; set; }
        public DateTime PaymentDate {get; set;}
        public int Amount {set; get;}
        public string? Mode {get; set;}
        public string? Status { get; set; }
        public virtual User? User { get; set; }
        public Boolean IsDeleted { get; set; }

    }
}