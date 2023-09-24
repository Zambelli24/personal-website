"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[737],{4737:(P,c,i)=>{i.r(c),i.d(c,{ExperienceComponent:()=>E});var a={};i.r(a),i.d(a,{CAIExp:()=>f,EvernorthExp:()=>x,FireMonExp:()=>v,Merck2016Exp:()=>w,Merck2017Exp:()=>A,Merk2018Exp:()=>y});var p=i(6575),h=i(3013),e=i(1699),t=i(4280);const f={key:"cai",company:"Computer Aid Inc. (CAI)",description:"I gained experience across various functions within the technology industry. I impacted the company by executing sales, marketing, customer support, strategic planning, software development and BI report design. I kept pace with an ever growing workload and pushed forward numerous new initiatives to drive growth for the company.",endDate:"November 2021",startDate:"May 2019",title:"Technical Support Analyst",keyResponsibilities:["Developed customer onboarding process for new clients and cultivated the relationship with the first 10 to ensure satisfaction","Aided customers in the implementation of TrueProject and provided training to ensure proper use","Created trail version of TrueProject to allow customers to test the product before purchasing and help drive sales","Built MicroStrategy reports and dashboards and designed the integration with the TrueProject","Supported custom requests from customers in developing their own best practice assessments for project status","Enhanced dashboards within the TrueProject application using Angular","Led the strategic planning and expansion of a new initiative to build a consortium of technology companies","Co-Founded an employee resource group for young professionals to help guide them in their early career","Designed requirements and helped build a python script for automating a tedious manual process"],link:"https://www.cai.io/",technologies:[t.rA.ANGULAR,t.rA.MICROSTRATEGY,t.rA.PYTHON,t.rA.POWERPOINT,t.rA.EXCEL,t.rA.WORD],type:"pro"},x={company:"Evernorth Health Services",description:"I am currently a Senior Full Stack Engineer contracted through Solomon Page. I am responsibile for an internal solution helping our custom service teams assist customers in optimizing their healthcare and benefits plans.",endDate:"Present",startDate:"June 2023",key:"evernorth",keyResponsibilities:["Implements modular solutions to complex problems allowing for rapid development and deployment","Performs all development, testing, and review responsibilies","Leverages Agile methodologies to plan and execute all deliverables","Refactors legacy code to improve performance and maintainability","Builds new new features and functionality to meet business needs"],link:"https://www.evernorth.com/",title:"Senior Full Stack Engineer",technologies:[t.rA.ANGULAR,t.rA.AWS,t.rA.NODEJS,t.rA.HTML,t.rA.SCSS],type:"pro"},v={company:"FireMon",description:"This was my first full-time software development role. I went from zero professional experience to leading all frontend development in under a year. In my time at FireMon, I contributed to enhancing the overall code quality and reducing the amount of legacy code. I helped maintain the dependencies and keep all 7 frontend repositories up to date with the latest releases.",endDate:"June 2023",startDate:"November 2021",key:"firemon",keyResponsibilities:["Managed dependencies and Angular upgrades across 7 repositories with minimal escaped defects","Collaborated closely with UX and product teams to drive customer value through software solutions","Built pixel-perfect SaaS demo offering for use as sales aid","Mentored and supported fellow developers in implementing efficient and elegant frontend solutions","Leads critical feature development to enhance product offerings and drive customer value","Implemented optimized webpack compilation process leading to 50% faster application builds","Led the effort in migrating from AngularJS to Angular","Designed and implemented modular, reusable frontend components to enhance architecture","Improved code documentation to accelerate development process","Evaluated and aided in the selection of new employees","Implemented backend solutions to support frontend changes and ensure seamless user experience"],link:"https://www.firemon.com/",title:"Software Engineer",technologies:[t.rA.ANGULAR,t.rA.ANGULARJS,t.rA.JAVA,t.rA.JENKINS,t.rA.SCSS,t.rA.HTML,t.rA.TYPESCRIPT,t.rA.JAVASCRIPT,t.rA.WEBPACK,t.rA.AUTH0],type:"pro"},y={company:"Merck",description:"I was an intern on the Cloud Services team for the entire summer of 2018. Our team was responsible for the deployment and management of the cloud environment supporting the entire technology organization at Merck. I worked closely with serveral senior members of the team and was responsible for improving their security and remediation practices.",startDate:"May 2018",endDate:"August 2018",key:"merck2018",keyResponsibilities:["Worked on an auto-remediation script using AWS Lambda triggered automatically upon alert from 3rd party security software","Incremented the functionality of the access control system used in the AWS environment","Created various other tool scripts for collecting data about services running through AWS"],link:"https://www.merck.com/",title:"Cloud Services Summer Intern",technologies:[t.rA.AWS,t.rA.AWS_IAM,t.rA.AWS_LAMBDA,t.rA.PYTHON],type:"intern"},A={company:"Merck/Moravian College",description:"I worked with a small group of students from Moravian College carefully selected to participate in a summer internship sponsored by Merck. We were responsible for exploring new initiatives and completeing requested work while interfacing frequently with employees at Merck. The internship lasted the entire summer and allowed us to gain professional experience in the software engineering field.",startDate:"May 2017",endDate:"August 2017",key:"merck2017",keyResponsibilities:["Collaborated on a health IoT project for raspberry pi that takes advantage of Alexa and Google Home","Worked with Flask to redefine the API for a preexisting system","Leveraged Docker in order to turn a system with parts running on multiple machines into one where everything runs on the same machine"],link:"https://www.merck.com/",title:"Developer Intern",technologies:[t.rA.PYTHON,t.rA.FLASK,t.rA.DOCKER,t.rA.MONGODB,t.rA.RASPBERRY_PI,t.rA.ALEXA],type:"intern"},w={company:"Merck/Moravian College",description:"I worked with a small group of students from Moravian College carefully selected to participate in a summer internship sponsored by Merck. We were responsible for exploring new initiatives and completeing requested work while interfacing frequently with employees at Merck. The internship lasted the entire summer and allowed us to gain professional experience in the software engineering field.",startDate:"May 2016",endDate:"August 2016",key:"merck2016",keyResponsibilities:["Collaborated with employees of Merck on a weekly basis.","Assisted in the creation of a project proposal to Merck.","Worked with other students to improve a web application called Home Healthkit. The Home Healthkit is a system that allows doctors to store all of a patient's vitals in one place. The system leveraged the capabilities of a Raspberry Pi 3, making it very portable."],link:"https://www.merck.com/",title:"Developer Intern",technologies:[t.rA.PYTHON,t.rA.FLASK,t.rA.RASPBERRY_PI,t.rA.RUBY],type:"intern"};var d=i(2860);let b=(()=>{class o{constructor(){this._sortExp=n=>n.sort((s,m)=>{if("Present"===s.endDate)return-1;if("Present"===m.endDate)return 1;const[S,u]=s.endDate.split(" "),[O,g]=m.endDate.split(" ");if(u!==g)return+g-+u;const I=d.g.findIndex(l=>l===S);return d.g.findIndex(l=>l===O)-I}),this._experience=this._sortExp(Object.keys(a).map(n=>a[n]))}get experience(){return this._experience}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function k(o,r){if(1&o&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&o){const n=r.$implicit;e.xp6(1),e.Oqu(n)}}function M(o,r){if(1&o&&e._UZ(0,"img",7),2&o){const n=r.$implicit;e.s9C("src",n.logo,e.LSH),e.s9C("alt",n.name),e.s9C("title",n.name)}}function C(o,r){if(1&o&&(e.TgZ(0,"a",1)(1,"div",2)(2,"span"),e._uU(3),e.qZA(),e.TgZ(4,"h1"),e._uU(5),e.qZA(),e.TgZ(6,"h2"),e._uU(7),e.qZA()(),e.TgZ(8,"div",3)(9,"div")(10,"h3"),e._uU(11,"Role Overview"),e.qZA(),e.TgZ(12,"p"),e._uU(13),e.qZA()(),e.TgZ(14,"div")(15,"h3"),e._uU(16,"Key Responsibilities"),e.qZA(),e.TgZ(17,"ul"),e.YNc(18,k,2,1,"li",4),e.qZA()()(),e.TgZ(19,"h4"),e._uU(20,"Technologies & Languages"),e.qZA(),e.TgZ(21,"div",5),e.YNc(22,M,1,3,"img",6),e.qZA()()),2&o){const n=r.$implicit;e.s9C("href",n.link,e.LSH),e.xp6(3),e.lnq("",n.startDate," - ",n.endDate," ","intern"===n.type?"(Internship)":"",""),e.xp6(2),e.Oqu(n.title),e.xp6(2),e.Oqu(n.company),e.xp6(6),e.Oqu(n.description),e.xp6(5),e.Q6J("ngForOf",n.keyResponsibilities),e.xp6(4),e.Q6J("ngForOf",n.technologies)}}let E=(()=>{class o{constructor(n){this.expService=n,this.experience=this.expService.experience}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(b))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-experience"]],standalone:!0,features:[e.jDz],decls:2,vars:1,consts:[["class","exp-item","target","_blank","rel","noopener",3,"href",4,"ngFor","ngForOf"],["target","_blank","rel","noopener",1,"exp-item",3,"href"],[1,"exp-header"],[1,"exp-details"],[4,"ngFor","ngForOf"],[1,"technologies"],["class","tech-logo",3,"src","alt","title",4,"ngFor","ngForOf"],[1,"tech-logo",3,"src","alt","title"]],template:function(n,s){1&n&&(e.YNc(0,C,23,9,"a",0),e._UZ(1,"app-connect")),2&n&&e.Q6J("ngForOf",s.experience)},dependencies:[p.ez,p.sg,h.E],styles:["[_nghost-%COMP%]{background-color:var(--app-background-color);box-sizing:border-box;display:block;min-height:calc(100vh - 2 * var(--banner-height));padding:15px;position:relative;top:50px}.exp-item[_ngcontent-%COMP%]{align-items:center;border-radius:var(--default-border-radius);box-shadow:2px 2px 5px var(--secondary-color);box-sizing:border-box;display:flex;flex-direction:column;margin:20px auto;max-width:800px;padding:0 10px;text-decoration:none}.exp-item[_ngcontent-%COMP%]:hover{transform:scale(1.02);transition:all .2s ease-in-out}.exp-header[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;width:100%}.exp-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:var(--secondary-color);border-top-left-radius:var(--default-border-radius);border-top-right-radius:var(--default-border-radius);color:var(--secondary-text-color);padding:10px;text-align:center;width:100%}.exp-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:5px;margin-top:20px;text-align:center}.exp-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:20px;margin-top:5px;text-align:center}.exp-details[_ngcontent-%COMP%]{display:grid;grid-template-columns:50% 50%}.exp-details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:0 5px}.exp-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{border-bottom:1px dashed var(--secondary-color);margin:0;text-align:center}@media screen and (max-width: 750px){.exp-details[_ngcontent-%COMP%]{grid-template-columns:100%}}h4[_ngcontent-%COMP%]{margin-bottom:5px}.technologies[_ngcontent-%COMP%]{background-color:var(--secondary-color);border-bottom-left-radius:var(--default-border-radius);border-bottom-right-radius:var(--default-border-radius);display:grid;grid-template-columns:repeat(auto-fit,minmax(60px,1fr));padding:5px 10px;width:100%}"]}),o})()}}]);
//# sourceMappingURL=737.8c9dc0adc03d768d.js.map