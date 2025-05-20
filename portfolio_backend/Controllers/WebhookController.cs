using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using portfolio_backend.Services;

namespace portfolio_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WebhookController : ControllerBase
    {
    
        private readonly RepoUpdateService updateService;

        public WebhookController(RepoUpdateService updateService){
            this.updateService = updateService;
        }

        [HttpPost]
        public ActionResult<bool> PostWebhook()
        {

            this.updateService.StartUpdate();

            return Ok();
        }
    }
}
