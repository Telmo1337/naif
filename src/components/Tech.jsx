import slack from '../assets/icons/slack.svg';
import jira from '../assets/icons/jira.svg';
import confluence from '../assets/icons/confluence.svg';
import figma from '../assets/icons/figma.svg';
import vuejs from '../assets/icons/vuejs.svg';
import react from '../assets/icons/react.svg';
import gatsbyjs from '../assets/icons/gatsbyjs.svg';
import swift from '../assets/icons/swift.svg';
import kotlin from '../assets/icons/kotlin.svg';
import nestjs from '../assets/icons/nestjs.svg';
import django from '../assets/icons/django.svg';
import postgresql from '../assets/icons/postgresql.svg';
import redis from '../assets/icons/redis.svg';
import webflow from '../assets/icons/webflow.svg';
import wordpress from '../assets/icons/wordpress.svg';
import aws from '../assets/icons/aws.svg';
import heroku from '../assets/icons/heroku.svg';
import cloudflare from '../assets/icons/cloudflare.svg';
import docker from '../assets/icons/docker.svg';
import github from '../assets/icons/github.svg';
import browserstack from '../assets/icons/browserstack.svg';

const Tech = () => {
    return (
        <div className="">
            <div className="flex flex-col items-center">
                <h1 className="text-black text-6xl font-semibold">Tools & Technology  
                    <span className='pl-1 text-bruns bg-left-bottom bg-gradient-to-r from-bruns to-bruns bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                        stack
                    </span>
                </h1>
                <p className="text-black text-opacity-95 text-2xl font-medium mt-4">The right tooling is key for an efficient and successful collaboration. We take it seriously.</p>
            </div>
            <div className="flex items-center justify-center my-20">
                <div className="grid grid-cols-3 gap-10">
                    <div>
                        <img src={slack} />
                        <h1 className="text-tech-h1">Communication</h1>
                        <p className="text-tech-p">
                            Slack
                        </p>
                    </div>
                    <div>
                        <div className='flex flex-row gap-2'>
                            <img src={jira} />
                            <img src={confluence} />
                        </div>
                        <h1 className="text-tech-h1">Project Management</h1>
                        <p className="text-tech-p">
                            Jira and Confluence
                        </p>
                    </div>
                    <div>
                        <img src={figma} />
                        <h1 className="text-tech-h1">Product Design</h1>
                        <p className="text-tech-p">
                            Figma
                        </p>
                    </div>
                    <div>
                        <div className='flex flex-row gap-2'>
                            <img src={vuejs} />
                            <img src={react} />
                            <img src={gatsbyjs} />
                        </div>
                        <h1 className="text-tech-h1">Front-End Development</h1>
                        <p className="text-tech-p">
                            Vue.js, React.js and Gatsby
                        </p>
                    </div>
                    <div>
                        <div className="flex flex-row gap-2">
                            <img src={swift} />
                            <img src={kotlin} />
                            <img src={react} />
                        </div>
                        <h1 className="text-tech-h1">Mobile Development</h1>
                        <p className="text-tech-p">
                            Swift, Kotlin and React Native
                        </p>
                    </div>
                    <div>
                        <div className='flex flex-row gap-2'>
                            <img src={nestjs} />
                            <img src={django} />
                            <img src={postgresql} />
                            <img src={redis} />
                        </div>
                        <h1 className="text-tech-h1">Back-End Development</h1>
                        <p className="text-tech-p">
                            NestJS, Django, PostgreSQL and Redis
                        </p>
                    </div>
                    <div>
                        <div className='flex flex-row gap-2'>
                            <img src={webflow} />
                            <img src={wordpress} />
                        </div>
                        <h1 className="text-tech-h1">CMSs</h1>
                        <p className="text-tech-p">
                            Webflow and WordPress
                        </p>
                    </div>
                    <div>
                        <div className='flex flex-row gap-2'>
                            <img src={aws} />
                            <img src={heroku} />
                            <img src={cloudflare} />
                        </div>
                        <h1 className="text-tech-h1">Infrastructure</h1>
                        <p className="text-tech-p">
                            AWS, Heroku and Cloudflare
                        </p>
                    </div>
                    <div>
                        <div className='flex flex-row gap-2'>
                            <img src={docker} />
                            <img src={github} />
                        </div>
                        <h1 className="text-tech-h1">DevOps</h1>
                        <p className="text-tech-p">
                            Docker and Github Actions
                        </p>
                    </div>
                    <div>
                        <img src={browserstack} />
                        <h1 className="text-tech-h1">Quality Assurance</h1>
                        <p className="text-tech-p">
                            BrowserStack
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tech
