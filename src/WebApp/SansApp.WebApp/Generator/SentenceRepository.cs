using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SansApp.WebApp.Generator
{
    public static class SentenceRepository
    {
        public static readonly List<Message> HappyMessages = new List<Message>
        {
            new Message
            {
                AvatarIcon = "/app/assets/img/avatars/osho.png",
                User = "osho",
                Sentence = "In a better society, made of understanding people, nobody will change you!!"
            },
            new Message
            {
                AvatarIcon = "/app/assets/img/avatars/simo.png",
                User = "simo",
                Sentence = "At last I can sleep and tomorrow I'll perform great"
            },
            new Message
            {
                AvatarIcon = "/app/assets/img/avatars/leo.png",
                User = "leo",
                Sentence = "Finally the district I love is respected"
            },
            new Message
            {
                AvatarIcon = "/app/assets/img/avatars/ludo.png",
                User = "ludo",
                Sentence = "Now my baby can sleep. Thank you!!"
            },
            new Message
            {
                AvatarIcon = "/app/assets/img/avatars/gio.png",
                User = "gio",
                Sentence = "Thank you!! Your help is precious for helping us and the bars"
            },
        };

        public static readonly List<Message> MediumMessages = new List<Message>
        {
            new Message
            {
                AvatarIcon = "/app/assets/img/avatars/osho.png",
                User = "osho",
                Sentence = "Just to know, how much more you got?!"
            },
            //new Message
            //{
            //    AvatarIcon = "/app/assets/img/avatars/leo.png",
            //    User = "leo",
            //    Sentence = "aaa"
            //},
            //new Message
            //{
            //    AvatarIcon = "/app/assets/img/avatars/ludo.png",
            //    User = "ludo",
            //    Sentence = ""
            //},
        };

        public static readonly List<Message> HungryMessages = new List<Message>
        {
            new Message
            {
                AvatarIcon = "/app/assets/img/avatars/osho.png",
                User = "osho",
                Sentence = "It is time you stop searching something outside, everything that can make you happy is inside of you. Search it better and go home!"
            },
            new Message
            {
                AvatarIcon = "/app/assets/img/avatars/gio.png",
                User = "gio",
                Sentence = "Don't you have anything to do tomorrow? I'll work early in the morning"
            },
            new Message
            {
                AvatarIcon = "/app/assets/img/avatars/osho.png",
                User = "osho",
                Sentence = "People is insane"
            },
            //new Message
            //{
            //    AvatarIcon = "/app/assets/img/avatars/simo.png",
            //    User = "simo",
            //    Sentence = "aaa"
            //},
            //new Message
            //{
            //    AvatarIcon = "/app/assets/img/avatars/leo.png",
            //    User = "leo",
            //    Sentence = "aaa"
            //},
            new Message
            {
                AvatarIcon = "/app/assets/img/avatars/ludo.png",
                User = "ludo",
                Sentence = "Please don't make me move out, there's too much noise!"
            },
        };
    }
}
