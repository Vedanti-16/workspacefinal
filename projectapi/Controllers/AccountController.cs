using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using projectapi.Models;

namespace projectapi.Controllers
{
    [ApiController]
    [Route("api/")]
    public class AccountController : ControllerBase
    {

        //----------------------------------PAYEMENT CONTROLLER----------------------------------------

        private ApplicationDbContext _db;

        public AccountController(){
            
        }

        [HttpGet("payments")]
        public IActionResult GetPayments()
        {
            try
            {
                var payments = _db.Payment.ToList();
                return Ok(payments);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }
    }
}