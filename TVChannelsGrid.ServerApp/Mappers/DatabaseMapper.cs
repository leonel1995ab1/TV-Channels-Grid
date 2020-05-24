using TVChannelsGrid.Database.Models;
using TVChannelsGrid.ServerApp.DataContracts;

namespace TVChannelsGrid.ServerApp.Mappers
{
    public static class DatabaseMapper
    {
        public static Channels MapChannelToCreate(this ChannelData channel)
        {
            return new Channels
            {
                Category = channel.CategoryId,
                Code = channel.Code,
                Description = channel.Description,
                EnglishUrl = channel.EnglishUrl,
                Is3D = channel.Is3D,
                Is4K = channel.Is4K,
                IsHD = channel.IsHD,
                IsSD = channel.IsSD,
                Logo = channel.Logo,
                Name = channel.Name,
                SpanishUrl = channel.SpanishUrl
            };
        }

        public static Channels MapChannelToUpdate(this ChannelData channel)
        {
            return new Channels
            {
                Id = channel.Id,
                Category = channel.CategoryId,
                Code = channel.Code,
                Description = channel.Description,
                EnglishUrl = channel.EnglishUrl,
                Is3D = channel.Is3D,
                Is4K = channel.Is4K,
                IsHD = channel.IsHD,
                IsSD = channel.IsSD,
                Logo = channel.Logo,
                Name = channel.Name,
                SpanishUrl = channel.SpanishUrl
            };
        }
    }
}
