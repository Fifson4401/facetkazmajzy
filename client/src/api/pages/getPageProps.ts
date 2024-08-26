import { ParsedUrlQuery } from "querystring";
import {
  DefaultPageProps,
  PageDataAnd,
  PageDataOr,
} from "../interfaces/defaults";
import qs from "qs";
import client from "../client";
import { StrapiFindOneResponse } from "../interfaces/strapiResponse";
import { notFound } from "next/navigation";

export const getPageProps = async <T>(
  url: string,
  _populate?: Record<string, object>,
  query?: ParsedUrlQuery
): Promise<{
  props: DefaultPageProps<PageDataOr<T>>;
}> => {
  const queryParams = query && `&${qs.stringify(query)}`;

  try {
    const {
      data: {
        data: { attributes },
      },
    } = await client.get<StrapiFindOneResponse<PageDataAnd<T>>>(
      `api/${url}?${seoQuery(_populate)}${queryParams}`
    );

    return { props: { pageData: attributes } };
  } catch (error) {
    console.error("Error fetching HomePage data:", error);
    notFound();
  }
};

export const seoQuery = (populate: Record<string, object> = {}): string => {
  const query = qs.stringify(
    {
      populate: {
        seo: {
          populate: {
            metaImage: { populate: "*" },
          },
        },
        ...populate,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  return query;
};
