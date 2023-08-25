/* eslint-disable @typescript-eslint/no-var-requires */
import PageRoot from 'components/layout/PageRoot';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NextPageTouchArea from '../../../components/navigation/NextPageTouchArea';
import * as paths from '../../../constants/routes'
import { setBackgroundHeight } from 'store/actions/uiActions';

export default function AboutPage(){

    useEffect(() => {
        setBackgroundHeight("400vh")    
    }, [])
    return (
        <PageRoot padded className={"text-base md:px-24"}>
            <h1 className='text-4xl'>I design, develop and do it all again</h1>
            <h3 className='text-2xl mb-4'>Hi there, my name is name Khang Hou, also pronounced as kang · how.</h3>
            <p>I&apos;m a software developer with 4 years of experience. I mainly use the Typescript with the React ecosystem (React, React Native and Express.js), but have also learnt and used other languages such as: Angular, C#, Spring Boot, Python and HTML, CSS and JS.</p>
            <br/>
            <p>
            I used to study creative writing in Singapore Polytechnic but switched courses after finding finding out that writing was not what I wanted to do long-term. I chose Information Technology because I was drawn to the idea of creating things from nothing.
            </p>
            <br/>
            {/* TODO: Find out if anything wrong with layout of this */}
            <img
                className="max-w-[720px]"
                src={require("../../../assets/images/baby-through-hole.jpeg")} />
            <p className="image-label">A picture I took around Aug 2016, during my time studying creative writing. It was actually more of a scriptwriting course, though</p>
        
            <p>
            With programming, you could build whatever you envisioned and it would all happen in real-time. the feedback loop was short, and learning programming was an enjoyable process. 
            To me, programming was a lot like writing, whatever creative ideas you penned down would come true, only that coding had a more tangible effect. 
            </p>
            <br/>
            <p>
                I&rsquo;ve also always been a hands-on learner, absorbing more knowledge faster as I apply what I learn into real life. So being able to try out wacky ideas has immensely helped me grasp the handles on certain abstract concepts.
            </p>
            <div className="centered-image-container">
            <img
                className='w-1/3'
                src={require("../../../assets/images/projects/AIvin/aivin-chat-2.jpg")}/>
            <p className="image-label">Screenshot of AIvin, a submission for SurpriseHacks 2021</p>
            </div>
            <p>It&rsquo;s only after I became better at programming could I actually help others with my skills. It could be tackling real-world problems, building websites for others or even fixing computer issues, I could do so much more than before.</p>
            <br></br>
            
            <div className='mb-4'>
                <h3 className='text-2xl'>Education</h3>
                <div className='mb-4'>
                    <div className='text-xl font-bold'>National University of Singapore (2022 - Present)</div>
                    <p>Bachelor of Computer Science</p>
                </div>
                <div className='text-xl font-bold'>Singapore Polytechnic (2016- 2020)</div>
                <p>Studied Information Technology, achieved a 3.96 GPA and graduated with merit.</p>
                <ul className='list-disc ml-4'>
                    <li>Graduated with merit (only for top 10% of graduating cohort)</li>
                    <li>Awarded with the CSIT Diploma Scholarship in 2019</li>
                    <li>Awarded with the Accenture Technology Prize, which is given to only the top 5% of the graduating cohort</li>
                </ul>
            </div>

            {/* <h3>Work Experience</h3>
            <ul>
                <li>Translienr Pte Ltd </li>
                <li>Awarded with the CSIT Diploma Scholarship in 2019</li>
                <li>Awarded with the Accenture Technology Prize, which is given to only the top 5% of the graduating cohort</li>
            </ul> */}
            <h3 className='text-2xl'>Want to work with me?</h3>
            <p>Contact me at khanghou99@gmail.com</p>
        </PageRoot>
    )
}