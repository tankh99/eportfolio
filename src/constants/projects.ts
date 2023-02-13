const BASE_PROJECT_URL = "projects";

export interface Project {
    id: string,
    title: string,
    thumbnail?: string,
    tagline?: string,
    description: any,
    images: string[],
    stack: string[],
    challenges?: any,
    achievements?: string,
    videoLink?: string,
    expanded?: boolean
    videoThumbnail?: string
}

const BASE_URL = "/work" 

// const chatAppId = "chat-app"
// export const chatApp: Project= {
//     id: chatAppId,
//     title: "Chat App",
//     thumbnail: `${BASE_PROJECT_URL}/${chatAppId}/chat-app-chatpage-1.png`,
//     slug: `${BASE_URL}/${chatAppId}`,
//     description: {__html: `This was a simple project intended to facilitate my understanding of socket.io.`},
//     images: [
//         `${BASE_PROJECT_URL}/${chatAppId}/chat-app-homepage-1.png`,
//         `${BASE_PROJECT_URL}/${chatAppId}/chat-app-chatpage-1.png`,
//         `${BASE_PROJECT_URL}/${chatAppId}/chat-app-chatpage-2.png`
//     ],
//     stack: [
//         "React",
//         "Express",
//         "Socket.io"
//     ]
    
// }

const ewtrId = "eye-want-to-rest"
export const ewtr: Project= {
    id: ewtrId,
    title: "Eye Want to Rest",
    thumbnail: `${BASE_PROJECT_URL}/${ewtrId}/app-feature-graphic.png`,
    description: {__html: `
        Eye Want to Rest helps your eyes work the way it's intended to. Eye Want to Rest gives your eyes the time to rest it needs from looking at our screens all day long and reduces occurrence of dry eyes

        <h3 class="section-header">Inspiration</h3>
        I built Eye Want to Rest initially as part of a submission for a hackathon. Because my work requires me to look at the screen throughout the entire day, I suffered from quite a bit of productivity loss when I experienced migraines or dry eyes from my eyes bring strained too much. 
        However, this project seemed small and simple, yet worthwhile and meaningful enough for me to expand upon it further after the hackathon and submit it onto the App Store and Play Store.
        While building upon the application, I used it on myself and found that I could work for longer hours and actually felt more refreshed as long as I had breaks in between my work hours. I felt empowered and motivated to see this application through to the end.

        <h3 class="section-header">Download it for free here</h3>
        <a target="_blank" href="https://apps.apple.com/us/app/eye-want-to-rest/id1619681661">App Store</a><br/>
        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.khanghou.eyewanttorest">Play Store</a>


    `},
    images: [
        `${BASE_PROJECT_URL}/${ewtrId}/app-logo-512x512.png`,
        `${BASE_PROJECT_URL}/${ewtrId}/ewtr-1.png`,
        `${BASE_PROJECT_URL}/${ewtrId}/ewtr-2.png`,
        `${BASE_PROJECT_URL}/${ewtrId}/ewtr-3.png`,
        `${BASE_PROJECT_URL}/${ewtrId}/ewtr-4.png`,
        `${BASE_PROJECT_URL}/${ewtrId}/ewtr-5.png`,
    ],
    stack: [
        "React Native",
        "Expo"
    ]
    
}

const wallGameId = "wall-game"
export const wallGame: Project = {
    id: wallGameId,
    title: "Wall Game",
    videoLink: "https://www.youtube.com/embed/MqJhxnR0Oxc",
    videoThumbnail: `${BASE_PROJECT_URL}/${wallGameId}/game.png`,
    thumbnail: `${BASE_PROJECT_URL}/${wallGameId}/game.png`,
    tagline: "Run fast, avoid walls",
    description: {__html: `Created as a side-project during the holiday to learn more about Three.js and 3D programming. 
        The premise of the game is meant to be simple, with simple player controls, objective and a basic
        score system. To ensure I had enough time to complete and polish the result, I constrained the 
        features to a basic game.
        <br><br>
        With each iteration, the game goes faster: the walls move faster, and so does the player. Keep up with the speed if you want to live
        <br><br>
        <a target="_blank" href="https://tankh99.github.io/react-threejs-wall-game/">Click here to try it out</a>
        `
    },
    images: [
        `${BASE_PROJECT_URL}/${wallGameId}/game.png`,
        `${BASE_PROJECT_URL}/${wallGameId}/gameover.png`
    ],
    stack: ["three.js", "React"]
}

