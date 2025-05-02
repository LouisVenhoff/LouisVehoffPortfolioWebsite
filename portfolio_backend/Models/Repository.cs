using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.SignalR;

namespace portfolio_backend.Models
{
    public class Repository{

        [Key]
        public int Id {get; set;}

        [Required]
        public String? Name {get; set;}

    }
}