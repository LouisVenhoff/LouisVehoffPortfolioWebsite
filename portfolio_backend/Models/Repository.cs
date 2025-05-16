using System.ComponentModel.DataAnnotations;
using System.Net.Sockets;
using Microsoft.AspNetCore.SignalR;
using portfolio_backend.Modles;

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

        public Doc? Document {get; set;}

    }
}