const fwdId = "fwd"
export const fwd: Project = {
    id: fwdId,
    thumbnail: `${BASE_PROJECT_URL}/${fwdId}/fwd.png`,
    images: [
        `${BASE_PROJECT_URL}/${fwdId}/fwd.png`,
        `${BASE_PROJECT_URL}/${fwdId}/fwd-login.png`,
        `${BASE_PROJECT_URL}/${fwdId}/fwd-admindashboard.png`,
        `${BASE_PROJECT_URL}/${fwdId}/fwd-profile.png`,
        `${BASE_PROJECT_URL}/${fwdId}/fwd-usersgroup.png`,
        `${BASE_PROJECT_URL}/${fwdId}/fwd-usersgroup-add.png`,
        `${BASE_PROJECT_URL}/${fwdId}/fwd-usersgroup-added.png`,
        `${BASE_PROJECT_URL}/${fwdId}/fwd-forms-view.png`,
        `${BASE_PROJECT_URL}/${fwdId}/fwd-forms-add.png`,
        `${BASE_PROJECT_URL}/${fwdId}/fwd-forms-added.png`,
        `${BASE_PROJECT_URL}/${fwdId}/fwd-submit-forms.png`,
        `${BASE_PROJECT_URL}/${fwdId}/fwd-submitted-form.png`,
        
    ],
    title: "E-Form Designer",
    tagline: "Build Forms Easily",
    description: {__html: 
        `E-Form Designer is a web application built in Vue.js, Spring Boot and MongoDB that aims to streamline form creation and collection, much like FormSG. Companies can create their own 
        forms for internal use and collect the data with ease, no matter the type of data they wish to collect. 
        As form generation is dynamic, users can create forms using drag and drop components, which creates the corresponding entry inside the database. Data entered into the created form will henceforth be saved into that created document.
        This was a pair project that was created during my internship at CSIT (Centre for Strategic Infocomm Technologies). It was a pair project, so while I focused on wiring the backend with Spring Boot, my partner, Natalie designed the frontend using Vue.js. With GitHub's project management system, we balanced our workload using SCRUM framework.
        <br/><br/>
        The project was initially a 2-month project and had workflows included in its project specifications, however, was cut down so that we could help work on applications that CSIT were currently using. We consistently engaged in discussions improve on certain features and consulted our mentor on topics we were unsure of.`
    },
    stack: ["Vue.js", "Spring Boot", "MongoDB"]
    
}

