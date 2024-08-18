import axios from "axios";
import client from "./client";
import qs from "qs";

export async function fetchHomePageData() {
  const query = qs.stringify({
    populate: {
      seo: { populate: { metaImage: { populate: "*" } } },
      header: { populate: "*" },
      search: { populate: { image: { populate: "*" } } },
    },
  });

  try {
    const response = await client.get(`/api/home-page?${query}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching HomePage data:", error);
    throw new Error("Failed to fetch HomePage data");
  }
}
