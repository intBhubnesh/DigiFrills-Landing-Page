import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";

export const Hexagon = (props: ComponentPropsWithoutRef<'svg'> & { size ?: number; reverse ?: boolean; duration?: number; }) => {
    const { className, size=800 , reverse, duration=30 } = props;
    const [ totalPathLength, setTotalPathLength ] = useState<number>(0)
    const pathRef = useRef<SVGPathElement>(null)

    useLayoutEffect(() => {
        const pathLength = pathRef.current?.getTotalLength();

        // break out if hexagon dom doesnt exit for some reason
        if(!pathLength) return ;

        // calculate the actual path of the heagon to give it a infinite animation
        const scalePathLength =(pathLength * size) / 82 ; // 82 is exact width of the svg element

        // update the state
        setTotalPathLength(scalePathLength)
    }, []);


    return <div className="inline-flex relative">


    <svg width="82" height="72" viewBox="0 0 82 72" fill="none" strokeWidth="6" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" style={{
        height: size,
        width : size
    }} className={twMerge("text-blue-500/10 -rotate-6",className)}>
        <path d="M3.44337 38.5C2.55021 36.953 2.55021 35.047 3.44338 33.5L20.0566 4.72501C20.9498 3.178 22.6004 2.22501 24.3868 2.22501H57.6132C59.3996 2.22501 61.0502 3.178 61.9434 4.72501L78.5566 33.5C79.4498 35.047 79.4498 36.953 78.5566 38.5L61.9434 67.275C61.0502 68.822 59.3996 69.775 57.6132 69.775H24.3867C22.6004 69.775 20.9498 68.822 20.0566 67.275L3.44337 38.5Z" ref={pathRef}  vector-effect="non-scaling-stroke " />
    </svg>

    {/* animation layer  */}
        { totalPathLength && (
        <motion.svg
        width="82"
        height="72"
        viewBox="0 0 82 72"
        fill="none"
        strokeWidth="6"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        className={twMerge("text-blue-500/30 -rotate-6 absolute",className)}

        initial={{
            strokeDashoffset: 0,
        }}

        animate={{
            strokeDashoffset: reverse ? totalPathLength  : totalPathLength * -1,
        }}

        transition={{
            repeat:Infinity,
            duration: duration,
            ease:"linear",
        }}

        style={{
            strokeDasharray:`500 ${totalPathLength - 500}`,
            height: size,
            width : size
        }}
        >

            <path d="M3.44337 38.5C2.55021 36.953 2.55021 35.047 3.44338 33.5L20.0566 4.72501C20.9498 3.178 22.6004 2.22501 24.3868 2.22501H57.6132C59.3996 2.22501 61.0502 3.178 61.9434 4.72501L78.5566 33.5C79.4498 35.047 79.4498 36.953 78.5566 38.5L61.9434 67.275C61.0502 68.822 59.3996 69.775 57.6132 69.775H24.3867C22.6004 69.775 20.9498 68.822 20.0566 67.275L3.44337 38.5Z"  vector-effect="non-scaling-stroke " />
        </motion.svg>
        )}

    </div>
}
