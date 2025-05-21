using System.ComponentModel.DataAnnotations;
using System.Net.Sockets;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.SignalR;


namespace portfolio_backend.Models
{
    public class Repository{

        public Repository(){}

        public Repository(String Name, String CloneLink){
            this.Name = Name;
            this.CloneLink = CloneLink;
        }

        [Key]
        public int Id {get; set;}

        [Required]
        public String? Name {get; set;}

        [Required]
        public String CloneLink {get; set;}

        [JsonIgnore]
        public Doc? Doc { get; set; }

    }
}