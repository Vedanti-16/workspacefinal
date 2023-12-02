using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using projectapi.Models;

namespace projectapi.Controllers
{
    [ApiController]
    [Route("api")]
    public class AccountController : ControllerBase
    {

        //----------------------------------PAYEMENT CONTROLLER----------------------------------------

        private ApplicationDbContext _db;

        public AccountController(ApplicationDbContext dbContext){
            this._db = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        //---------------------GET PAYMENTS----------------------------------

        [HttpGet("payments")]
        public IActionResult GetPayments()
        {
            try
            {
                var payments = _db.Payments.ToList();
                return Ok(payments);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        //--------------------------POST PAYMENTS---------------------------------

        [HttpPost("make-payment")]
        public IActionResult MakePayments([FromBody] Payment payment)
        {
            try
            {
                if (payment == null)
                {
                    return BadRequest("Payment object is null");
                }
 
                _db.Payments.Add(payment);
                _db.SaveChanges();
 
                return CreatedAtAction("GetPayments", new { id = payment.PaymentID }, payment);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        //----------------------------PUT PAYMENTS--------------------------------------

        

        // [HttpPut("course/{id}")]
        // public IActionResult EditCourse(int id, [FromBody] Course course)
        // {
        //     try
        //     {
        //         var existingCourse = _db.Courses.Find(id);
 
        //         if (existingCourse == null)
        //         {
        //             return NotFound($"Course with ID {id} not found");
        //         }
 
        //         // Update properties based on your Course model
        //         existingCourse.CourseName = course.CourseName;
        //         existingCourse.Description = course.Description;
        //         existingCourse.Duration = course.Duration;
        //         existingCourse.FeesAmount = course.FeesAmount;
        //         existingCourse.ModifiedBy = user.username;
 
        //         _db.SaveChanges();
 
        //         return NoContent();
        //     }
        //     catch (Exception ex)
        //     {
        //         return StatusCode(500, $"Internal Server Error: {ex.Message}");
        //     }
        // }


        //--------------------------------DELETE PAYMENTS---------------------------------------

        [HttpDelete("payment/{id}")]
        public IActionResult DeletePayments(int id)
        {
            try
            {
                var payment = _db.Payments.Find(id);
 
                if (payment == null)
                {
                    return NotFound($"Payment with ID {id} not found");
                }
                payment.IsDeleted = false;
                _db.SaveChanges();
 
                return Ok("Payment Deleted");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }


        // -----------------------------------ADMISSIONS CONTROLLER--------------------------------------


        [HttpGet("admissions")]
        public IActionResult GetAdmissions()
        {
            try
            {
                var admission = _db.Admissions.ToList();
                return Ok(admission);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        //--------------------------POST admission---------------------------------

        [HttpPost("addAdmission")]
        public async Task<IActionResult> PostAdmission([FromBody] Admission admission)
        {
            try
            {
                if (admission == null)
                {
                    return BadRequest("Admission object is null");
                }
 
                _db.Admissions.Add(admission);
                await _db.SaveChangesAsync();
 
                return CreatedAtAction("GetAdmissions", new { id = admission.AdmissionId }, admission);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        //----------------------------PUT PAYMENTS--------------------------------------

        // [HttpPut("course/{id}")]
        // public IActionResult EditCourse(int id, [FromBody] Course course)
        // {
        //     try
        //     {
        //         var existingCourse = _db.Courses.Find(id);
 
        //         if (existingCourse == null)
        //         {
        //             return NotFound($"Course with ID {id} not found");
        //         }
 
        //         // Update properties based on your Course model
        //         existingCourse.CourseName = course.CourseName;
        //         existingCourse.Description = course.Description;
        //         existingCourse.Duration = course.Duration;
        //         existingCourse.FeesAmount = course.FeesAmount;
        //         existingCourse.ModifiedBy = course.ModifiedBy;
 
        //         _db.SaveChanges();
 
        //         return NoContent();
        //     }
        //     catch (Exception ex)
        //     {
        //         return StatusCode(500, $"Internal Server Error: {ex.Message}");
        //     }
        // }


        //--------------------------------DELETE PAYMENTS---------------------------------------

        [HttpDelete("admission/{id}")]
        public IActionResult DeleteAdmission(int id)
        {
            try
            {
                var admission = _db.Admissions.Find(id);
 
                if (admission == null)
                {
                    return NotFound($"Admission with ID {id} not found");
                }
                admission.IsDeleted = false;
                _db.SaveChanges();
 
                return Ok("Admission Deleted");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }


    }
}