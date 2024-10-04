import type { CollectionEntry } from "astro:content"
import { Card } from "../components/Card"
import { Tag } from "../components/Tag"
import { getPostColorFromCategory } from "../utils/postUtil"
import { CutCornerButton } from "../components/CutCornerButton"
import { twMerge } from "tailwind-merge"


export const LatestPost = (props: {
    latestPost: CollectionEntry<'blog'>[];
}) => {
    const { latestPost } = props;
    return <section className="py-60 ">
        {/* container */}
        <div className="container  ">
            {/* heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-center">Your portal to everything blockchain.</h2>
            {/* desc */}
            <p className="mt-8 text-center text-xl lg:text-2xl font-body text-zinc-400">Keep up with the newest trends, updates, and insights in the blockchain world, updated weekly.</p>
            {/* Post wrapper container */}
            <div className="mt-16 md:mt-28 grid gap-8 grid-cols-1 md:grid-cols-2">
                {/* post col 1 */}
                <div className="col-span-1 flex flex-col gap-8">
                    {latestPost.map(({ data: { title, description, category } }, postIndex) => (
                        <Card className={twMerge('group', (postIndex % 2 != 0) && 'md:hidden')} key={postIndex} buttonString="Read More" color={getPostColorFromCategory(category)}>
                            <Tag tag={category} color={getPostColorFromCategory(category)} />
                            <h3 className="font-heading font-black text-3xl mt-3">{title}</h3>
                            <p className="text-lg text-zinc-400 mt-6 ">{description}</p>
                        </Card>
                    ))}
                </div>
                {/* post col 2 */}
                <div className="col-span-1 hidden md:flex flex-col gap-8 md:mt-16">
                    {latestPost.map(({ data: { title, description, category } }, postIndex) => (
                        <Card className={twMerge('group', (postIndex % 2 == 0) && 'hidden')} key={postIndex} buttonString="Read More" color={getPostColorFromCategory(category)}>
                            <Tag tag={category} color={getPostColorFromCategory(category)} />
                            <h3 className="font-heading font-black text-3xl mt-3">{title}</h3>
                            <p className="text-lg text-zinc-400 mt-6">{description}</p>
                        </Card>
                    ))}
                </div>
            </div>
            {/* button */}
            <div className="flex justify-center mt-48 md:mt-32">
                <CutCornerButton>Read The Blog</CutCornerButton>
            </div>
        </div>
    </section>
}
