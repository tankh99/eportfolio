const BASE_PROJECT_URL = "projects";

export interface Project {
    id: string,
    title: string,
    thumbnail?: string,
    slug: string,
    tagline?: string,
    description: any,
    images: string[],
    stack: string[],
    challenges?: any,
    achievements?: string,
    videoLink?: string,
    expanded?: boolean
}

const BASE_URL = "/work" 

const chatAppId = "chat-app"
export const chatApp: Project= {
    id: chatAppId,
    title: "Chat App",
    thumbnail: `${BASE_PROJECT_URL}/${chatAppId}/chat-app-chatpage-1.png`,
    slug: `${BASE_URL}/${chatAppId}`,
    description: {__html: `This was a simple project intended to facilitate my understanding of socket.io.`},
    images: [
        `${BASE_PROJECT_URL}/${chatAppId}/chat-app-homepage-1.png`,
        `${BASE_PROJECT_URL}/${chatAppId}/chat-app-chatpage-1.png`,
        `${BASE_PROJECT_URL}/${chatAppId}/chat-app-chatpage-2.png`
    ],
    stack: [
        "React",
        "Express",
        "Socket.io"
    ]
    
}

const fwdId = "fwd"
export const fwd: Project = {
    id: fwdId,
    thumbnail: `${BASE_PROJECT_URL}/${fwdId}/fwd.png`,
    images: [
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
    slug: `${BASE_URL}/${fwdId}`,
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
    videoLink: `https://www.youtube.com/watch?v=q1AopaQmv00`,
    thumbnail: `${BASE_PROJECT_URL}/${golunchId}/golunch.png`,
    images: [
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
    slug: `${BASE_URL}/${golunchId}`,
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
    stack: ["React", "Express", "MySQL", "web3.js", "Truffle"],
    challenges: {__html: `There was a lot of confusion during the initial phase of the project as the app that the client wanted pointed towards a native mobile app. Our group began learning React Native, but by the time the client clarified that he wanted a Progressive Web App, we had wasted 1-2 weeks. 
    <br/><br/>Additionally, there was the pressure of leading my groupmates and planning the to-do list of my groupmates. All of these were new experiences for me and I `}
}


const routineReminderId = "routine-reminder"
export const routineReminder: Project = {
    id: routineReminderId,
    images: ["projects/golunch/poster.jpg"],
    slug: `${BASE_URL}/${routineReminderId}`,
    title: "Routine Reminder",
    tagline: "Discipline yourself",
    description: {__html: ``},
    stack: ["Expo, React Native"],
}

const aivinId = "AIvin"
export const aivin: Project = {
    id: aivinId,
    videoLink: "https://youtu.be/s4evmpyF7Dg",
    thumbnail: `${BASE_PROJECT_URL}/${aivinId}/AIvin-logo.png`,
    images: [
        `${BASE_PROJECT_URL}/${aivinId}/aivin-welcome.jpg`,
        `${BASE_PROJECT_URL}/${aivinId}/aivin-chat-1.jpg`,
        `${BASE_PROJECT_URL}/${aivinId}/aivin-chat-2.jpg`,
        `${BASE_PROJECT_URL}/${aivinId}/aivin-call-1.jpg`,
        `${BASE_PROJECT_URL}/${aivinId}/aivin-call-2.jpg`,
        `${BASE_PROJECT_URL}/${aivinId}/aivin-call-accepted-2.jpg`,
        `${BASE_PROJECT_URL}/${aivinId}/AIvin-logo.png`,
    ],
    slug: `${BASE_URL}/${aivinId}`,
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
    thumbnail: `${BASE_PROJECT_URL}/${timezonifyId}/timezonify-web-thumbnail.png`,
    images: [
        `${BASE_PROJECT_URL}/${timezonifyId}/timezonify-converting.jpg`,
        `${BASE_PROJECT_URL}/${timezonifyId}/timezonify-converted.jpg`,
        `${BASE_PROJECT_URL}/${timezonifyId}/timezonify-convert-time.jpg`,
    ],
    slug: `${BASE_URL}/${timezonifyId}`,
    title: "Timezonify",
    tagline: "Converting timezones with a click",
    description: {__html: `
        Makes all timings local. Simply click on the Timezonify button after opening the extension popup and Voila. 
        You can also convert timezones using the popup window without having to Google it. Part of my motivation creating this was because I was quite sick of having to Google the relation of foreign timezones to my own and I thought it would be good to have a web extension automate that for me.
        
        <h3 class="section-header">Challenges</h3>
        The main challenges came from learning the web extension capabilities, how to pass and persist data, and how to find and convert timezones. My original idea was to have a one-click button which converted all timezones automatically into your own. So I started off using regex to match timezones, however, I came across very odd HTML formatting which made it unfeasible to have the one-click button. So I moved to selections, which auto-selects valid timezones when the user selects some text, and overlays a popup above which when clicked, would overlay the original timezone with your local timezone. 
        I had to work with Selection and Range API, and ensuring that the overlay would be positioned snugly on the original text. However, even this too proved unfeasible as sometimes the local timezone overlay would extend beyond the original text length and cover text after it. And unfortunately for me, this was discovered only after weeks of work and effort put into learning Selections and Ranges and implementing the idea
        <br/><br/>
        In the end, I decided that my original idea wasn't so bad after all: a button which when clicked would use regex to find and convert all valid timezones into local timezones. For those timezones which could not be caught during the initial regex search, there is a timezone converter built into the web extension itself, which allows the user to manually convert timezones into their own timezone.
    
        <br/><br/>
        <h3 class="section-header">Try it out yourself here</h3>
        <a target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/timezonify/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search">Firefox</a><br/>
        <a target="_blank" href="https://chrome.google.com/webstore/detail/timezonify/blaebhbhlcdbeiepibjlnpcphmcokjpo">Google</a>
    `},
    stack: ["Web Extension API", "Javascript", "Regex", "Selection & Range API"]
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
    slug: `${BASE_URL}/${mowbraycounterId}`,
    title: "Mowbray Counter",
    tagline: "Record your visits",
    description: {__html:`
        Mowbray Counter was created due to me wanting to count the number of times I visited Mowbray Camp. I used PyTelegramBotAPI and PostgreSQL to create the chatbot, and Heroku to deploy the chatbot. 
        I wanted my users to be able to click on a "Check In", and they would automatically fill in a contact tracing form using data already configured by them and record the visit in the database once done. I looked into Webcrawlers and Web Automation for this, but soon realised that this was not feasible as the ArmyDeclare page not only used WebForms, which made it quite impossible for me to send an API request to the WebForms, but also that they used Captcha, which mean I could not automate form-filling.
        After a period of tinkering, I settled for the more simplistic approach, and gave the users the link to ArmyDeclare when they first start the bot, and the option to record their visit afterwards.
        As I wanted this bot to be ready 24/7, I looked into deploying chatbots on Heroku using webhooks. As I was not very experience with hosting projects, I found it challenging to get the chatbot to get it in working condition. Whether it be due to incorrect Heroku configurations, errors in the code, the bot going inactive or whether the bot simply did not want to respond, it was a tedious, but necessary process. And when I finally managed to get my chatbot working, I was satisfied. It worked without errors and was available 24/7. 
        You can try the bot in Telegram: @mowbraycounter_bot
    `},
    stack: ["Python", "PyTelegramBotAPI", "PostgreSQL", "Heroku"]
}

const translinerWebsiteId = "transliner-website";
export const translinerWebsite: Project = {
    id: translinerWebsiteId,
    images: [
        `${BASE_PROJECT_URL}/${translinerWebsiteId}/translinerwebsite-home.png`,
    ],
    slug: `${BASE_URL}/${translinerWebsiteId}`,
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

// order of projects depends on ordering here
export default {
    golunch,
    fwd,
    timezonify,
    mowbraycounter,
    aivin,
    chatApp,
}