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
        public static ChannelData MapToChannelData(this Channels channel, Category category)
        {
            return new ChannelData()
            {
                Id = channel.Id,
                Name = channel.Name,
                Code = channel.Code,
                CategoryId = channel.Category,
                EnglishCategoryDesc = category.EnglishName,
                SpanishCategoryDesc = category.SpanishName,
                IsSD = channel.IsSD,
                IsHD = channel.IsHD,
                Is4K = channel.Is4K,
                Is3D = channel.Is3D
            };
        }

        public static ChannelData MapToChannelDetailsData(this Channels channel, Category category)
        {
            return new ChannelData()
            {
                Id = channel.Id,
                Name = channel.Name,
                Code = channel.Code,
                Description = channel.Description,
                CategoryId = channel.Category,
                EnglishCategoryDesc = category.EnglishName,
                SpanishCategoryDesc = category.SpanishName,
                Logo = channel.Logo,
                EnglishUrl = channel.EnglishUrl,
                SpanishUrl = channel.SpanishUrl,
                IsSD = channel.IsSD,
                IsHD = channel.IsHD,
                Is4K = channel.Is4K,
                Is3D = channel.Is3D
            };
        }
    }
}
