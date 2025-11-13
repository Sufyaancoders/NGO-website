import { faUserPlus, faHandHoldingHeart, faCalendarDays, faCommentDots, faHandsHelping, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../button'
import { Link } from 'react-router-dom';
import placeholder from '../../../assets/logo/logo_page-0001.jpg';

export default function IntegrationsSection() {
    return (
        <section>
            <div className="bg-[#26262b] dark:bg-background py-24 md:py-32">
                <div className="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
                    <div className="order-last mt-6 flex flex-col gap-12 md:order-first">
                        <div className="space-y-6">
                            <h2 className="text-white text-3xl font-semibold md:text-4xl lg:text-5xl">Integrate with your favorite LLMs</h2>
                            <p className="text-white">Connect seamlessly with popular platforms and services to enhance your workflow.</p>
                            <Button className={"bg-[#4b4bbe]"}
                                variant="outline"
                                size="sm"
                                asChild>
                                <Link to="#">Get Started</Link>
                            </Button>
                        </div>

                        <div className="mt-auto grid grid-cols-[auto_1fr] gap-3">
                            <div className=" flex aspect-square items-center justify-center ">
                                <img src={placeholder} alt="Logo" className="size-16" />
                            </div>
                            <blockquote>
                                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                                <div className="mt-2 flex gap-2 text-sm">
                                    <cite className='text-white'>John Doe</cite>
                                    <p className="text-muted-foreground">Founder, MediaWiki</p>
                                </div>
                            </blockquote>
                        </div>
                    </div>

                    <div className="-mx-6 px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] sm:mx-auto sm:max-w-md md:-mx-6 md:ml-auto md:mr-0">
                        <div className="bg-background dark:bg-muted/50 rounded-2xl border p-3 shadow-lg md:pb-12">
                            <div className="grid grid-cols-2 gap-2">
                                <Integration 
                                    icon={<FontAwesomeIcon className='text-yellow-500' icon={faUserPlus} />}
                                    name="User Plus"
                                    description="Add new users easily."
                                />
                                <Integration
                                    icon={<FontAwesomeIcon className='text-yellow-500' icon={faHandHoldingHeart} />}
                                    name="Hand Holding Heart"
                                    description="Show your support and care."
                                />
                                <Integration
                                    icon={<FontAwesomeIcon className='text-yellow-500' icon={faCalendarDays} />}
                                    name="Calendar Days"
                                    description="Keep track of important dates."
                                />
                                <Integration
                                    icon={<FontAwesomeIcon className='text-yellow-500' icon={faCommentDots} />}
                                    name="Comment Dots"
                                    description="Engage in meaningful conversations."
                                />
                                <Integration
                                    icon={<FontAwesomeIcon className='text-yellow-500' icon={faHandsHelping} />}
                                    name="Helping Hands"
                                    description="Collaborate and assist others."
                                />
                                <Integration
                                    icon={<FontAwesomeIcon className='text-yellow-500' icon={faGlobe} />}
                                    name="Global Reach"
                                    description="Expand your impact worldwide."
                                />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Integration = ({ icon, name, description }) => {
    return (
        <div className="hover:bg-muted dark:hover:bg-muted/50 space-y-4 rounded-lg border p-4 transition-colors">
            <div className="flex size-fit items-center justify-center">{icon}</div>
            <div className="space-y-1">
                <h3 className="text-sm font-medium">{name}</h3>
                <p className="text-muted-foreground line-clamp-1 text-sm md:line-clamp-2">{description}</p>
            </div>
        </div>
    )
}