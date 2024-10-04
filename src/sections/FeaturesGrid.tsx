import { Button } from "../components/Button"
import { CutCornerButton } from "../components/CutCornerButton"

const listItems = [
    'Experience unparalleled scurity and scalability',
    'Fully benefit from scalable network effects',
    'Unlock the potential of decentralized network',
]

export const FeaturesGrid = () => {
    return <section className="py-24 overflow-x-clip">
        <div className="container">
            {/* flex-col wrapper */}
            <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">
                {/* grid wrapper */}
                <div className="md:grid grid-cols-3 gap-8">
                    {/* FeaturesGrid bulletpoints */}
                    <div className=" col-span-2">
                        <h2 className="font-black font-heading text-4xl md:text-5xl lg:text-6xl">Empowering the future of blockchain.</h2>
                        <p className=" text-xl font-body mt-8 text-zinc-400 lg:text-2xl">Blockforge provides robust and secure infrastructure to support the next generation of decentralized applications.</p>
                        <ul className="flex flex-col mt-12 gap-8">
                            {listItems.map((item) => (

                                <li key={item} className="flex items-center gap-3">
                                    <div className="inline-flex size-8 flex-shrink-0 outline outline-4 justify-center items-center  -outline-offset-4 outline-fuchsia-500/10 rounded-full">
                                        <div className="size-[6px] bg-fuchsia-500 rounded-full"></div>
                                    </div>
                                    <span className="text-xl font-bold ">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-8 mt-12">
                            <CutCornerButton>Get Started</CutCornerButton>
                            <Button>Learn More</Button>
                        </div>
                    </div>
                    {/* grid wrapper */}
                    <div className="hidden md:block col-span-1">
                        {/* position wrapper */}
                        <div className="relative z-0">
                            <img src="/assets/images/torus-knot.png" alt="torus-knot image" className="size-96 max-w-none" />
                            <img src="/assets/images/hemisphere.png" alt="hemisphere image" className="size-96
                            max-w-none absolute top-3/4  scale-x-[-1] -z-10" />
                        </div>
                    </div>
                </div>
                <div className=" md:grid grid-cols-3 gap-8">
                    <div className="relative col-span-1 ">
                        {/* position wrapper */}
                        <div className="hidden  md:block absolute right-0 z-0 ">
                            <img src="/assets/images/cone.png" alt="cone image" className="size-96 max-w-none rotate-12" />
                            <img src="/assets/images/hemisphere.png" alt="hemisphere image" className="size-96
                            max-w-none absolute top-3/4  -z-10" />
                        </div>
                    </div>
                {/* FeaturesGrid para */}
                <div className="col-span-2">
                    <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">Blockforge leads the way.</h2>
                    <div className="flex flex-col gap-6 mt-6 text-body text-xl text-zinc-400 lg:text-2xl">
                        <p >Blockforge is dedicated to supporting the evolution of Web3 applications by delivering the necessary infrastructure and scurity for Web3 </p>
                        <p >Blockforges champions Web3 for everyone. As a decentralized blockchain scaling platform,
                            Blockforge enable developers to create a scalable, user-friendly dApps with low transition costs, all while ensuring robust security.</p>
                    </div>
                    <div className="flex gap-8 mt-12">
                        <CutCornerButton>Get Started</CutCornerButton>
                        <Button>Learn More</Button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
}
