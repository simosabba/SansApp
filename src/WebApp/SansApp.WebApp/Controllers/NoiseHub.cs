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
        private static object LockObj = new object();

        public static bool IsStarted = false;
        public static double Value = 60;
        public static double RealValue = 60;
        public static List<double> HistoricalValues = new List<double>();

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
            double value;
            double avg;

            lock (LockObj)
            {
                //fake noise
                var rand = new Random().Next(10) * 0.1;
                RealValue = Value - 0.5 + rand;

                //max retention
                HistoricalValues.Add(RealValue);
                if (HistoricalValues.Count > 20)
                    HistoricalValues = HistoricalValues.Skip(HistoricalValues.Count - 20).ToList();

                value = RealValue;
                avg = HistoricalValues.Average();
            }

            await Clients.Caller.SendAsync("ReceiveNewSample", value, avg);
        }

        private async Task SendValue()
        {
            await Clients.All.SendAsync("ReceiveNewSample", Value);
        }
    }
}
