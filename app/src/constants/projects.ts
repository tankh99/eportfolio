
export interface Project {
    title: string,
    tagline: string,
    description: string,
    source: string,
    slug: string,
    stack: string[],
    challenges?: any,
    achievements?: string
}

export const golunch: Project = {
    source: "projects/golunch/poster.jpg",
    slug: "/work/golunch",
    title: "GoLunch",
    tagline: "Walk & Earn",
    description: "GoLunch was my final-year project, done in July 2019. It was a special project not only because it was my first client project, but because this was a first-ever joint-collaboration between Singapore Polytechnic and theFIRMA, a university based in Finland. The project’s client was Kupittaan Paviljonki, a Finland-based restaurant, and they wanted a web-based tracking app that customers could access anywhere and track the distance walked to and fro their restaurants to provide discounts for customers.",
    stack: ["React", "Express", "MySQL", "web3.js (Blockchain)", "UI/UX Animation", "QR Code Generation / Scanning"],
    challenges: {__html: `There was a lot of confusion during the initial phase of the project as the app that the client wanted pointed towards a native mobile app. Our group began learning React Native, but by the time the client clarified that he wanted a Progressive Web App, we had wasted 1-2 weeks. 
    <br/><br/>Additionally, I was the leader of my group but there was pressure on me as while I wanted to have fun with my groupmates, I also needed to hurry them along as we ran behind schedule at certain points of time. I worried that they wouldn't respect and respond to me as a leader if I was too strict`}
}

export const eformbuilder: Project = {
    source: "projects/golunch/golunch-home.png",
    slug: "/work/e-formbuilder",
    title: "E-Form Builder",
    tagline: "Build Forms easily",
    description: "GoLunch was my final-year project, done in July 2019. It was a special project not only because it was my first client project, but because this was a first-ever joint-collaboration between Singapore Polytechnic and theFIRMA, a university based in Finland. The project’s client was Kupittaan Paviljonki, a Finland-based restaurant, and they wanted a web-based tracking app that customers could access anywhere and track the distance walked to and fro their restaurants to provide discounts for customers.",
    stack: ["Vue.js", "Spring Boot", "NoSQL"]
    
}