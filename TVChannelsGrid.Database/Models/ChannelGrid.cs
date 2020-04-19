using System;
using System.Collections.Generic;

namespace TVChannelsGrid.Database.Models
{
    public partial class ChannelGrid
    {
        public int Id { get; set; }
        public int ChannelId { get; set; }
        public int? ChannelPack { get; set; }
        public int Number { get; set; }
    }
}
