using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TVChannelsGrid.Database.Models;
using TVChannelsGrid.ServerApp.DataContracts;
using TVChannelsGrid.ServerApp.Mappers;

namespace TVChannelsGrid.ServerApp.Services
{
    public class GridService
    {
        private readonly DbSet db = new DbSet();

        public List<GridListData> GetList()
        {
            var dbGrids = db.Grids;
            return dbGrids.Select(g => g.MapToGridListData()).ToList();
        }
    }
}
