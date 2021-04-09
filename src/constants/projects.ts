const BASE_PROJECT_URL = "projects";

export interface Project {
    id: string,
    title: string,
    thumbnail?: string,
    slug: string,
    tagline?: string,
    description: any,
    images?: string[],
    stack: string[],
    challenges?: any,
    achievements?: string
}

const BASE_URL = "/work" 

const chatAppId = "chat-app"
export const chatApp: Project= {
    id: chatAppId,
    title: "Chat App",
    thumbnail: `${BASE_PROJECT_URL}/${chatAppId}/chat-app-homepage-1.png`,
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
    thumbnail: `${BASE_PROJECT_URL}/${fwdId}/fwd-forms-add.png`,
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
    title: "Form Designer",
    tagline: "Build Forms easily",
    description: {__html: 
        `Form Designer was a pair project that was created during my internship at CSIT (Centre for Strategic Infocomm Technologies). It was a pair project, so while I focused on wiring the backend with Spring Boot, my partner, Natalie designed the frontend using Vue.js. With GitHub's project management system, we balanced our workload using SCRUM framework.
        <br/><br/>
        The project was initially a 2-month project and had workflows included in its project specifications, however, was cut down so that we could help work on applications that CSIT were currently using. We consistently engaged in discussions improve on certain features and consulted our mentor on topics we were unsure of.`
    },
    stack: ["Vue.js", "Spring Boot", "MongoDB"]
    
}

const golunchId = "golunch"
export const golunch: Project = {
    id: golunchId,
    thumbnail: `${BASE_PROJECT_URL}/${golunchId}/golunch-tracking.png`,
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
        `GoLunch was my final-year project, done in July 2019. It was a special project not only because it was my first client project, but because this was a first-ever joint-collaboration between Singapore Polytechnic and theFIRMA, a university based in Finland. The project’s client was Kupittaan Paviljonki, a Finland-based restaurant, and they wanted a web-based tracking app that customers could access anywhere and track the distance walked to and fro their restaurants to provide discounts for customers.`
    },
    stack: ["React", "Express", "MySQL", "web3.js (Blockchain)"],
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
    stack: ["React Native"],
    challenges: {__html: `There was a lot of confusion during the initial phase of the project as the app that the client wanted pointed towards a native mobile app. Our group began learning React Native, but by the time the client clarified that he wanted a Progressive Web App, we had wasted 1-2 weeks. 
    <br/><br/>Additionally, there was the pressure of leading my groupmates and planning the to-do list of my groupmates. All of these were new experiences for me and I `}
}

// order of projects depends on ordering here
export default {
    chatApp,
    fwd,
    golunch
}