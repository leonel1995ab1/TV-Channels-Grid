using System.Runtime.Serialization;

namespace TVChannelsGrid.ServerApp.DataContracts
{
    [DataContract]
    public class DeletedChannel
    {
        [DataMember(Name = "id")]
        public int Id { get; set; }

        [DataMember(Name = "name")]
        public string Name { get; set; }
    }
}