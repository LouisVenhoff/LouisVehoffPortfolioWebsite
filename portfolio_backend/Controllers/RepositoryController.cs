using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using portfolio_backend.Data;
using portfolio_backend.Models;

namespace portfolio_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RepositoryController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RepositoryController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Repository
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Repository>>> GetRepositorys()
        {
            return await _context.Repositorys.ToListAsync();
        }

        // GET: api/Repository/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Repository>> GetRepository(int id)
        {
            var repository = await _context.Repositorys.FindAsync(id);

            if (repository == null)
            {
                return NotFound();
            }

            return repository;
        }

        // POST: api/Repository
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Repository>> PostRepository(Repository repository)
        {
            _context.Repositorys.Add(repository);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRepository", new { id = repository.Id }, repository);
        }

        private bool RepositoryExists(int id)
        {
            return _context.Repositorys.Any(e => e.Id == id);
        }
    }
}
