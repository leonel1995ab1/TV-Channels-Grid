using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TVChannelsGrid.Database.Models
{
    public partial class Channels
    {
        [Key]
        public string Code { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Category { get; set; }
        public string Logo { get; set; }
        public string EnglishUrl { get; set; }
        public string SpanishUrl { get; set; }
        public bool IsSD { get; set; }
        public bool IsHD { get; set; }
        public bool Is4K { get; set; }
        public bool Is3D { get; set; }
    }
}
