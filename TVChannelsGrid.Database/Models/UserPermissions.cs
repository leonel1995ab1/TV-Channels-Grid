using System;
using System.Collections.Generic;

namespace TVChannelsGrid.Database.Models
{
    public partial class UserPermissions
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public bool HasReadOnlyPermissions { get; set; }
        public bool HasReadAndEditPermissions { get; set; }
        public bool HasReadAndDeletePermissions { get; set; }
        public bool CanEditChannels { get; set; }
        public bool CanDeleteChannels { get; set; }
        public bool IsAdminUser { get; set; }
    }
}
