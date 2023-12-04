using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
 
                return CreatedAtAction("GetPayments", new { id = payment.PaymentId }, payment);
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

        // [HttpDelete("payment/{id}")]
        // public IActionResult DeletePayments(int id)
        // {
        //     try
        //     {
        //         var payment = _db.Payments.Find(id);
 
        //         if (payment == null)
        //         {
        //             return NotFound($"Payment with ID {id} not found");
        //         }
        //         payment.IsDeleted = false;
                
        //         _db.SaveChanges();
 
        //         return Ok("Payment Deleted");
        //     }
        //     catch (Exception ex)
        //     {
        //         return StatusCode(500, $"Internal Server Error: {ex.Message}");
        //     }
        // }


        // -----------------------------------ADMISSIONS CONTROLLER--------------------------------------


        [HttpGet("admissions")]
        public IActionResult GetAdmissions()
        {
            try
            {
                var admissions = _db.Admissions.Include("Course").ToList();

                return Ok(admissions);
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

        // ----------------------------PUT ADMISSIONS--------------------------------------

        [HttpPut("admission/{id}")]
        public IActionResult EditAdmission(int id, [FromBody] Admission admission)
        {
            try
            {
                var existingAdm = _db.Admissions.Find(id);
 
                if (existingAdm == null)
                {
                    return NotFound($"Admission with ID {id} not found");
                }
 
                // Update properties based on your Course model

                existingAdm.courseId = admission.courseID;
                existingAdm.userId = admission.userId;
                existingAdm.status = admission.status;
                existingAdm.ModifiedBy = admission.ModifiedBy;
 
                _db.SaveChanges();
 
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }


        //-------------------------------DeleteAdmission---------------------------------------

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
                _db.Admissions.Remove(admission);
                _db.SaveChanges();
 
                return Ok("Admission Deleted");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        //---------------------------GET ADMISSION BY ID-----------------------

        [HttpGet("admission/{id}")]
        public IActionResult GetAdmission(int id)
        {
            try
            {
                var admission = _db.Admissions.FirstOrDefault(e=>e.AdmissionId==id);
                return Ok(admission);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

//----------------------------------------COURSES-------------------------------------------

        [HttpGet("courses")]
        public IActionResult GetCourses()
        {
            try
            {
                var courses = _db.Courses.ToList();
                return Ok(courses);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }
 
          //Get Courses
 
        [HttpGet("course/{id}")]
        public IActionResult GetCourse(int id)
        {
            try
            {
                var course = _db.Courses.FirstOrDefault(e=>e.CourseID==id);
                return Ok(course);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }
 
           //Get Courses for a Student
          [HttpGet("student/courses")]
        public IActionResult GetStudentCourse()
        {
            try
            {
                 var courses = _db.Courses.ToList();
                //var notDeletedCourses = _db.Courses.Where(x=>x.IsDeleted==true);
                return Ok(courses);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }
 
          //Post Course
        [HttpPost("course")]
        public IActionResult AddCourse([FromBody] Course course)
        {
            try
            {
                if (course == null)
                {
                    return BadRequest("Course object is null");
                }
 
                _db.Courses.Add(course);
                _db.SaveChanges();
 
                return CreatedAtAction("GetCourses", new { id = course.CourseID }, course);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }
 
 
        //update course
          [HttpPut("course/{id}")]
        public IActionResult EditCourse(int id, [FromBody] Course course)
        {
            try
            {
                var existingCourse = _db.Courses.Find(id);
 
                if (existingCourse == null)
                {
                    return NotFound($"Course with ID {id} not found");
                }
 
                // Update properties based on your Course model
                existingCourse.CourseName = course.CourseName;
                existingCourse.Description = course.Description;
                existingCourse.Duration = course.Duration;
                existingCourse.FeesAmount = course.FeesAmount;
                existingCourse.ModifiedBy = course.ModifiedBy;
 
                _db.SaveChanges();
 
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }
 
        //Delete Course
          [HttpDelete("course/{id}")]
        public IActionResult DeleteCourse(int id)
        {
            try
            {
                var course = _db.Courses.Find(id);
 
                if (course == null)
                {
                    return NotFound($"Course with ID {id} not found");
                }
                 //course.IsDeleted = false;
                _db.Courses.Remove(course);
                _db.SaveChanges();
 
                return Ok("Course Deleted");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }


        //----------------------------------------------ENQUIRIES---------------------------------------------

        [HttpDelete("/api/student/{id}")]
        public IActionResult DeleteEnquiry(int id)
        {
            try
            {
                var enquiry = _db.Enquiries.Find(id);

                if (enquiry == null)
                {
                    return NotFound("Enquiry not found.");
                }
                enquiry.IsDeleted = false;

                _db.SaveChanges();

                return Ok("Enquiry deleted successfully.");
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, "Internal server error");
            }
        }


        // ------------------------------------------------

        [HttpPost("/api/student/addenquiry")]
        public IActionResult AddEnquiry([FromBody] Enquiry enquiry)
        {
            try
            {
                // var user = _db.Users.FirstOrDefault(u => u.UserId == enquiry.UserId);

                // if (user == null)
                // {
                //     return BadRequest("User not found.");
                // }

                // if (user.UserRole == "student")
                // {
                    if (_db.Enquiries.Count(e => e.EnquiryDate.Date == DateTime.Today && e.UserId == enquiry.UserId) >= 5)
                    {
                        return BadRequest("You have reached the maximum number of enquiries per day.");
                    }
                    else{
                        _db.Enquiries.Add(enquiry);
                    }
                // }

                _db.SaveChanges();

                return Ok("Enquiry added successfully.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error in AddEnquiry: {ex}");
                return StatusCode(500, "Internal server error");
            }
        }
    }
}