using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TVChannelsGrid.Database.Models;

namespace TVChannelsGrid.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        DbSet db = new DbSet();

        [HttpGet("[action]")]
        public IEnumerable<Category> GetCategories()
        {
            var cat =  db.Category.ToList();
            return cat;
        }
    }
}
