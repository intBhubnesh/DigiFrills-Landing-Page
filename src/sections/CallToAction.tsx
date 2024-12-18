import { Circle } from "../components/Circle"
import { CutCornerButton } from "../components/CutCornerButton"
import { Hexagon } from "../components/Hexagon"



export const CallToAction = () => {
    return <section className="py-60 overflow-hidden  z-0">
        <div className="container">
            <div className="relative -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <Hexagon size={1100}  duration={50} reverse />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <Hexagon size={700} />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <Circle className="absolute -top-[400px] left-0" isAnimate>
                        <img src="../../assets/images/cuboid.png" alt="cuboid image" className="h-[140px]" />
                    </Circle>
                    <Circle className="absolute -top-[70px] -left-[600px]" isAnimate>
                        <img src='../../assets/images/cylinder.png' alt="cylinde image" className="h-[180px]" />
                    </Circle>
                </div>
                <h1 className="font-black text-center text-4xl md:text-5xl lg:text-6xl font-heading ">Ready to <span className="block">get started?</span></h1>
                <p className="text-zinc-400 text-center text-xl lg:text-2xl mt-8 md:px-40 lg:px-80">Start building using blockchain technology, with Blockforge.</p>
                <div className="flex items-center justify-center mt-12">
                    <CutCornerButton>Get Started</CutCornerButton>
                </div>

            </div>
        </div>
    </section>
}
