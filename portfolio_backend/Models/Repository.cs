using System.ComponentModel.DataAnnotations;
using System.Net.Sockets;
using Microsoft.AspNetCore.SignalR;

namespace portfolio_backend.Models
{
    public class Repository{

        public Repository(){}

        public Repository(String? Name){
            this.Name = Name;
        }

        [Key]
        public int Id {get; set;}

        [Required]
        public String? Name {get; set;}

    }
}