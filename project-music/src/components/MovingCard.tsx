import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import img1 from "../../public/img1.jpg"
import img2 from "../../public/img3.jpg"
import img3 from "../../public/img2.jpg"
import img4 from "../../public/img1.jpg"
import img5 from "../../public/img3.jpg"
const testimonials = [
    {
        title: "A Tale of Two Cities",
        description:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it.",
        image: 'http://localhost:3000/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg&w=640&q=75',
    },
    {
        title: "Hamlet",
        description:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to.",
        image: 'http://localhost:3000/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F71YAIFU48IL._AC_UL640_QL65_ML3_.jpg&w=2048&q=75',
    },
    {
        title: "A Dream Within a Dream",
        description: "All that we see or seem is but a dream within a dream.",
        image: 'http://localhost:3000/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F51eg55uWmdL._AC_UX679_.jpg&w=2048&q=75',
    },
    {
        title: "Pride and Prejudice",
        description:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        image: 'http://localhost:3000/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F81fPKd-2AYL._AC_SL1500_.jpg&w=2048&q=75',
    },
    {
        title: "Mob-harry",
        description:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore.",
        image: 'http://localhost:3000/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg&w=2048&q=75',
    },
];
export default function MovingCard() {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>

    )
}
