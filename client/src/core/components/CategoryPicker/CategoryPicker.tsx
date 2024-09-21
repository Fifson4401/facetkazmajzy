import { FC, useState, useEffect } from "react";
import { CategoriesArray } from "@/api/interfaces/collections/categories";
import { RouteToProps } from "@/api/interfaces/blog";
import { Card, CardBody } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";

interface CategoryPickerProps {
  setFilter: (data: RouteToProps) => void;
  categories?: CategoriesArray;
  query?: Record<string, string | undefined>;
}

const CategoryPicker: FC<CategoryPickerProps> = ({ categories, setFilter, query }) => {
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
          className="flex flex-row justify-center gap-6 overflow-hidden flex-wrap"
          initial={{ opacity: 0, y: 20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: 20, height: 0 }}
          transition={{ duration: 0.25 }}
          layout
        >
          {categories.data.map((item) => (
            <Card
              isBlurred
              className="border-none max-w-36 w-1/2 md:w-1/3 lg:w-1/4 text-white bg-[#015c99] hover:bg-[#fa6bb4] shadow-md"
              shadow="sm"
              isPressable
              onPress={() => setFilter({ name: "category", value: item.id.toString() })}
              key={item.id}
            >
              <CardBody className="text-center justify-center">
                <p className="md:font-semibold text-sm md:text-base">
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