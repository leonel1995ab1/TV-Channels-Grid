using System.Runtime.Serialization;

namespace TVChannelsGrid.ServerApp.DataContracts
{
    [DataContract]
    public class ChannelData
    {
        [DataMember(Name = "id")]
        public int Id { get; set; }

        [DataMember(Name = "name")]
        public string Name { get; set; }

        [DataMember(Name = "code")]
        public string Code { get; set; }

        [DataMember(Name = "description")]
        public string Description { get; set; }

        [DataMember(Name = "resolution")]
        public string Resolution { get; set; }

        [DataMember(Name = "categoryId")]
        public int CategoryId { get; set; }

        [DataMember(Name = "categoryName")]
        public string CategoryName { get; set; }

        [DataMember(Name = "base64Logo")]
        public string Logo { get; set; }

        [DataMember(Name = "englishUrl")]
        public string EnglishUrl { get; set; }

        [DataMember(Name = "spanishUrl")]
        public string SpanishUrl { get; set; }

    }
}