const golunchId = "golunch"
export const golunch: Project = {
    id: golunchId,
    videoLink: `https://www.youtube.com/embed/q1AopaQmv00?rel=0`,
    videoThumbnail: `${BASE_PROJECT_URL}/${golunchId}/golunch-youtube-ss.png`,
    thumbnail: `${BASE_PROJECT_URL}/${golunchId}/golunch.png`,
    images: [
        `${BASE_PROJECT_URL}/${golunchId}/golunch.png`,
        `${BASE_PROJECT_URL}/${golunchId}/golunch-register.png`,
        `${BASE_PROJECT_URL}/${golunchId}/golunch-login.png`,
        `${BASE_PROJECT_URL}/${golunchId}/golunch-home.png`,
        `${BASE_PROJECT_URL}/${golunchId}/golunch-menu-shop.png`,
        `${BASE_PROJECT_URL}/${golunchId}/golunch-tracking.png`,
        `${BASE_PROJECT_URL}/${golunchId}/golunch-statistics.png`,
        `${BASE_PROJECT_URL}/${golunchId}/golunch-profile.png`,
        `${BASE_PROJECT_URL}/${golunchId}/golunch-restaurants.png`,
        `${BASE_PROJECT_URL}/${golunchId}/golunch-restaurants-info.png`,
        `${BASE_PROJECT_URL}/${golunchId}/golunch-restaurants-menu.png`,
        `${BASE_PROJECT_URL}/${golunchId}/golunch-restaurants-rewards.png`,
        `${BASE_PROJECT_URL}/${golunchId}/golunch-claim-reward.png`,
        `${BASE_PROJECT_URL}/${golunchId}/golunch-rewards.png`,
        `${BASE_PROJECT_URL}/${golunchId}/golunch-redeem-reward.png`,
        `${BASE_PROJECT_URL}/${golunchId}/golunch-manage-shops-details.png`,
        `${BASE_PROJECT_URL}/${golunchId}/golunch-manage-shops-rewards.png`,
        `${BASE_PROJECT_URL}/${golunchId}/golunch-manage-shops-qr.png`,
    ],
    title: "GoLunch",
    tagline: "Walk & Earn",
    description: {__html:
        `GoLunch is a Progressive Web App (PWA) built in React.js and Express.js. It tracks the user's walked distance and converts it into points that the user can use for discounts/offers at any of the client's restaurants.
        This was my final-year project, done in July 2019. It was a special project to me not only because it was my first actual client project, but because this was a first-ever joint-collaboration between Singapore Polytechnic and theFIRMA, a university based in Finland. The project’s client was Kupittaan Paviljonki, a Finland-based restaurant, and they wanted a web-based tracking app that customers could access anywhere and track the distance walked to and fro their restaurants to provide discounts for customers. <br/><br/>
        We used web3.js to store the distance tracked, and perform transactions whenever the user gains more points, or decides to redeem his points. 
        <h3 class="section-header">Challenges</h3>
        This was a challenging project to tackle due to the vague requirements and nature of project. The client requested for mobile features, but wished for the product to be a PWA. Additionally, due to the difference in timezones between Finland and Singapore, we rarely could find a suitable time for both parties to discuss. So even if we had questions, we had to wait them off until we could talk to the client, and this lead to wasted effort and time working on features that the client did not wish for.
        `
    },
    stack: ["React", "Express", "MySQL", "web3.js", "Truffle", "Ganache"],
    challenges: {__html: `There was a lot of confusion during the initial phase of the project as the app that the client wanted pointed towards a native mobile app. Our group began learning React Native, but by the time the client clarified that he wanted a Progressive Web App, we had wasted 1-2 weeks. 
    <br/><br/>Additionally, there was the pressure of leading my groupmates and planning the to-do list of my groupmates. All of these were new experiences for me and I `}
}


const aivinId = "AIvin"
export const aivin: Project = {
    id: aivinId,
    videoLink: "https://www.youtube.com/embed/s4evmpyF7Dg?rel=0",
    thumbnail: `${BASE_PROJECT_URL}/${aivinId}/AIvin-logo.png`,
    images: [
        `${BASE_PROJECT_URL}/${aivinId}/AIvin-logo.png`,
        `${BASE_PROJECT_URL}/${aivinId}/aivin-welcome.jpg`,
        `${BASE_PROJECT_URL}/${aivinId}/aivin-chat-1.jpg`,
        `${BASE_PROJECT_URL}/${aivinId}/aivin-chat-2.jpg`,
        `${BASE_PROJECT_URL}/${aivinId}/aivin-call-1.jpg`,
        `${BASE_PROJECT_URL}/${aivinId}/aivin-call-2.jpg`,
        `${BASE_PROJECT_URL}/${aivinId}/aivin-call-accepted-2.jpg`,
        `${BASE_PROJECT_URL}/${aivinId}/AIvin-logo.png`,
    ],
    title: "AIvin",
    tagline: "Your everyday chatbot",
    description: {__html: `
        <h3 class="section-header">Inspiration</h3>
        AIvin is a simple chatbot built with Expo created for the 48-hours SupriseHacks 2021 Competition. By conversing with AIvin, you get to hear a few random
        quips and quotes from. However, that didn't interest me enough, so I added a poke button, which would irritate him and cause him to spew out insults.
        I always had a love of planting easter eggs into seemingly normal programs, so this poke button would eventuall trigger a special scene which would 
        hijack the phone as a result of AIvin reaching peak irritation.

        <h3 class="section-header">Challenges</h3>
        The chat interface uses react-native-gifted-chat to send and receive messages to and from the user, and it was for the most part, simple.
        The difficult part, however, lay in implemting the Call Screen. I had to very closely imitate iPhone's actual call screen, positioning the elements just nicely and ensuring every colour had the right tinge.
        Not only that, I had to ensure that text-to-speech was timed properly and that AIvin would respond accordingly when the user tapped on the End Call button.
    `},
    stack: ["Expo", "React Native", "react-native-gifted-chat", "expo-av", "expo-speech"],
    expanded: true
}

