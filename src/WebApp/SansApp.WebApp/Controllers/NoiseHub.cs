using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SansApp.WebApp.Controllers
{
    public class NoiseHub : Hub
    {
        public async Task NewSample(DateTime time, double dbValue)
        {
            await Clients.All.SendAsync("ReceiveNewSample", time, DateTime.Now);
        }
    }
}
