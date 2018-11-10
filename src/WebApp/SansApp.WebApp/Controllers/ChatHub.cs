using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace SansApp.WebApp.Controllers
{
    public class ChatHub : Hub
    {
        public static int ShhCount = 0;

        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message, new Guid().ToString());
        }

        public async Task SendShh()
        {
            ShhCount++;
            await Clients.All.SendAsync("ReceiveShh", ShhCount);
        }
    }
}
