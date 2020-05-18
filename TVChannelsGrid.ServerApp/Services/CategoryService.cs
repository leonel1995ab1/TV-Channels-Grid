using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TVChannelsGrid.Database.Models;
using TVChannelsGrid.ServerApp.DataContracts;
using TVChannelsGrid.ServerApp.Mappers;

namespace TVChannelsGrid.ServerApp.Services
{
    public class CategoryService
    {
        private readonly DbSet db = new DbSet();

        public List<CategoryData> GetCategories()
        {
            return db.Category.Select(c => c.MapToCategoryData()).ToList();
        }
    }
}
