using TVChannelsGrid.Database.Models;
using TVChannelsGrid.ServerApp.DataContracts;

namespace TVChannelsGrid.ServerApp.Mappers
{
    public static class CategoryMapper
    {
        public static CategoryData MapToCategoryData (this Category category)
        {
            return new CategoryData
            {
                Id = category.Id,
                EnglishName = category.EnglishName,
                SpanishName = category.SpanishName
            };
        }
    }
}
