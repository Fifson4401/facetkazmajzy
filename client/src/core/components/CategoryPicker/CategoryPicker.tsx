import { FC, useState, useEffect } from 'react';
import { CategoriesArray } from '@/api/interfaces/collections/categories';
import { RouteToProps } from '@/api/interfaces/blog';
import { Card, CardBody } from "@heroui/card";
import { motion, AnimatePresence } from 'framer-motion';

interface CategoryPickerProps {
  setFilter: (data: RouteToProps) => void;
  categories?: CategoriesArray;
  query?: Record<string, string | undefined>;
}

const CategoryPicker: FC<CategoryPickerProps> = ({
  categories,
  setFilter,
  query,
}) => {
  const [showComponent, setShowComponent] = useState(!query?.category);

  useEffect(() => {
    setShowComponent(!query?.category);
  }, [query?.category]);

  if (!categories) {
    return null;
  }

  return (
    <AnimatePresence>
      {showComponent && (
        <motion.div
          className="flex w-full flex-row flex-wrap justify-center gap-6 overflow-hidden"
          initial={{ opacity: 0, y: 20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: 20, height: 0 }}
          transition={{ duration: 0.25 }}
          layout
        >
          {categories.data.map((item) => (
            <Card
              isBlurred
              className="w-full border-none bg-[#015c99] text-white shadow-md hover:bg-[#fa6bb4] md:w-fit lg:w-1/4"
              shadow="sm"
              isPressable
              onPress={() =>
                setFilter({ name: 'category', value: item.id.toString() })
              }
              key={item.id}
            >
              <CardBody className="justify-center text-center">
                <p className="text-sm md:text-base md:font-semibold">
                  {item.attributes.name}
                </p>
              </CardBody>
            </Card>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CategoryPicker;
