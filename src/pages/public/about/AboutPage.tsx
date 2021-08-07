/* eslint-disable @typescript-eslint/no-var-requires */
import PageRoot from 'components/layout/PageRoot';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NextPageTouchArea from '../../../components/navigation/NextPageTouchArea';
import * as paths from '../../../constants/routes'
import {Col, Image, Row} from 'antd';
import { setBackgroundHeight } from 'store/actions/uiActions';

export default function AboutPage(){

    useEffect(() => {
        setBackgroundHeight("400vh")    
    }, [])
    return (
        <PageRoot padded>
            <h1>I design, develop and do it all again</h1>
            <h3>Hi there, my name is name Khang Hou, also pronounced as kang · how.</h3>
            <p>I&apos;m a software developer with 4 years of experience. I mainly use the Typescript with the React ecosystem (React, React Native and Express.js), but have also learnt and used other languages such as: Angular, C#, Spring Boot, Python and HTML, CSS and JS.</p>
            
            <p>
            5 years ago, I was still studying a creative writing course. Given my love for writing, it only made sense that I would pursue such a course. I held a firm belief that I only ever wanted to study what I would enjoy doing in the future, and it&rsquo;s still a belief I hold close to my heart. But the novelty of writing wore off quickly when you are forced to do so everyday. In the end, it was just a hobby for me, and I switched courses after a year in.
            </p>
            <Row>
                <Col xs={24}>
                    <Image
                        className=""
                        src={require("../../../assets/images/baby-through-hole.jpeg").default} />
                    <p className="image-label">A picture I took around Aug 2016, during my time studying creative writing. It was actually more of a scriptwriting course, though</p>
                </Col>
            </Row>
            <p>
            What enticed me to programming was that you could build whatever you envisioned, and you could see it happen in real-time. In a sense, programming was like writing, whatever wacky ideas you penned down would come true, only that coding was more practical. I&rsquo;ve always been a hands-on learner, absorbing more knowledge faster as I apply what I learn into real life. So being able to try out wacky ideas has immensely helped me grasp the handles on certain abstract concepts.
            
            </p>
            <div className="centered-image-container">
            <Image
                src={require("../../../assets/images/projects/AIvin/aivin-chat-2.jpg").default}/>
            <p className="image-label">Screenshot of AIvin, a submission for SurpriseHacks 2021</p>
            </div>
            <p>In addition, I&rsquo;m able to actually help out people very easily using my programming skills. As the world is so deeply entrenched in technology nowadays, there isn&rsquo;t a facet in life that hasn&rsquo;t been impacted by technology in some way or another. And thus, there are so many problems that technology has been able to fix, like bionic prosthetics that allow the disabled to move normally again, treating dirty seawater into drinkable water, and even simply being able to sell your unwanted clothing at the comfort of your home</p>
            
            <h3>Education</h3>
            <p>I studied Information Technology in Singapore Polytechnic and achieved a 3.96 GPA, graduating in 2020 with a diploma with merit.</p>
            <ul>
                <li>Graduated with merit (only for top 10% of graduating cohort)</li>
                <li>Awarded with the CSIT Diploma Scholarship in 2019</li>
                <li>Awarded with the Accenture Technology Prize, which is given to only the top 5% of the graduating cohort</li>
            </ul>

            <h3>Want to work with me?</h3>
            <p>Contact me at khanghou99@gmail.com</p>
            <p>Here&rsquo;s my &nbsp;
                <a href="../../../assets/resume.pdf" download>resume</a>
            </p>
        </PageRoot>
    )
}