using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TVChannelsGrid.Database.Models;
using TVChannelsGrid.ServerApp.DataContracts;
using TVChannelsGrid.ServerApp.Mappers;

namespace TVChannelsGrid.ServerApp.Services
{
    public class ChannelService
    {
        private readonly DbSet db = new DbSet();

        public List<ChannelData> GetChannels()
        {
            var dbChannels = db.Channels;
            return dbChannels.Select(c => c.MapToChannelData()).ToList();
        }

        public ChannelData GetChannelById (int id)
        {
            var channel = db.Channels.First(c => c.Id == id);
            return channel.MapToChannelDetailsData();
        }
    }
}
