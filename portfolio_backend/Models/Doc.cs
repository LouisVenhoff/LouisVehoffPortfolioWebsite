using LibGit2Sharp;

namespace portfolio_backend.Modles{

    public class Doc{

        [Key]
        public int Id;

        [Required]
        public required string markdownPath;

        public int? RepositoryId {get; set;}

        public Repository? Repository {get; set;} = null!;


    }


}