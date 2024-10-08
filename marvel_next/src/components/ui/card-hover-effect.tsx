"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number;
    title: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
    variantDescription: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 gap-2",
        className
      )}
    >
      {items?.map((item, idx) => (
        <section
          key={idx}
          className="relative group block p-2 m-auto  "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Link href={`/comic/${item?.id}`}>
            <Card thumbnail={item.thumbnail} variantDescription={item.variantDescription}>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Link>
        </section>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  thumbnail,
  variantDescription,
}: {
  className?: string;
  children: React.ReactNode;
  thumbnail: {
    path: string;
    extension: string;
  };
  variantDescription: string;
}) => {
  const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <div
      className={cn(
        "relative z-20 bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 p-4",
        "h-64 w-64 rounded-lg overflow-hidden", // Set a fixed size for a square shape
        className
      )}
    >
      <div className="relative z-50 h-full w-full">
        <Image
          src={imageUrl}
          alt="Thumbnail"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 rounded-lg opacity-75 group-hover:opacity-50 transition-opacity"
        />
        <div className="p-4 relative z-10">
          <p className="text-zinc-400 text-xs italic">{variantDescription}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
