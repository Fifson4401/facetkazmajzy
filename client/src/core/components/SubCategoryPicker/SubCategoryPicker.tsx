import { FC, useState, useEffect } from "react";
import { RouteToProps } from "@/api/interfaces/blog";
import { Card, CardBody } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import useSubCategory from "./hooks";
import { getDisplayCategory } from "../CategoryChip/utils";
import { StrapiResponse } from "@/api/interfaces/strapiResponse";
import { SubCategoryAttributes } from "@/api/interfaces/collections/subCategories";

interface SubCategoryPickerProps {
  setFilter: (data: RouteToProps) => void;
  subCategories: StrapiResponse<SubCategoryAttributes>[]
  query?: Record<string, string | undefined>;
}

const SubCategoryPicker: FC<SubCategoryPickerProps> = ({ setFilter, query, subCategories }) => {
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
          className="flex flex-row justify-center gap-6 overflow-hidden flex-wrap"
          initial={{ opacity: 0, y: 20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: 20, height: 0 }}
          transition={{ duration: 0.25 }}
          layout
        >
          {subCategories.map((item) => {
            const isSelected = query?.subCategory === item.id.toString()

            return (
              <Card
                isBlurred
                className={`border-none md:max-w-36 text-white bg-[#015c99] hover:bg-[#fa6bb4] ${isSelected && "bg-[#a40066]"}`}
                shadow="sm"
                isPressable
                onPress={() => setFilter({ name: "subCategory", value: isSelected ? undefined : item.id.toString() })}
                key={item.id}
              >
                <CardBody className="text-center justify-center">
                  <p className="md:font-semibold text-sm md:text-base">
                    {getDisplayCategory(item.attributes.name)}
                  </p>
                </CardBody>
              </Card>
            )
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubCategoryPicker;
