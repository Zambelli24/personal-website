"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[779],{8779:(j,c,i)=>{i.r(c),i.d(c,{PortfolioComponent:()=>b});var s={};i.r(s),i.d(s,{BoundAthleteProject:()=>g});var l=i(6575),e=i(1699),n=i(4280);const g={description:"My first software development project. I began by assisting one other developer and within a few months I took ownership of all aspects of the development lifecycle. Bound Athlete is a social networking platform for high school athletes to connect with coaches and other athletes. The goal of the platform is to education student athletes about the recruiting process. The platform serves as their home base for finding the right college to match their desires at the collegiate level.",technologies:[n.rA.REACT,n.rA.NODEJS,n.rA.AWS,n.rA.AWS_S3,n.rA.AWS_RDS,n.rA.AWS_LAMBDA,n.rA.TWILIO,n.rA.MYSQL,n.rA.HTML,n.rA.SCSS,n.rA.DOCKER,n.rA.NETLIFY,n.rA.HEROKU,n.rA.NGROK,n.rA.JAVASCRIPT,n.rA.PYTHON],images:["assets/projects/bound/bound-1.png","assets/projects/bound/bound-2.png","assets/projects/bound/bound-3.png","assets/projects/bound/bound-4.png","assets/projects/bound/bound-5.png"],link:"https://boundathlete.com/",logo:"assets/projects/bound/bound-athlete.png",key:"bound-athlete",name:"Bound Athlete",responsibilities:["Leads all software development and testing","Manages AWS infrastructure and deployment","Drives business value through technical solutions","Leverages automation and scripting to improve process efficiency","Enhances UX continuously to ensure user satisfaction"]};let d=(()=>{class o{constructor(){this._projects=Object.keys(s).map(t=>s[t])}get projects(){return this._projects}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function m(o,r){if(1&o&&(e.TgZ(0,"li"),e._UZ(1,"img",9),e.qZA()),2&o){const t=r.$implicit,a=r.index,p=e.oxw().$implicit;e.xp6(1),e.s9C("src",t,e.LSH),e.hYB("alt","",p.name,"-image-",a,"")("title","",p.name," Image ",a,"")}}function h(o,r){if(1&o&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&o){const t=r.$implicit;e.xp6(1),e.hij(" ",t," ")}}function u(o,r){if(1&o&&e._UZ(0,"img",10),2&o){const t=r.$implicit;e.s9C("src",t.logo,e.LSH),e.s9C("alt",t.name),e.s9C("title",t.name)}}function f(o,r){if(1&o&&(e.TgZ(0,"a",1)(1,"div",2),e._UZ(2,"img",3),e.TgZ(3,"h1"),e._uU(4),e.qZA()(),e.TgZ(5,"ul",4),e.YNc(6,m,2,5,"li",5),e.qZA(),e.TgZ(7,"div",6)(8,"div")(9,"h3"),e._uU(10,"Project Overview"),e.qZA(),e.TgZ(11,"p"),e._uU(12),e.qZA()(),e.TgZ(13,"div")(14,"h3"),e._uU(15,"Key Responsibilities"),e.qZA(),e.TgZ(16,"ul"),e.YNc(17,h,2,1,"li",5),e.qZA()()(),e.TgZ(18,"h4"),e._uU(19,"Technologies & Languages"),e.qZA(),e.TgZ(20,"div",7),e.YNc(21,u,1,3,"img",8),e.qZA()()),2&o){const t=r.$implicit;e.s9C("href",t.link,e.LSH),e.xp6(2),e.MGl("id","",t.key,"-logo"),e.s9C("src",t.logo,e.LSH),e.s9C("alt",t.name),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Q6J("ngForOf",t.images),e.xp6(6),e.Oqu(t.description),e.xp6(5),e.Q6J("ngForOf",t.responsibilities),e.xp6(4),e.Q6J("ngForOf",t.technologies)}}let b=(()=>{class o{constructor(t){this.projectsService=t,this.projects=this.projectsService.projects}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-portfolio"]],standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","portfolio-item","target","_blank","rel","noopener",3,"href",4,"ngFor","ngForOf"],["target","_blank","rel","noopener",1,"portfolio-item",3,"href"],[1,"project-header"],[3,"id","src","alt"],[1,"project-images"],[4,"ngFor","ngForOf"],[1,"project-details"],[1,"technologies"],["class","tech-logo",3,"src","alt","title",4,"ngFor","ngForOf"],[3,"src","alt","title"],[1,"tech-logo",3,"src","alt","title"]],template:function(t,a){1&t&&e.YNc(0,f,22,9,"a",0),2&t&&e.Q6J("ngForOf",a.projects)},dependencies:[l.ez,l.sg],styles:["[_nghost-%COMP%]{background-color:var(--app-background-color);box-sizing:border-box;display:block;min-height:100vh;padding:15px;padding-bottom:calc(1.5 * var(--banner-height));padding-top:var(--banner-height);position:relative}.portfolio-item[_ngcontent-%COMP%]{align-items:center;border-radius:var(--default-border-radius);box-shadow:2px 2px 10px var(--secondary-color);box-sizing:border-box;display:flex;flex-direction:column;margin:20px auto;max-width:800px;padding:10px 10px 0;text-decoration:none}.portfolio-item[_ngcontent-%COMP%]:hover{opacity:1;transform:scale(1.02);transition:all .2s ease-in-out}.project-header[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center;text-align:center;width:100%}.project-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding:0 20px}.project-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px}.project-header[_ngcontent-%COMP%]   img#bound-athlete-logo[_ngcontent-%COMP%]{background-color:#fff}.project-images[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;margin:0;padding:5px 0 15px}.project-images[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:auto;cursor:pointer;position:relative;list-style-type:none;padding:0}.project-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;width:100%;vertical-align:middle;margin:0}.project-details[_ngcontent-%COMP%]{display:grid;grid-template-columns:50% 50%}.project-details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:0 5px}.project-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{border-bottom:1px dashed var(--secondary-color);margin-bottom:0;text-align:center}@media screen and (max-width: 750px){.project-details[_ngcontent-%COMP%]{grid-template-columns:100%}}h4[_ngcontent-%COMP%]{margin-bottom:5px}.technologies[_ngcontent-%COMP%]{background-color:var(--secondary-color);border-bottom-left-radius:var(--default-border-radius);border-bottom-right-radius:var(--default-border-radius);display:grid;grid-template-columns:repeat(auto-fit,minmax(60px,1fr));padding:5px 10px;width:100%}"]}),o})()}}]);
//# sourceMappingURL=779.8fdb69b5cfbefff1.js.map