import { twMerge } from "tailwind-merge"

const testimonials = [{
    'quote': '"The user experience is phenomenal, and the support team is always there to help. Highly recommended!"',
    'pic': '../public/assets/images/avatar-erica-wyatt.jpg',
    'name': 'Erica Wyatt',
    'title': 'Product Manager - BlockLink',
},
{
    'quote': '"Our productivity has skyrocketed since we started using Blockforge. Its a game-changer for our team."',
    'pic': '../public/assets/images/avatar-noel-baldwin.jpg',
    'name': 'Noel Baldwin',
    'title': 'Lead Deeloper - BitBridge',
},
{
    'quote': '"The intigration process was seamless, and the performance improvement are beyond our expectations."',
    'pic': '../public/assets/images/avatar-harry-bender.jpg',
    'name': 'Harry Bender',
    'title': 'CTO - CryptoSolutions',
}
]

export const TestimonialSection = () => {
    return <section className="py-32 bg-zinc-800 ">
        <div className="container ">

            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8">
                {testimonials.map(({ quote, pic, name, title }, testimonialsIndex) => (
                    <blockquote key={testimonialsIndex} className={twMerge((testimonialsIndex === 2) && 'md:hidden lg:block')}>
                        <p className="text-3xl lg:text-4xl font-black font-heading" >{quote}</p>
                        <cite className="">
                            <div className=" mt-8 flex gap-3 items-center">
                                <div>
                                    <img src={pic} className="rounded-full size-16" />
                                </div>
                                <div className="">
                                    <div className="text-lg  font-black not-italic">{name}</div>
                                    <div className="text-zinc-400 not-italic">{title}</div>
                                </div>
                            </div>
                        </cite>
                    </blockquote>
                ))}
            </div>

        </div>
    </section>
}
