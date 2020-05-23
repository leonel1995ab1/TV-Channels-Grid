using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TVChannelsGrid.ServerApp.DataContracts;
using TVChannelsGrid.ServerApp.Services;

namespace TVChannelsGrid.WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly CategoryService Service = new CategoryService();

        [HttpGet("[action]")]
        public List<CategoryData> GetCategories() => Service.GetCategories();
    }
}