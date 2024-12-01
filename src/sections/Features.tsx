import { useEffect, useState } from "react"
import { Card } from "../components/Card"

const cardData = [{
    image: '/assets/images/pill.png',
    heading: "Software Development",
    description: "Effortlessly integrate and manage  blockchain data with our cutting-edge API. design for seamless connectivity",
    color: 'blue'
},
{
    image: '/assets/images/cuboid.png',
    heading: "Digital Transformation",
    description: "Empower your application with decentralized data solutions, ensuring security and transpirancy at every step.",
    color: 'lime'
},
{
    image: '/assets/images/cone.png',
    heading: "AI & ML",
    description: "Unlock the potential of the next-gen smart contract with robust and scalable API, tailored for the modern blockchain needs.",
    color: 'cyan'
},
{
    image: '/assets/images/satellite.png',
    heading: "ERP & CRM Automation",
    description: "Intigrate  blockchain technology seamlessly into your project, with minimal effort and maximal efficiency. ",
    color: 'violet'
}]

export const FeaturesCards = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        // if the card is hovered do nothing
        if(isHovered) return;

        // timmer to auto translate cards
        const timeout =  setTimeout(() => {
            setSelectedCardIndex(prev => prev === (cardData.length - 1) ? 0 : prev + 1)
    }, 3000)
        return () => {
            clearTimeout(timeout)
        }
    }, [selectedCardIndex,[isHovered]])

    return <section className="overflow-x-hidden py-24 md:-mt-28 ">
        <div className="container ">
            <h2 className="text-center  font-black font-heading text-4xl md:text-5xl lg:text-6xl ">Discover the space of services with Digifrills.</h2>
            {/* cards wrapper */}
            <div className="mt-36 lg:mt-48 flex  ">
                {/* cards inner-wrapper - avoid card from streaching in flex-box */}
                <div className="flex flex-none gap-8">
                    {/* cards */}
                    {cardData.map(({ image, heading, description, color } ) => (
                        <div
                        key={heading}
                        className="inline-flex transition-all duration-500"
                        style={{
                            transform : `translateX(calc((-100% - 2rem)* ${selectedCardIndex}))`
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        >
                        <Card className="max-w-xs group md:max-w-md" key={heading} color={color}>
                            {/* card containt */}
                            <div className="children">
                                {/* image flex wrapper */}
                                <div className="flex justify-center">
                                    {/* image inline-flex wrapper */}
                                    <div className="inline-flex -mt-28 relative">
                                        {/* image shadow */}
                                        <div className="absolute top-[calc(100%+16px)] min-w-full h-4 bg-zinc-950/70 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-zinc-950/30 transition duration-300"></div>
                                        {/* image  */}
                                        <img src={image} alt="pill image" className="size-40 group-hover:-translate-y-6 transition duration-300" />
                                    </div>
                                </div>
                                {/* text content */}
                                <h3 className=" font-heading text-3xl font-black mt-12">{heading}</h3>
                                <p className="text-lg text-zinc-400 mt-4">{description}</p>
                                {/* action buttons */}
                            </div>

                        </Card>
                        </div>
                    ))}

                </div>
            </div>
            {/* card navigation indicator */}
            <div className="flex justify-center ">
                <div className="inline-flex justify-center rounded-full bg-zinc-950 gap-4 p-2.5 mt-10">
                    {cardData.map(({heading}, cardIndex) => (
                        <div key={heading} className={`size-2.5 rounded-full ${selectedCardIndex !== cardIndex ? 'bg-zinc-500' : 'bg-zinc-300'} cursor-pointer`}
                        onClick={()=> {setSelectedCardIndex(cardIndex)}}></div>
                    ))}
                </div>
            </div>
        </div>
    </section>
}
