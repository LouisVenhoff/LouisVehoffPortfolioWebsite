using LibGit2Sharp;

namespace portfolio_backend.Models{

    public class Doc{

        public Doc(){}

        public Doc(string MarkdownPath, int RepositoryId)
        {
            this.MarkdownPath = MarkdownPath;
            this.RepositoryId = RepositoryId;
            this.ThumbnailPath = null;
        }

        public Doc(string MarkdownPath, string ThumbnailPath, int RepositoryId)
        {
            this.MarkdownPath = MarkdownPath;
            this.ThumbnailPath = ThumbnailPath;
            this.RepositoryId = RepositoryId;
        }

        [Key]
        public int Id {get; set;}

        [Required]
        public string MarkdownPath {get; set;}
        
        public string? ThumbnailPath { get; set; }

        public int? RepositoryId { get; set; }

        public Repository? Repository {get; set;} = null!;

    }


}