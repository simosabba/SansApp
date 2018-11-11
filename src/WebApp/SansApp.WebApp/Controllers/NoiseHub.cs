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
        public static bool IsStarted = false;
        public static double Value = 50;

        public NoiseHub()
        {
        }

        //public override async Task OnConnectedAsync()
        //{
        //    if (IsStarted)
        //        return;

        //    IsStarted = true;
        //    while (true)
        //    {
        //        Thread.Sleep(1000);
        //        var rand = new Random().Next(20) * 0.1;
        //        var n = Value - 1.0 + rand;
        //        await Clients.All.SendAsync("ReceiveNewSample", n);
        //    }
        //}

        public async Task SetValue(double dbValue)
        {
            Value = dbValue;
            await Clients.All.SendAsync("ValueChanged", Value);
        }

        public async Task GetValue()
        {
            var rand = new Random().Next(20) * 0.1;
            var n = Value - 1.0 + rand;
            await Clients.Caller.SendAsync("ReceiveNewSample", n);
        }

        private async Task SendValue()
        {
            await Clients.All.SendAsync("ReceiveNewSample", Value);
        }
    }
}
