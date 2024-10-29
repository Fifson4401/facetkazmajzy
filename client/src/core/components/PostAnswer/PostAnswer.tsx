'use client';

import { BlogPageAnswerProps } from '@/api/interfaces/blogPost';
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { FC } from 'react';
import PostContentRenderer from '../PostContentRenderer/PostContentRenderer';
import PostContentImage from '../PostContentImage/PostContentImage';
import { FaAngleDown } from 'react-icons/fa';
import { ImageHandler } from '../ImageHandler';

interface PostAnswerProps {
  answer?: BlogPageAnswerProps
}

const PostAnswer: FC<PostAnswerProps> = ({ answer }) => {

  if (!answer) {
    return null
  }

  return (
    <div className="w-full md:px-11">
      <Accordion
        variant="bordered"
        motionProps={animationVariant}
        className="w-full border-[#cc3266]"
      >
        <AccordionItem
          id="content-container"
          key="1"
          aria-label="Odpowiedź na zadanie"
          title="Zobacz odpowiedź!"
          indicator={<FaAngleDown color="#323232" />}
        >
          {!!answer.length && answer.map((item, index) =>
            <div key={`answer-${item.id}-${index}`}>
              <PostContentRenderer
                content={item.TEX}
                className="pb-4 md:px-4"
              />
              <PostContentImage image={item.image?.image} />
            </div>
          )}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

const animationVariant = {
  variants: {
    enter: {
      y: 0,
      opacity: 1,
      height: 'auto',
      transition: {
        height: {
          type: 'spring',
          stiffness: 500,
          damping: 30,
          duration: 1,
        },
        opacity: {
          easings: 'ease',
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
          easings: 'ease',
          duration: 0.25,
        },
        opacity: {
          easings: 'ease',
          duration: 0.3,
        },
      },
    },
  },
};

export default PostAnswer;
