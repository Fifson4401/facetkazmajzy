'use client'

import { BlogPageAnswerProps } from "@/api/interfaces/blogPost";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FC } from "react";
import PostContentRenderer from "../PostContentRenderer/PostContentRenderer";
import PostContentImage from "../PostContentImage/PostContentImage";

const PostAnswer: FC<BlogPageAnswerProps> = ({ TEX, image }) => {
  return (
    <div className="md:px-11 w-full">
      <Accordion variant="bordered" motionProps={animationVariant} className="w-full border-[#858585]">
        <AccordionItem key="1" aria-label="Odpowiedź na zadanie" title="Zobacz odpowiedź!">
          <PostContentRenderer
            key={`TEX_answer`}
            content={TEX}
            className="md:px-4"
          />
          <PostContentImage
            key={`image_answer`}
            image={image}
          />
        </AccordionItem>
      </Accordion>
    </div>
  );
}

const animationVariant = {
  variants: {
    enter: {
      y: 0,
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          type: "spring",
          stiffness: 500,
          damping: 30,
          duration: 1,
        },
        opacity: {
          easings: "ease",
          duration: 1,
        },
      },
    },
    exit: {
      y: -10,
      opacity: 0,
      height: 0,
      transition: {
        height: {
          easings: "ease",
          duration: 0.25,
        },
        opacity: {
          easings: "ease",
          duration: 0.3,
        },
      },
    },
  },
}

export default PostAnswer