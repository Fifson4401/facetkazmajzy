'use client';

import { FC } from 'react';
import PostTile from '../PostTile/PostTile';

// Hook do pobierania podobnych postów (przykładowy)
const useRelatedPosts = () => {
  // Tu powinno być prawdziwe API call
  return {
    posts: [
      {
        title: "Przykładowe zadanie 1",
        description: "Opis pierwszego zadania...",
        slug: "zadanie-1",
        category: { data: { id: 1, attributes: { name: "Kategoria 1" } } },
        sub_category: { data: { id: 1, attributes: { name: "Podkategoria 1" } } },
        tags: { data: [{ id: 1, attributes: { name: "Tag 1" } }] }
      },
      {
        title: "Przykładowe zadanie 2",
        description: "Opis drugiego zadania...",
        slug: "zadanie-2",
        category: { data: { id: 2, attributes: { name: "Kategoria 2" } } },
        sub_category: { data: { id: 2, attributes: { name: "Podkategoria 2" } } },
        tags: { data: [{ id: 2, attributes: { name: "Tag 2" } }] }
      },
      {
        title: "Przykładowe zadanie 3",
        description: "Opis trzeciego zadania...",
        slug: "zadanie-3",
        category: { data: { id: 3, attributes: { name: "Kategoria 3" } } },
        sub_category: { data: { id: 3, attributes: { name: "Podkategoria 3" } } },
        tags: { data: [{ id: 3, attributes: { name: "Tag 3" } }] }
      },
    ],
    loading: false,
  };
};

const PostBlogs: FC = () => {
  const { posts } = useRelatedPosts();

  return (
    <div className="w-full px-4 md:px-11">
      <h2 className="mb-6 text-center text-3xl font-bold">
        Kolejne też za darmo!!!
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((post, index) => (
          <div key={`similar_post_${index}`} className="aspect-square">
            <PostTile {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostBlogs;