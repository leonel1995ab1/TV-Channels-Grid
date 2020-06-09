using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TVChannelsGrid.ServerApp.DataContracts;
using TVChannelsGrid.ServerApp.Services;

namespace TVChannelsGrid.WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GridController : ControllerBase
    {
        private readonly GridService Service = new GridService();

        [HttpGet("[action]")]
        public List<GridListData> GetList() => Service.GetList();

    }
}
