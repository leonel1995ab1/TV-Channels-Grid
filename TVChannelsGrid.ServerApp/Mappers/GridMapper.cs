using TVChannelsGrid.Database.Models;
using TVChannelsGrid.ServerApp.DataContracts;

namespace TVChannelsGrid.ServerApp.Mappers
{
    public static class GridMapper
    {
        public static GridListData MapToGridListData (this Grids grid)
        {
            return new GridListData
            {
                Id = grid.Id,
                GridName = grid.GridName,
                CreatedOn = grid.CreatedOn,
                ModifiedOn = grid.ModifyOn
            };
        }
    }
}
