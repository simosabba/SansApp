using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SansApp.WebApp.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult ResetShh()
        {
            ChatHub.ShhCount = 0;
            return Ok();
        }
    }
}
