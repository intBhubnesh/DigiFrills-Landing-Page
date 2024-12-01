import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Button = (props : ComponentPropsWithoutRef<'button'> & {color ?: string}) => {
    const {className, children, color} = props;
    return <button className={twMerge("uppercase font-black text-blue-500",
        color == 'lime' && "text-lime-500",
        color == 'cyan' && "text-cyan-500 ",
        color == 'violet' && "text-violet-500",
        className
)}>{children}</button>

}
