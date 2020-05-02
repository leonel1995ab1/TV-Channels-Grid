using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TVChannelsGrid.Database.Models;
using TVChannelsGrid.ServerApp.DataContracts;
using TVChannelsGrid.ServerApp.Services;

namespace TVChannelsGrid.WebApp.Controllers
{
    [Route("api/[controller]")]
    public class ChannelController : Controller
    {
        private readonly ChannelService Service = new ChannelService();

        [HttpGet("[action]")]
        public List<ChannelData> GetChannels()
        {
            return Service.GetChannels();
        }

        [HttpGet("[action]")]
        public ChannelData GetChannelById(int id)
        {
            return Service.GetChannelById(id);
        }
    }
}
