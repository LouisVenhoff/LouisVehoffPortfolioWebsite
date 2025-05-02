using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MyApp.Namespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class WebhookController : ControllerBase
    {
    
        [HttpPost]
        public async Task<ActionResult<string>> PostWebhook(){
            return "Hello World!";
        }
    }
}
