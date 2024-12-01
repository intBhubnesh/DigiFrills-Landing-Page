import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Tag = (props: ComponentPropsWithoutRef<'div'> & {color ?: string; tag ?: string}) => {
    const {color, tag} = props ;
    return <div className={twMerge("inline-flex px-3 py-1.5 rounded-full bg-lime-500/20 uppercase text-lime-500 text-xs font-heading tracking-wider font-extrabold items-center",
        color == 'blue' && "bg-blue-500/20 text-blue-500",
        color == 'lime' && "bg-lime-500/20 text-lime-500",
        color == 'cyan' && "bg-cyan-500/20 text-cyan-500",
        color == 'violet' && "bg-violet-500/20 text-violet-500"
    )}>
            {tag}
        </div>
}
