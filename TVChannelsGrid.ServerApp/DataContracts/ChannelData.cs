using System.Runtime.Serialization;

namespace TVChannelsGrid.ServerApp.DataContracts
{
    [DataContract]
    public class ChannelData
    {
        [DataMember(Name = "name")]
        public string Name { get; set; }

        [DataMember(Name = "code")]
        public string Code { get; set; }

        [DataMember(Name = "description")]
        public string Description { get; set; }

        [DataMember(Name = "categoryId")]
        public int CategoryId { get; set; }

        [DataMember(Name = "englishCategoryDesc")]
        public string EnglishCategoryDesc { get; set; }

        [DataMember(Name = "spanishCategoryDesc")]
        public string SpanishCategoryDesc { get; set; }

        [DataMember(Name = "base64Logo")]
        public string Logo { get; set; }

        [DataMember(Name = "englishUrl")]
        public string EnglishUrl { get; set; }

        [DataMember(Name = "spanishUrl")]
        public string SpanishUrl { get; set; }

        [DataMember(Name = "isSD")]
        public bool IsSD { get; set; }

        [DataMember(Name = "isHD")]
        public bool IsHD { get; set; }

        [DataMember(Name = "is4K")]
        public bool Is4K { get; set; }

        [DataMember(Name = "is3D")]
        public bool Is3D { get; set; }

    }
}
