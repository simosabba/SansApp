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
                Sentence = "In una società migliore, formata da persone comprensive, nessuno potrà cambiarti!!"
            },
            new Message
            {
                AvatarIcon = "/app/assets/img/avatars/simo.png",
                User = "simo",
                Sentence = "Finalmente si può dormire e domani lavoererò al 100%"
            },
            new Message
            {
                AvatarIcon = "/app/assets/img/avatars/leo.png",
                User = "leo",
                Sentence = "Finalmente il quartiere che amo è rispettato"
            },
            new Message
            {
                AvatarIcon = "/app/assets/img/avatars/ludo.png",
                User = "ludo",
                Sentence = "Ora il mio bambino riesce a dormire. Grazie per il vostro rispetto"
            },
            new Message
            {
                AvatarIcon = "/app/assets/img/avatars/gio.png",
                User = "gio",
                Sentence = "Grazie!! Finalmente!! Non immaginate il valore del vostro sforzo, aiutate noi e i bar"
            },
        };

        public static readonly List<Message> MediumMessages = new List<Message>
        {
            new Message
            {
                AvatarIcon = "/app/assets/img/avatars/osho.png",
                User = "osho",
                Sentence = "Giusto per regolamme, per quanto ce ne avete ancora?!"
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
                Sentence = "è tempo che tu smetta di cercare fuori di te, tutto quello che a tuo avviso potrebbe renderti felice. Guarda in te, torna a casa!"
            },
            new Message
            {
                AvatarIcon = "/app/assets/img/avatars/gio.png",
                User = "gio",
                Sentence = "Voi domani non avete da fare nulla? Io domani lavoro"
            },
            new Message
            {
                AvatarIcon = "/app/assets/img/avatars/osho.png",
                User = "osho",
                Sentence = "La gente non sta bene"
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
                Sentence = "Non costringetemi a trasfermi, c'è trooooppo rumore"
            },
        };
    }
}
