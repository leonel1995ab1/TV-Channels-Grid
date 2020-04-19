using System;
using System.Collections.Generic;

namespace TVChannelsGrid.Database.Models
{
    public partial class Grids
    {
        public int Id { get; set; }
        public string GridName { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string ModifyBy { get; set; }
        public DateTime? ModifyOn { get; set; }
    }
}
