import { useRef } from "react"
import { Button } from "../components/Button"
import { CutCornerButton } from "../components/CutCornerButton"
import { motion, useScroll, useTransform } from "framer-motion"

const listItems = [
    'Experience unparalleled scurity and scalability',
    'Fully benefit from scalable network effects',
    'Unlock the potential of decentralized network',
]

export const FeaturesGrid = () => {
    const torusKnotRef = useRef(null)
    const firstHemisphereRef = useRef(null)
    const {scrollYProgress : torusKnotScrollProgress} = useScroll({
        target: torusKnotRef,
        offset: ['start end', 'end start'],
    })
    const torusKnotTranslateY = useTransform(torusKnotScrollProgress, [0,1], [100, -100])
    const torusKnotRotate = useTransform(torusKnotScrollProgress, [0,1], [30, -30])

    const {scrollYProgress : firstHemisphereScrollProgress} = useScroll({
        target : firstHemisphereRef,
        offset : ['start end', 'end start']
    })
    const firstHemisphereTranslateY = useTransform(firstHemisphereScrollProgress, [0, 1], [50, -50])
    const firstHemisphereRotate = useTransform(firstHemisphereScrollProgress, [0, 1], [-20, -50])

    const coneRef = useRef(null)
    const secoundHemisphereRef = useRef(null)
    const {scrollYProgress : coneScrollProgress} = useScroll({
        target: coneRef,
        offset: ['start end', 'end start'],
    })
    const coneTranslateY = useTransform(coneScrollProgress, [0, 1], [100, -100])
    const coneRotate = useTransform(coneScrollProgress, [0, 1], [12, 45])

    const {scrollYProgress : secoundHemisphereScrollProgress} = useScroll({
        target: secoundHemisphereRef,
        offset: ['start end', 'end start'],
    })
    const secoundHemisphereTranslateY = useTransform(secoundHemisphereScrollProgress, [0, 1], [50, -50])
    const secoundHemisphereRotate = useTransform(secoundHemisphereScrollProgress, [0, 1], [-20, 10])



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
                                    <div className="inline-flex size-8 flex-shrink-0 outline outline-4 justify-center items-center  -outline-offset-4 outline-blue-500/10 rounded-full">
                                        <div className="size-[6px] bg-blue-500 rounded-full"></div>
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
                            <motion.img
                            ref={torusKnotRef}
                            src="/assets/images/torus-knot.png"
                            alt="torus-knot image"
                            className="size-96 max-w-none"
                            style={{
                                translateY : torusKnotTranslateY,
                                rotate : torusKnotRotate
                            }}
                            />
                            <motion.img
                            ref={firstHemisphereRef}
                            src="/assets/images/hemisphere.png"
                            alt="hemisphere image"
                            className="size-96
                            max-w-none absolute top-3/4  scale-x-[-1] -z-10"
                            style={{
                                translateY : firstHemisphereTranslateY,
                                rotate : firstHemisphereRotate
                            }}
                            />
                        </div>
                    </div>
                </div>
                <div className=" md:grid grid-cols-3 gap-8">
                    <div className="relative col-span-1 ">
                        {/* position wrapper */}
                        <div className="hidden  md:block absolute right-0 z-0 ">
                            <motion.img ref={coneRef} src="/assets/images/cone.png" alt="cone image" className="size-96 max-w-none rotate-12"
                            style={{
                                translateY : coneTranslateY,
                                rotate : coneRotate
                            }}

                            />
                            <motion.img ref={secoundHemisphereRef} src="/assets/images/hemisphere.png" alt="hemisphere image" className="size-96
                            max-w-none absolute top-3/4  -z-10"
                            style={{
                                translateY : secoundHemisphereTranslateY,
                                rotate : secoundHemisphereRotate
                            }}/>
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
