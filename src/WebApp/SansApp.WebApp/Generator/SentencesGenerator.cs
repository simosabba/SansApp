using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SansApp.WebApp.Generator
{
    public class SentencesGenerator
    {
        public Message GenerateMessage(double dBValue)
        {
            if (dBValue < 55)
                return GenerateHappyMessage();

            if (dBValue < 65)
                return GenerateMediumMessage();

            return GenerateHungryMessage();
        }

        public Message GenerateHappyMessage()
        {
            return PickRandomMessage(SentenceRepository.HappyMessages);
        }

        public Message GenerateMediumMessage()
        {
            return PickRandomMessage(SentenceRepository.MediumMessages);
        }

        public Message GenerateHungryMessage()
        {
            return PickRandomMessage(SentenceRepository.HungryMessages);
        }

        private Message PickRandomMessage(IEnumerable<Message> messages)
        {
            var r = new Random().Next(messages.Count());
            return messages.ToArray()[r];
        }
    }
    
    public class Message
    {
        public string AvatarIcon { get; set; }
        public string User { get; set; }
        public string Sentence { get; set; }
    }
}
