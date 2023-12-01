using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace projectapi.Models
{
    public class AppDbContext
    {
        public AppDbContext(DbContextOptions <AppDbContext> options):base(options)
        {
        }
        public virtual DbSet<Course> Courses {get;set;}
        public virtual DbSet<Enquiry> Enquiries {get;set;}
        public virtual DbSet<User> Users {get;set;}
        public virtual DbSet<Payment> Payments {get;set;}
        public virtual DbSet<Admission> Admissions {get;set;}
 
       
    }
    }
}