module.exports = {
  pathPrefix: `/public`,
  siteMetadata: {
    posts: [
      {
        title: 'A comparison of drafting legal documents vs coding',
        path: '/A-comparison-of-drafting-legal-documents-vs-coding'
      },
      {
        path: '/Adventures-with-CouchDB-Nano-and-Pjax',
        title: 'Adventures with CouchDB, Nano and Pjax'
      },
      {
        path: '/Automated-publishing-on-a-VPS-using-Draftin-webhooks-and-Node.js',
        title: 'Automated publishing on a VPS using Drafting webhooks and Node.js'
      },
      {
        path: '/Digital-Ocean-VPS-Nginx-Express-apps',
        title: 'Digital Ocean VPS, Nginx and Express apps'
      },
      {
        path: '/Image-uploads-and-resizing-with-Transloadit',
        title: 'Image uploads and resizing with Transloadit'
      },
      {
        path: '/Learnings-from-building-a-basic-Angular.js-app',
        title: 'Learnings from building a basic Angular.js app'
      },
      {
        path: '/Moving-towards-object-oriented-JavaScript',
        title: 'Moving towards object oriented JavaScript'
      },
      {
        path: '/Online-terms-better-with-notice',
        title: 'Online terms - better with notice'
      },
      {
        path: '/Refactoring-from-jQuery-to-Angular.js',
        title: 'Refactoring from jQuery to Angular'
      },
      {
        path: '/Setting-up-HTTPS-with-Express-Apps-using-Nginx-and-Digital-Ocean',
        title: 'Setting up HTTPS with Express Apps using Nginx and Digital Ocean'
      },
      {
        path: 'Steps-to-improve-Unity-Ubuntu-on-Chromebook-Crouton-for-developer-purposes',
        title: 'Steps to improve Unity Ubuntu on Chromebook Crouton for developer purposes'
      },
      {
        path: '/The-journey-from-curious-outsider-to-beginner',
        title: 'The Journey from curious outside to beginner'
      },
      {
        path: '/The-myth-of-mandatory-trade-mark-enforcement',
        title: 'The myth of mandatory trade mark enforcement'
      }
    ],
    projects: [
      {
        projectName: 'Attest',
        description: 'Open source contract management platform. Like an excel spreadsheet with less functionality but marginally prettier.',
        imageUrl: '/attest.png',
        sourceUrl: 'https://github.com/grabbeh/attest',
        siteUrl: 'https://tryattest.com',
        longDescription: "Contracts are like a flock of sheep. On occasion they can exude a pungent smell. Oh, and they can benefit from someone keeping an eye on them! Many people historically use Excel spreadsheets. However it's 2018 and organisations should be introducing additional points of failure into their organisation. Consequently I decided to create Attest, an open source contract management platform. Oh, and if you want, you can self-host it and build on top of it to your heart's delight because it's licensed under Apache 2.0.",
        tools: [
          {
            tool: 'Next.js',
            id: 0
          },
          {
            tool: 'React',
            id: 1
          },
          {
            tool: 'Node.js',
            id: 2
          },
          {
            tool: 'MongoDB',
            id: 3
          },
          {
            tool: 'GraphQL',
            id: 4
          }
        ],
        id: 0
      },
      {
        projectName: 'OTTGNaaS',
        description: 'Turn online terms into graphic novels at the flick of a switch (results may vary!)',
        imageUrl: '/demo.jpg',
        sourceUrl: 'https://github.com/grabbeh/OTTGNaaS',
        longDescription: "Consumers don't read terms and conditions but some enjoy graphic novels. This project sought to make terms of use palatable to a broader audience by shoehorning them into random graphic novels. The success of the project is largely dependent on legislators obliging companies to make terms of use available in comic form. Lobbying efforts to this end are continuing.",
        tools: [
          {
            tool: 'Google Cloud Vision API',
            id: 0
          },
          {
            tool: 'Node.js',
            id: 1
          },
          {
            tool: 'React',
            id: 2
          }
        ],
        id: 1
      },
      {
        projectName: 'Case law emoji bot',
        description: 'Emoji but not as you know it - possibly the future of fostering youth engagement with the law',
        imageUrl: '/emoji.jpg',
        sourceUrl: 'https://github.com/grabbeh/case-law-emoji-bot',
        siteUrl: 'https://twitter.com/caselawemoji',
        longDescription: 'To large swathes of youth today, the law is a distant mysterious prospect. Emojis on the other hand are almost over-used popping up everywhere. Conveying case law through emojis will lose nothing of the intricate complexities of the law (although it is strongly recommended that you do not rely on emoji summaries in a court of law), but will open up the law to a whole new audience.',
        tools: [
          {
            tool: 'Twitter API',
            id: 0
          },
          {
            tool: 'IBM Watson',
            id: 1
          },
          {
            tool: 'Dango',
            id: 2
          },
          {
            tool: 'Node.js',
            id: 3
          }
        ],
        id: 2
      },
      {
        projectName: 'Fennec',
        description: 'Trade mark portfolio analysis and management',
        imageUrl: '/fennec.jpg',
        sourceUrl: 'https://github.com/grabbeh/fennec',
        longDescription: 'Managing a global trade mark portfolio is one of the every day tasks that people just have to do. Kind of like cleaning your teeth. This app takes the contents of an Excel spreadsheet, sprinkles them with magic, and spits out a dashboard to help you keep on top of things.',
        tools: [
          {
            tool: 'Angular',
            id: 0
          },
          {
            tool: 'Node.js',
            id: 1
          },
          {
            tool: 'MongoDB',
            id: 2
          }
        ],
        id: 3
      },
      {
        projectName: 'Instok',
        description: 'Send reminders to customers when stock is back in',
        imageUrl: '/instok.jpg',
        sourceUrl: 'https://github.com/grabbeh/instok',
        longDescription: 'When I went to a shop they told me something was out of stock. Neurons fired in my head. The idea for Instok was born! People can buy credits using Stripe, set reminders, and trigger SMSs to delighted customers when stock is back in. We may never know where the name came from.',
        tools: [
          {
            tool: 'Stripe API',
            id: 0
          },
          {
            tool: 'Twilio API',
            id: 1
          },
          {
            tool: 'Angular',
            id: 2
          },
          {
            tool: 'Node.js',
            id: 3
          }
        ],
        id: 4
      },
      {
        projectName: 'Geophoto',
        description: "Satisfy your virtual wanderlust by looking at photos from places it'd be just dandy to go to",
        imageUrl: '/geophoto.jpg',
        sourceUrl: 'https://github.com/grabbeh/geophoto',
        longDescription: "I think it's fair to say that Flickr provides identical functionality, but it gets lost in a swamp of other equally enticing functionality. Geophoto takes the maxim 'Do one thing and do it well' and puts it into overdrive. Find photos of places you'd like to go or definitely wouldn't want to go to but want to confirm your suspicions about just how turgid a place is before accidentally stumbling on a fixer-upper with your name written all over it.",
        tools: [
          {
            tool: 'Flickr API',
            id: 0
          },
          {
            tool: 'Angular',
            id: 1
          },
          {
            tool: 'Node.js',
            id: 2
          }
        ],
        id: 5
      },
      {
        projectName: 'Mapopho',
        description: 'Finally, a way to find out which part of the world has the best photos of subject matter X',
        imageUrl: '/mapopho.jpg',
        sourceUrl: 'https://github.com/grabbeh/mapopho',
        longDescription: 'Flying directly in the face of a Star Trek-esque utopia or perhaps promoting it, this app lets people finally determine the age-old question of which part of the world has the best photos of cats or whatever photo subjects you want (but definitely cats). With that thorny issue resolved people can focus on building bridges not arguing over the relative merits of the cat populations of Honduras and Laos.',
        tools: [
          {
            tool: 'Flickr API',
            id: 0
          },
          {
            tool: 'Angular',
            id: 1
          },
          {
            tool: 'Node.js',
            id: 2
          }
        ],
        id: 6
      },
      {
        projectName: 'Routebop',
        description: "Shares routes with people you do or don't love or feel any kind of emotion for",
        imageUrl: '/routebop.jpg',
        sourceUrl: 'https://github.com/grabbeh/routebop',
        longDescription: "Bopping is great but it reaches its peak with it's associated with routes. Routes that take you to places of joy, places of utter mediocrity or places where life may be imperilled (all liability fully disclaimed).",
        tools: [
          {
            tool: 'jQuery',
            id: 0
          },
          {
            tool: 'Node.js',
            id: 1
          },
          {
            tool: 'MongoDB',
            id: 2
          }
        ],
        id: 7
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/markdown`,
        name: 'markdown-pages'
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`
  ]
}
