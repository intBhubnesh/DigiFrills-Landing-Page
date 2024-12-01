import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";

export const Card = (props : ComponentPropsWithoutRef<'div'> & {color ?: string; buttonString ?: string} ) => {
    const {color, children, title, className, buttonString } = props;
    return  <div className={twMerge('relative z-0 p-8 md:p-10',className)} >
    {/* corner box glow*/}
    <div className={twMerge("absolute rounded-xl size-20 top-1.5 right-1.5 bg-blue-500 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300",
                        color == 'lime' && "bg-lime-500",
                        color == 'cyan' && "bg-cyan-500",
                        color == 'violet' && "bg-violet-500",
                        )}></div>
    {/* corner box */}
    <div className={twMerge("absolute rounded-xl size-20 top-1.5 right-1.5 bg-blue-500 -z-10 group-hover:bg-blue-400",
                                color == 'lime' && "bg-lime-500 group-hover:bg-lime-400",
                                color == 'cyan' && "bg-cyan-500 group-hover:bg-cyan-400",
                                color == 'violet' && "bg-violet-500 group-hover:bg-violet-400"
    )}></div>
    {/* cutCorner*/}
    <div className="absolute rounded-2xl  inset-0 bg-zinc-800 -z-10 [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
    {/* card containt */}
    <div className="">
        {/* content */}
        <div>{children}</div>
        {/* action buttons */}
        <div className="flex justify-between mt-12">
            <Button color={color}>{buttonString || 'Learn More'}</Button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-8 text-zinc-500 -translate-x-2 group-hover:translate-x-0 transition duration-300 group-hover:text-zinc-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
        </div>
    </div>
</div>
}