const timezonifyId = "timezonify"
export const timezonify: Project = {
    id: timezonifyId,
    thumbnail: `${BASE_PROJECT_URL}/${timezonifyId}/timezonify-banner.png`,
    images: [
        `${BASE_PROJECT_URL}/${timezonifyId}/timezonify-banner.png`,
        `${BASE_PROJECT_URL}/${timezonifyId}/timezonify-us-sg.jpeg`,
        `${BASE_PROJECT_URL}/${timezonifyId}/timezonify-canada-us.jpeg`,
        `${BASE_PROJECT_URL}/${timezonifyId}/timezonify-timezone-diff.jpeg`,
    ],
    title: "Timezonify",
    tagline: "Converting timezones with a click",
    description: {__html: `
        Makes all timings local. Simply search the timezones you want to convert into or from and type in the time to convert. It shows you the converted time as well as the converted date. 

        <h3 class="section-header">Motivation</h3>
        I created Timezonify because I often participated in virtual hackathons in 2021, and there were a lot of different timezones which I had to consistently convert. 
        
        Timezonify was created as a means to make the process of frequent timezone conversion more convenient since you wouldn't need to Google it each and every time.
        
        I decided on a web extension because it would be good exposure for me to publish something too

        <h3 class="section-header">Challenges</h3>
        At frist, I struggled with learning the web extension capabilities, of which, there wasn't too much help on forum for since extension development is relatively obscure. I relied on Firefox tutorials and Github code examples mainly to build what I wanted. 
        
        The initial idea for the extension had the user press a 'Timezonify' button where it would then automatically converted all foreign timezones into their local counterparts, according to the client's current timezone. 
        
        However, this proved to be inefficient and ineffective in certain edge ccases due to HTML parsing being quite unreliable given the way some websites format their HTML. 

        Then I moved on to user selection and highlighting. The user would highlight the timezone he or she wanted to convert, and if a valid timezone was located within the highlighted text, a 'Timezonify' popup would appear boave the highlighted text. click on that would overlay the original text with the converted time and timezone.

        Once again, however, this process was much too tedious and cumbersome than I originally envisioned the extension to be.

        Eventually, I relied the simple functionality of choosing countries and converting between timezones accordingly.

        This proved to be a much simpler and effective method that works for all cases. It's currently published on both the Chrome Extension Store and Firefox Extension Hub. 

        <br/><br/>
        <h3 class="section-header">Try it out yourself here</h3>
        <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/timezonify/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search">Firefox</a><br/>
        <a target="_blank" href="https://chrome.google.com/webstore/detail/timezonify/blaebhbhlcdbeiepibjlnpcphmcokjpo">Google</a>
    `},
    stack: ["Web Extension API", "Javascript", "Timezone & Date Parsing"]
}

