using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SansApp.WebApp.Controllers
{
    public class NoiseHub : Hub
    {
        public static double Value = 50;

        public NoiseHub()
        {
        }

        public override async Task OnConnectedAsync()
        {
            while (true)
            {
                Thread.Sleep(1000);
                await Clients.Caller.SendAsync("ReceiveNewSample", Value);
            }
        }

        public async Task SetValue(double dbValue)
        {
            Value = dbValue;
            await Clients.All.SendAsync("ValueChanged", Value);
        }

        private async Task SendValue()
        {
            await Clients.All.SendAsync("ReceiveNewSample", Value);
        }
    }
}
