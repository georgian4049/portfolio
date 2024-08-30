import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.jpeg"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Ayush",
    lastName: "Shekhar",
    initials: "Mr.", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by tech, sports, nature and travelling'
        },
        {
            emoji: '🌎',
            text: 'based in Germany'
        },
        {
            emoji: "💼",
            text: "Research Assistant @ RPTU"
        },
        {
            emoji: "📧",
            text: "shekhar@rptu.de"
        }
     
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        // {
        //     link: "https://instagram.com",
        //     icon: 'fa fa-instagram',
        //     label: 'instagram'
        // },
        {
            link: "https://github.com/georgian4049",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/georgianayush/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "mailto:shekhar@rptu.de",
            icon: "fa fa-envelope",
            label: 'Mail'
        },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Ayush, currently pursuing Masters in Informatik (Computer Science) at RPTU Kaiserslautern-Landau. Apart from studies and technology, I love sports (Tennis, Fencing, Inline skating etc), hiking and travelling!",
     skills:
        {
            proficientWith: ['Python', 'MySql', 'Javascript/Typescript', 'React', 'FastAPI','git', 'Pytorch', 'GenAI', 'LLM', 'VAE', 'Transformers', 'CNN'],
            exposedTo: ['Jenkins', 'Docker', 'MongoDB']
        }
    ,
    hobbies: [
        {
            label: 'Tennis',
            emoji: '🎾'
        },
        {
            label: 'Hiking',
            emoji: '🥾'
        },
        {
            label: 'Travelling',
            emoji: '🧭'
        },
        {
            label: 'Fencing',
            emoji: '🤺'
        },
        {
            label: 'Inline Skating',
            emoji: '🛼⛸️'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Document Data extractor",
            live: "https://ui-doc-ext.onrender.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source_ui: "https://github.com/georgian4049/ui_doc_ext",
            source_api: "https://github.com/georgian4049/api_doc_ext", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "GPT Based ChatBot",
            source: "https://github.com/georgian4049/LLM",
            image: mock2
        },
        {
            title: "Dice Game",
            live: "https://gl-dice-game.netlify.app",
            source: "https://gl-dice-game.netlify.app",
            image: mock3
        },
        {
            title: "MasterCSConcepts",
            // live: "https://paytonpierce.dev",
            source_ui: "https://github.com/georgian4049/ui_doc_ext",
            source_api: "https://github.com/georgian4049/api_doc_ext",
            image: mock4
        },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}