const mowbraycounterId = "mowbray-counter"
export const mowbraycounter: Project = {
    id: mowbraycounterId,
    images: [
        `${BASE_PROJECT_URL}/${mowbraycounterId}/mowbraycounter-start.png`,
        `${BASE_PROJECT_URL}/${mowbraycounterId}/mowbraycounter-record-visit.png`,
        `${BASE_PROJECT_URL}/${mowbraycounterId}/mowbraycounter-check-visits.png`,
        `${BASE_PROJECT_URL}/${mowbraycounterId}/mowbraycounter-detailed-visits.png`,

    ],
    title: "Mowbray Counter",
    tagline: "Record your visits",
    description: {__html:`
        Mowbray Counter was created due to me wanting to count the number of times I visited Mowbray Camp. I used PyTelegramBotAPI and PostgreSQL to create the chatbot, and Heroku to deploy the chatbot. 
        I wanted my users to be able to click on a "Check In", and they would automatically fill in a contact tracing form using data already configured by them and record the visit in the database once done. I looked into Webcrawlers and Web Automation for this, but soon realised that this was not feasible as the ArmyDeclare page not only used WebForms, which made it quite impossible for me to send an API request to the WebForms, but also that they used Captcha, which mean I could not automate form-filling.
        After a period of tinkering, I settled for the more simplistic approach, and gave the users the link to ArmyDeclare when they first start the bot, and the option to record their visit afterwards.
        As I wanted this bot to be ready 24/7, I looked into deploying chatbots on Heroku using webhooks. As I was not very experience with hosting projects, I found it challenging to get the chatbot to get it in working condition. Whether it be due to incorrect Heroku configurations, errors in the code, the bot going inactive or whether the bot simply did not want to respond, it was a tedious, but necessary process. And when I finally managed to get my chatbot working, I was satisfied. It worked without errors and was available 24/7. 
        You can try the bot yourself in Telegram: @mowbraycounter_bot
    `},
    stack: ["Python", "PyTelegramBotAPI", "PostgreSQL", "Heroku"]
}

const translinerWebsiteId = "transliner-website";
export const translinerWebsite: Project = {
    id: translinerWebsiteId,
    images: [
        `${BASE_PROJECT_URL}/${translinerWebsiteId}/translinerwebsite-home.png`,
    ],
    title: "Transliner Website",
    description: {__html: `
        This website was created for Transliner Group, a company where I worked for a short while before I enlisted into the army.
        It was created with Angular and was meant to replace the old website, which was slow and limited in its capabilities. Additionally,
        the website was meant to be connected to the company's backend, which I also helped upgrade from WebForms to ASP.NET Web APIs and 
        using Bootstrap and jQuery.   
    `
    },
    stack:["Angular", "ASP.NET", "Web API", "HTML", "Bootstrap", "jQuery"]
}

const routineReminderId = "routine-reminder";
export const routineReminder: Project = {
    id: routineReminderId,
    thumbnail: `${BASE_PROJECT_URL}/${routineReminderId}/routine-reminder-thumbnail.png`,
    tagline: "Discipline your mind",
    images: [
        `${BASE_PROJECT_URL}/${routineReminderId}/routine-reminder-thumbnail.png`,
        `${BASE_PROJECT_URL}/${routineReminderId}/routine-reminder-routines.jpg`,
        `${BASE_PROJECT_URL}/${routineReminderId}/routine-reminder-start-routine.jpg`,
        `${BASE_PROJECT_URL}/${routineReminderId}/routine-reminder-add-routine.jpg`,
        `${BASE_PROJECT_URL}/${routineReminderId}/routine-reminder-add-reminder.jpg`,
    ],
    title: "Routine Reminder",
    description: {__html: `
        Routine Reminder is a cross-platform mobile application which allows users to create routines, in which
        the users can "start doing". The app will track the time passed and notify the user when the task is done. 
        Users are able to add checkpoints to each routine, which allows for dynamic routines to be created. 
    `},
    stack: ["React Native", "Expo"]
}
 
// order of projects depends on ordering here
export default {
    wallGame,
    ewtr,
    golunch,
    fwd,
    timezonify,
    aivin,
    routineReminder,
    mowbraycounter
}