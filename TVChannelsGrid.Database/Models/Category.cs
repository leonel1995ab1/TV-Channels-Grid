using System;
using System.Collections.Generic;

namespace TVChannelsGrid.Database.Models
{
    public partial class Category
    {
        public int Id { get; set; }
        public string EnglishName { get; set; }
        public string SpanishName { get; set; }

        public Category IdNavigation { get; set; }
        public Category InverseIdNavigation { get; set; }
    }
}
