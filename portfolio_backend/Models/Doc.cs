using LibGit2Sharp;

namespace portfolio_backend.Models{

    public class Doc{

        public Doc(){}

        [Key]
        public int Id {get; set;}

        [Required]
        public required string MarkdownPath {get; set;}

        public int? RepositoryId {get; set;}

        public Repository? Repository {get; set;} = null!;

    }


}