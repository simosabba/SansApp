using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using SansApp.WebApp.Generator;

namespace SansApp.WebApp.Controllers
{
    public class ChatHub : Hub
    {
        public static bool Initialized = false;
        public static int ShhCount = 0;
        private SentencesGenerator _generator = new SentencesGenerator();

        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", 
                new Message
                {
                    User = user,
                    Sentence = message,
                }, Guid.NewGuid().ToString());
        }

        public override async Task OnConnectedAsync()
        {
            await Clients.All.SendAsync("ReceiveShh", ShhCount);

            if (Initialized)
                return;

            Initialized = true;

            while (true)
            {
                Thread.Sleep(10000);
                await SendAutomaticMessage();
            }
        }

        public async Task SendShh()
        {
            ShhCount++;
            await Clients.All.SendAsync("ReceiveShh", ShhCount);
        }

        private async Task SendAutomaticMessage()
        {
            var message = _generator.GenerateMessage(NoiseHub.RealValue);

            await Clients.All.SendAsync("ReceiveMessage", message, Guid.NewGuid().ToString());
        }
    }
}
