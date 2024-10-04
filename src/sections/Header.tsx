import { CutCornerButton } from "../components/CutCornerButton";

export const HeaderSection = () => {
    return <header className=" sticky z-10 top-0 bg-zinc-900/50 backdrop-blur-lg">
        <div className=" container ">
            <div className="flex justify-between h-24 items-center md:h-28" >
                <div>
                    <img src="../public/assets/images/logo.svg" alt="logo" />
                </div>
                <div className=" flex gap-4 items-center">
                    <CutCornerButton className="hidden md:inline-flex">Get Started</CutCornerButton>
                    <div className="size-10 relative">
                        <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="h-0.5 w-5 bg-zinc-300 translate-y-1"></div>
                        </div>
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="h-0.5 w-5 bg-zinc-300 -translate-y-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>;
};