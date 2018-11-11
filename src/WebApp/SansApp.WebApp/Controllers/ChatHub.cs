using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using SansApp.WebApp.Generator;

namespace SansApp.WebApp.Controllers
{
    public class ChatHub : Hub
    {
        public static int ShhCount = 0;
        private SentencesGenerator _generator = new SentencesGenerator();

        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", 
                new Message
                {
                    User = user,
                    Sentence = message,
                }, new Guid().ToString());
        }

        public override async Task OnConnectedAsync()
        {
            await Clients.All.SendAsync("ReceiveShh", ShhCount);
        }

        public async Task SendShh()
        {
            ShhCount++;
            await Clients.All.SendAsync("ReceiveShh", ShhCount);
        }

        public async Task SendAutomaticMessage()
        {
            var message = _generator.GenerateMessage(NoiseHub.RealValue);

            await Clients.All.SendAsync("ReceiveMessage", message, new Guid().ToString());
        }
    }
}
