namespace portfolio_backend.Dto
{
    public record DocInfoDto(int Id, string DocumentName, string Description, string Tags, string RepositoryName, string MarkdownPath);
}