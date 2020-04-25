using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TVChannelsGrid.Database.Models;
using TVChannelsGrid.ServerApp.DataContracts;

namespace TVChannelsGrid.WebApp.Controllers
{
    [Route("api/[controller]")]
    public class ChannelController : Controller
    {
        readonly DbSet db = new DbSet();

        [HttpGet("[action]")]
        public List<ChannelData> GetChannels()
        {
            var dbChannels = db.Channels;
            return dbChannels.Select(x => MapToChannelData(x)).ToList();
        }

        private ChannelData MapToChannelData(Channels x)
        {
            return new ChannelData()
            {
                Id = x.Id,
                Name = x.Name,
                Code = x.Code,
                Description = x.Description,
                Resolution = x.Resolution,
                CategoryId = 1,
                CategoryName = "",
                Logo = x.LogoUrl
            };
        }
    }
}
