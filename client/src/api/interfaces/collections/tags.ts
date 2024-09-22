import { DefaultPageAttributes } from '../defaults';
import { StrapiFindAllResponse } from '../strapiResponse';

export type PropsWithTags<T = object> = T & {
  tags?: TagsArray;
};

export type TagAttributes = DefaultPageAttributes & {
  name: string;
};

export type TagsArray = StrapiFindAllResponse<TagAttributes>;
