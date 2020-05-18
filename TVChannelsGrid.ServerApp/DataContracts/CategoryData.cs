using System.Runtime.Serialization;

namespace TVChannelsGrid.ServerApp.DataContracts
{
    [DataContract]
    public class CategoryData
    {
        [DataMember(Name = "id")]
        public int Id { get; set; }

        [DataMember(Name = "englishName")]
        public string EnglishName { get; set; }

        [DataMember(Name = "spanishName")]
        public string SpanishName { get; set; }
    }
}