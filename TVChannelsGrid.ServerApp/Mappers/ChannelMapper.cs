using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TVChannelsGrid.Database.Models;
using TVChannelsGrid.ServerApp.DataContracts;

namespace TVChannelsGrid.ServerApp.Mappers
{
    public static class ChannelMapper
    {
        public static ChannelData MapToChannelData(this Channels channel)
        {
            return new ChannelData()
            {
                Id = channel.Id,
                Name = channel.Name,
                Code = channel.Code,
                Resolution = channel.Resolution,
                CategoryId = 1,
                CategoryName = ""
            };
        }

        public static ChannelData MapToChannelDetailsData(this Channels channel)
        {
            return new ChannelData()
            {
                Id = channel.Id,
                Name = channel.Name,
                Code = channel.Code,
                Description = channel.Description,
                Resolution = channel.Resolution,
                CategoryId = 1,
                CategoryName = "",
                Logo = channel.Logo,
                EnglishUrl = channel.EnglishUrl,
                SpanishUrl = channel.SpanishUrl
            };
        }
    }
}
