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
            var dbChannels = db.Channels
                .Join(
                    db.Category,
                    channel => channel.Category,
                    category => category.Id,
                    (channel, category) => new { channel, category }
                );

           return dbChannels.Select(c => c.channel.MapToChannelData(c.category)).ToList();
        }

        public ChannelData GetChannelById (int id)
        {
            var ch = db.Channels
                .Join(
                    db.Category,
                    channel => channel.Category,
                    category => category.Id,
                    (channel, category) => new { channel, category }
                )
                .First(c => c.channel.Id == id);

            return ch.channel.MapToChannelDetailsData(ch.category);
        }
    }
}
