using portfolio_backend.Models;


namespace portfolio_backend.Lib
{
    public static class DocLoader
    {
        public static byte[] LoadMarkdown(Doc doc)
        {
            if (!File.Exists(doc.MarkdownPath)) throw new FileNotFoundException();

            return File.ReadAllBytes(doc.MarkdownPath);

        }
    }
}