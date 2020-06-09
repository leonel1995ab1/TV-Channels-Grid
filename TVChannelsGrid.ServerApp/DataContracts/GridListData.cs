using System;
using System.Runtime.Serialization;

namespace TVChannelsGrid.ServerApp.DataContracts
{
    [DataContract]
    public class GridListData
    {
        [DataMember(Name = "id")]
        public int Id { get; set; }

        [DataMember(Name = "gridName")]
        public string GridName { get; set; }

        [DataMember(Name = "createdOn")]
        public DateTime? CreatedOn { get; set; }

        [DataMember(Name = "modifiedOn")]
        public DateTime? ModifiedOn { get; set; }
    }
}