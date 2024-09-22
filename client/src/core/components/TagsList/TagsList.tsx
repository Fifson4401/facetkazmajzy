import { FC, useEffect, useState } from 'react';
import { TagsArray } from '@/api/interfaces/collections/tags';
import { RouteToProps } from '@/api/interfaces/blog';
import TagChip from '../TagChip/TagChip';
import { AnimatePresence, motion } from 'framer-motion';
import useListChips from './hooks';

interface TagsListProps {
  tags?: TagsArray;
  setFilter: (data: RouteToProps) => void;
  show: boolean;
  query?: Record<string, string | undefined>;
}

const TagsList: FC<TagsListProps> = ({ tags, setFilter, show, query }) => {
  const [showComponent, setShowComponent] = useState(false);

  const { filteredTags } = useListChips({ query, tags });

  useEffect(() => {
    setShowComponent(show && !!filteredTags.length);
  }, [show, filteredTags]);

  if (!tags) {
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
        >
          {filteredTags.map((item, index) => {
            return (
              <TagChip
                tag={item.attributes}
                key={`TagList_${item.id}_${index}`}
                onClick={() =>
                  setFilter({ name: 'tag', value: item.id.toString() })
                }
              />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TagsList;
