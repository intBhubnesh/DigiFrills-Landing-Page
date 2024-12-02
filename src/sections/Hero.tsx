import { CutCornerButton } from "../components/CutCornerButton"
import { Hexagon } from "../components/Hexagon"
import { Circle } from "../components/Circle"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const HeroSection = () => {

    // take the reference of the scroll-animation elements
    const isosahedronRef = useRef(null)
    const cubeRef = useRef(null)
    const cuboidRef = useRef(null)
    const torusRef = useRef(null)

    // scrollYProgress is a motion value which we can use with motion
    // We combine these scrollYProgress values with another hook from framer-motion which is useTransform
    const { scrollYProgress } = useScroll({
        target: isosahedronRef,
        offset: ['start end', 'end start'],
        //entire time the figure is present in vieport : start of the fig hit the bottom end of the view port -> end of the fig hit the top of the view port
    });

    const { scrollYProgress: cubeScrollYProgress } = useScroll({
        target: cubeRef,
        offset: ['start end', 'end start']
    })

    const { scrollYProgress: cuboidScrollYProgress } = useScroll({
        target: cuboidRef,
        offset: ['start end', 'end start']
    })

    const { scrollYProgress: torusScrollYProgress } = useScroll({
        target: torusRef,
        offset: ['start end', 'end start']
    })

    // useTransform creates a MotionValue that takes the output of one or more other MotionValues and changes it some way.
    const isosahedronRotate = useTransform(scrollYProgress, [0, 1], [30, -45]);
    const cubeRotate = useTransform(cubeScrollYProgress, [0, 1], [80, -45]);
    const cuboidRotate = useTransform(cuboidScrollYProgress, [0, 1], [30, -45]);
    const torusRotate = useTransform(torusScrollYProgress, [0, 1], [30, -45]);

    return <section className="py-24 md:py-52   overflow-x-clip ">
        <div className="container">
            <p className=" font-extrabold tracking-wider text-center uppercase text-zinc-500">Introducing Digifrills</p>
            <h1 className="mx-auto mt-4 max-w-2xl text-5xl font-black text-center font-heading lg:text-7xl md:text-6xl">
            Fostering <br /> Digital Evolution.
            </h1>
            <p className="mx-auto mt-6 text-xl text-center text-zinc-400 font-body md:text-2xl md:max-w-xl">Looking Forward To Support Your Business To Expand In Tech Space.</p>
            <div className="flex justify-center mt-10">
                <CutCornerButton>Set Started</CutCornerButton>
            </div>
            <div className="flex justify-center mt-24">
                <div className="inline-flex relative z-0">
                    {/* inner hexagon wrapper */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        {/* inner hexagon */}
                        <Hexagon className="size-[1100px]" size={1100}/>
                    </div>
                    {/* outter hexagon wrapper */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        {/* outter hexagone */}
                        <Hexagon className="size-[1800px] " size={1800} />
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        {/* left-[200px] -top-[900px]  */}
                        <Circle className="absolute left-[200px] -top-[900px] animate-none" isAnimate>
                            <motion.img
                                src="/assets/images/cube.png"
                                ref={cubeRef} alt="cube image"
                                style={{
                                    rotate: cubeRotate
                                }}
                                className="h-[140px]" />
                        </Circle>
                        {/* left-[200px] top-[270px] */}
                        <Circle className="absolute left-[200px] top-[270px]" isAnimate>
                            <motion.img
                                src="/assets/images/cuboid.png"
                                ref={cuboidRef}
                                style={{
                                    rotate: cuboidRotate
                                }}
                                alt="cuboid image"
                                className="h-[140px] " />
                        </Circle>
                        {/* left-[-600px] top-[-80px] */}
                        <Circle className="absolute -left-[600px] -top-[80px]"  isAnimate>
                            <motion.img
                                src="/assets/images/torus.png"
                                ref={torusRef}
                                style={{
                                    rotate: torusRotate
                                }}
                                alt="torus image"
                                className="h-[140px]" />
                        </Circle>
                    </div>
                    {/* motion wrapper */}
                    <motion.div
                        ref={isosahedronRef}
                        style={{
                            rotate: isosahedronRotate,
                        }}
                        className="inline-flex -my-16 h-[500px]">
                        <img src="../assets/images/icosahedron.png" alt="" className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+100px)] max-w-none saturate-[10%] brightness-[4%] hue-rotate-[240deg] blur-lg" />
                        <img src="../assets/images/icosahedron.png" alt="isosahedron" />
                    </motion.div>
                </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center mt-40  md:mt-80">
                <div className="inline-flex justify-center outline outline-[6px] outline-blue-500/10  h-10 w-5 rounded-full pt-2">
                    <div className="w-1 h-3 bg-blue-500 rounded-full"></div>
                </div>
                <p className="font-black  tracking-wider uppercase text-zinc-500 ">Scroll To Learn More</p>
            </div>
        </div>
    </section>
}
