using System;
using System.Collections.Generic;

namespace TVChannelsGrid.Database.Models
{
    public partial class Channels
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public string Resolution { get; set; }
        public int? Category { get; set; }
        public byte[] Logo { get; set; }
        public string LogoUrl { get; set; }
    }
}
