import type { ComponentPropsWithoutRef } from "react"
import { twMerge } from "tailwind-merge"
import {  motion } from "framer-motion";

export const Circle = (props: ComponentPropsWithoutRef<'div'> & {isAnimate   ?: boolean}) => {
    const { className, children, isAnimate = false } = props;
    return <div className={twMerge("inline-flex justify-center items-center size-[240px]  bg-zinc-900 rounded-full relative", className)}>
        <motion.div
        animate ={
            isAnimate && {
            rotate:360
        }}
        transition={{
            ease:'linear',
            duration:15,
            repeat:Infinity
        }}
        className={twMerge('absolute outline outline-[6px] -outline-offset-[6px] inset-0 text-blue-500/10 rounded-full border-[6px] border-transparent ',
            isAnimate && "border-t-blue-500/30"
        )} />
        {children}
    </div>;
}
