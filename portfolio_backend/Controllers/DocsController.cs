using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ValueGeneration.Internal;
using portfolio_backend.Data;
using portfolio_backend.Dto;
using portfolio_backend.Lib;
using portfolio_backend.Models;

namespace portfolio_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DocsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Docs
        [HttpGet]
        public async Task<ActionResult<List<DocInfoDto>>> GetDocs()
        {
            List<Doc> docList = await _context.Docs.ToListAsync();
            List<DocInfoDto> docDtoList = [];

            foreach (Doc document in docList)
            {
                docDtoList.Add(new DocInfoDto(document.Id, _context.Repositorys.Find(document.RepositoryId)?.Name ?? "", document.MarkdownPath));
            }

            return docDtoList;
        }

        [HttpGet("download/markdown/{id}")]
        public async Task<ActionResult> DownloadMarkdown(int id)
        {
            var doc = await _context.Docs.FindAsync(id);

            if (doc == null)
            {
                return NotFound();
            }

            return File(DocLoader.LoadMarkdown(doc), "application/markdown", "markdown.md");
        }

        [HttpGet("download/thumbnail/{id}")]

        public async Task<ActionResult> DownloadThumbnail(int id)
        {
            var doc = await _context.Docs.FindAsync(id);

            if (doc == null)
            {
                return NotFound();
            }

            return File(DocLoader.LoadThumbnail(doc), ImageContentType(doc.ThumbnailPath!));
        }

        private bool DocExists(int id)
        {
            return _context.Docs.Any(e => e.Id == id);
        }

        private string ImageContentType(string path)
        {
            string ext = Path.GetExtension(path);

            return $"image/${ext.Remove(0, 1)}";
        }
    }
}
