import { FC, useState, useEffect } from 'react';
import { RouteToProps } from '@/api/interfaces/blog';
import { Card, CardBody } from "@heroui/card";
import { motion, AnimatePresence } from 'framer-motion';
import { getDisplayCategory } from '../CategoryChip/utils';
import { StrapiResponse } from '@/api/interfaces/strapiResponse';
import { SubCategoryAttributes } from '@/api/interfaces/collections/subCategories';

interface SubCategoryPickerProps {
  setFilter: (data: RouteToProps) => void;
  subCategories: StrapiResponse<SubCategoryAttributes>[];
  query?: Record<string, string | undefined>;
}

const SubCategoryPicker: FC<SubCategoryPickerProps> = ({
  setFilter,
  query,
  subCategories,
}) => {
  const [showComponent, setShowComponent] = useState(!query?.category);

  useEffect(() => {
    setShowComponent(!!query?.category && !!subCategories.length);
  }, [query?.category, subCategories]);

  if (!subCategories) {
    return null;
  }

  return (
    <AnimatePresence>
      {showComponent && (
        <motion.div
          className="flex flex-row flex-wrap justify-center gap-6 overflow-hidden"
          initial={{ opacity: 0, y: 20, height: 0, marginBottom: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto', marginBottom: 16 }}
          exit={{ opacity: 0, y: 20, height: 0, marginBottom: 0 }}
          transition={{ duration: 0.25 }}
          layout
        >
          {subCategories.map((item) => {
            const isSelected = query?.subCategory === item.id.toString();
            return (
              <Card
                isBlurred
                className={`w-2/5 border-none bg-[#015c99] text-white hover:bg-[#fa6bb4] sm:w-fit ${isSelected && 'bg-[#a40066]'}`}
                shadow="sm"
                isPressable
                onPress={() =>
                  setFilter({
                    name: 'subCategory',
                    value: isSelected ? undefined : item.id.toString(),
                  })
                }
                key={item.id}
              >
                <CardBody className="justify-center text-center">
                  <p className="text-sm md:text-base md:font-semibold">
                    {getDisplayCategory(item.attributes.name)}
                  </p>
                </CardBody>
              </Card>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubCategoryPicker;
