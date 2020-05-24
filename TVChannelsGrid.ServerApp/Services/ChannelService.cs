using Microsoft.EntityFrameworkCore;
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

        public List<ChannelData> GetAll()
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

        public ChannelData GetById (int id)
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

        public async Task<int> Create (ChannelData channel)
        {
            var newCh = db.Channels.Add(channel.MapChannelToUpdate()).Entity;
            await db.SaveChangesAsync();
            return newCh.Id;
        }

        public async Task<int> Update (ChannelData channel)
        {
            db.Channels.Update(channel.MapChannelToUpdate());
            return await db.SaveChangesAsync();
        }

        public async Task<int> Delete(IEnumerable<DeletedChannel> channels)
        {
            var channelList = channels.ToList();
            foreach(var c in channelList)
            {
                var ch = db.Channels.Find(c.Id);
                db.Channels.Remove(ch);
            }
            return await db.SaveChangesAsync();
        }
    }
}
