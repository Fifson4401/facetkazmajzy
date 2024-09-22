export type StrapiResponse<T> = {
  id: number;
  attributes: T;
};

export type Pagination = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
};

export type StrapiFindAllResponse<T> = {
  data: StrapiResponse<T>[];
  meta: {
    pagination?: Pagination;
  };
};

export type StrapiFindOneResponse<T> = {
  data: StrapiResponse<T>;
  meta: object;
};
