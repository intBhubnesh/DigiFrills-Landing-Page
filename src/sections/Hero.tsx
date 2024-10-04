import { CutCornerButton } from "../components/CutCornerButton"
import { Hexagon } from "../components/Hexagon"
import { Circle } from "../components/Circle"


export const HeroSection = () => {
    return <section className="py-24 md:py-52   overflow-x-clip ">
        <div className="container">
            <p className=" font-extrabold tracking-wider text-center uppercase text-zinc-500">Introducing graymat</p>
            <h1 className="mx-auto mt-4 max-w-2xl text-5xl font-black text-center font-heading lg:text-7xl md:text-6xl">
                The Future of Blockchain is Here.
            </h1>
            <p className="mx-auto mt-6 text-xl text-center text-zinc-400 font-body md:text-2xl md:max-w-xl">Blockforge is pioneering smart contract integrity with cutting-edge data solutions.</p>
            <div className="flex justify-center mt-10">
                <CutCornerButton>Set Started</CutCornerButton>
            </div>
            <div className="flex justify-center mt-24">
                <div className="inline-flex relative z-0">
                    {/* inner hexagon wrapper */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        {/* inner hexagon */}
                        <Hexagon className="size-[1100px]" />
                    </div>
                    {/* outter hexagon wrapper */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        {/* outter hexagone */}
                        <Hexagon className="size-[1800px] " />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        {/* left-[200px] -top-[900px]  */}
                        <Circle className="absolute left-[200px] -top-[900px]">
                            <img src="/public/assets/images/cube.png" alt="cube image" className="size-[140px]" />
                        </Circle>
                        {/* left-[200px] top-[270px] */}
                        <Circle className="absolute left-[200px] top-[270px]">
                            <img src="/public/assets/images/cuboid.png" alt="cuboid image" className="size-[140px]" />
                        </Circle>
                        {/* left-[-600px] top-[-80px] */}
                        <Circle className="absolute -left-[600px] -top-[80px]">
                            <img src="/public/assets/images/torus.png" alt="torus image" className="size-[140px]" />
                        </Circle>
                    </div>
                    <img src="../public/assets/images/icosahedron.png" alt="" className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+100px)] max-w-none saturate-[10%] brightness-[4%] hue-rotate-[240deg] " />
                    <img src="../public/assets/images/icosahedron.png" alt="isosahedron" />
                </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center mt-40  md:mt-80">
                    <div className="inline-flex justify-center outline outline-[6px] outline-fuchsia-500/10  h-10 w-5 rounded-full pt-2">
                        <div className="w-1 h-3 bg-fuchsia-500 rounded-full"></div>
                    </div>
                    <p className="font-black  tracking-wider uppercase text-zinc-500 ">Scroll To Learn More</p>
                </div>
        </div>
    </section>
}
