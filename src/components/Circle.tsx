import type { ComponentPropsWithoutRef } from "react"
import { twMerge } from "tailwind-merge"

export const Circle = (props: ComponentPropsWithoutRef<'div'>) => {
    const { className, children } = props;
    return <div className={twMerge("inline-flex justify-center items-center size-[240px] outline outline-[6px] -outline-offset-[6px] text-fuchsia-500/10 bg-zinc-900 rounded-full", className)}>
        {children}
    </div>;
}