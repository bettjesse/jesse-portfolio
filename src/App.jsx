import React from 'react'
import { UilMoon,UilLinkedin, UilGithub, UilTwitter,UilPhone,UilEnvelope,UilLocationPoint  } from '@iconscout/react-unicons'
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";

import portfolio1 from "../public/portfolio1.png";
import portfolio2 from "../public/portfolio2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "/web6.png";
import software from "/software.png"

const App = () => (
    <div className='bg-black px-5'>
       <div className="min-h-screen">
       <nav className="py-10 mb-12 flex justify-between dark:text-white">
       <h1 className="font-poppins text-xl">DevelopedbyJesse</h1>
       <ul className="flex items-center">
        
        <li>
                <UilMoon
                  // onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white sm:px-4 py-2 border-none rounded-md ml-5"
                  href="https://drive.google.com/file/d/1Hy5F6x3zVLCDop-3n83jwKnTq3rhV7MI/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
        
         </nav>
         <div className='text-center px-10 '>
         <h2 className="text-5xl  text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Jesse Bett
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Front-end Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 w-[50%] mx-auto md:text-xl">
              I am a front-end developer based in Nairobi,Kenya. I enjoy building interactive user interfaces.I provide services for programming needs.
              Currently, I'm concentrating on the performance, scalability, and UI/UX aspects of apps. Join me down below and let's get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              
              <a href='https://github.com/bettjesse'><UilGithub/></a>
              <a href='https://linkedin.com/in/jesse-bett-46b0aa1a8'><UilLinkedin/></a>
              <a href='https://twitter.com/Jesse_bett'><UilTwitter/> </a>
               </div>
               <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-10 md:h-96 md:w-96">
              <img src={deved} layout="fill" objectFit="cover" />
            </div>
         </div>
       
   <div>
    <div>
    <h3 className=" text-center text-3xl py-5 dark:text-white ">Skill Summary</h3>
            {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p> */}
  
    </div>
    
   <div className="lg:flex gap-10">
   <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <img src={software} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
               Software Development
              </h3>
              <p className="py-2">
              Experienced in both functional and OOP: 
              </p>
              <h4 className="py-4 text-teal-600">Programming languages</h4>
              <p className="text-gray-800 py-1">Html</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">Css</p>
              
             
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <img src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
              Frontend Development
              </h3>
              <p className="py-2">
              Passionate about UI/UX. Over 2 years of development experience
              </p>
              <h4 className="py-4 text-teal-600">Tech stack</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Tailwind css</p>
              
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <img src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Version control
              </h3>
              <p className="py-2">
              Experience with GIT including git flow branching merging and resolving conflicts.
              </p>
              <h4 className="py-4 text-teal-600"> Tool</h4>
              <p className="text-gray-800 py-1">Git</p>
              
              </div>
              </div>
              
                
                

                
              
              </div>
              <section className="py-5">
          <div>
            <h3 className=" text-center text-3xl py-1 dark:text-white ">Portofolio</h3>
           
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href='https://super-cool-site-by-bettjesse.netlify.app/'>

           
              <img
                className="rounded-lg object-cover cursor-pointer"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={portfolio2}
              />
                 </a>
                 <div>
                  <ol className='text-white'>
                    <a href='https://modern-uxui-bank-website.netlify.app'>
                    <h1 className=' mb-2 text-center text-[20px] bg-gradient-to-r from-cyan-500 text- to-teal-500 '>Bank website</h1>
                    </a>
                    <p>Bank website with modern UI/UX</p>
                    <h2 className="text-[16px] mb-1 text-teal-500" >Technologies used</h2>
                    <div className='flex gap-2 justify-start'>
                    <li>1 React</li>
                    <li>2 Tailwind</li>
                    </div>
                  </ol>
                 </div>
            </div>
            <div className="basis-1/3 flex-1">
              <a href='https://modern-uxui-bank-website.netlify.app/'>
              <img
                className="rounded-lg object-cover cursor-pointer"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={portfolio1}
              />
              </a>
              <div>
                  <ol className='text-white'>
                    <a href='https://super-cool-site-by-bettjesse.netlify.app'>
                    <h1 className=' mb-2 text-center text-[20px] bg-gradient-to-r from-cyan-500 text- to-teal-500 '>Movie App</h1></a>
                    <p>Movie app displaying latest movies from The Movie Database Api</p>
                    <h2 className="text-[16px] mb-1 text-teal-500" >Technologies used</h2>
                    <div className='flex gap-2 justify-start'>
                    <li>1 React</li>
                    <li>2 Styled components</li>
                    </div>
                  </ol>
                 </div>
            </div>
            
           
            {/* <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div> */}
          </div>
        </section>
        <section className=''>
        <h3 className=" text-center text-3xl py-1 dark:text-white ">Get in touch</h3>
        
           
       
        <div className='flex w-full py-5 justify-center items-center '>
      
          <div className=' items-center flex flex-col  text-white bg-gradient-to-r from-cyan-500 text- to-teal-500 w-full max-w-4xl p-4 rounded-xl shadow-lg justify-center'>
                <div className='flex flex-col space-y-8 justify-between'>
                  <div className='items-center'>
                    <h1 className='items-center font-bold text-4xl tracking-wide'>Contact me</h1>
                    <p className='pt-2 text-sm'></p>
                  </div>
                  <div className=' flex flex-col space-y-6'>
                    <div className='inline-flex space-x-2 items-center'>
                      <UilPhone className= "text-xl text-white"/>
                      <a href="tel:+254110426093">
                      <span className=' text-[18px]'>
                        (+254) 110426093
                      </span>
                      </a>
                    </div>
                    <div className='inline-flex space-x-2 items-center'>
                      <UilEnvelope className= "text-xl text-white"/>
                      <span className=' text-[18px]'>
                       <mail to="Jessebett1999@gmail.com" ></mail>
                       Jessebett1999@gmail.com
                      </span>
                    </div>
                    <div className='inline-flex space-x-2 items-center'>
                      <UilLocationPoint className= "text-xl text-white"/>
                      <span className=' text-[18px]'>
                        Nairobi,Kenya
                      </span>
                    </div>
                  </div>
                  <div className='flex space-x-4 text-lg'>
                    <a href='https://linkedin.com/in/jesse-bett-46b0aa1a8'>
                      <UilLinkedin/>
                    </a>
                    <a href='https://github.com/bettjesse'>
                      <UilGithub/>
                    </a>
                    <a href='https://twitter.com/Jesse_bett'>
                      <UilTwitter/>
                    </a>
                  </div>
                  <div>

                  </div>
                </div>
          </div>

        </div>
        </section>
              </div>

             
             
              
   </div>
   
  )


export default App