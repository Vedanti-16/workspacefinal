using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace projectapi.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions <ApplicationDbContext> options):base(options)
        {
        }
        public virtual DbSet<Course> Courses {get;set;}
        public virtual DbSet<Enquiry> Enquiries {get;set;}
        public virtual DbSet<User> Users {get;set;}
        public virtual DbSet<Payment> Payments {get;set;}
        public virtual DbSet<Admission> Admissions {get;set;}
    }
}