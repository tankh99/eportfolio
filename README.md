# Welcome
Welcome to my E-Portfolio. My name is Khang Hou and I'm a software developer. I specialise in React with Typescript, but have dipped my hands in other areas of expertise, like Backend Development (Spring Boot & C#), Database Design (MongoDB, MySQL, SQL Server) and Blockchain with Solidity

Project URL: [https://tankh99.github.io/eportfolio]

# Troubleshooting
### Getting react-responsive-carousel to support multimedia
1. Run ```npm pack``` inside my fork of the react-responsive-carousel repository
2. ```npm install``` the tar.gz that was created from ```npm pack``` command. 
3. Either this or just drag the tar.gz file into the root of your project. Then inside package.json, include "react-responsive-carousel":"file:...tar.gz". Then run ```npm install```
4. Once done, open the tar.gz personally, and copy the lib folder into the react-responsive-carousel folder inside node_modules