import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "6lfzruz8",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skutYPFFucUuC8Eu53rS4tB5jG6RUrefvN2gJXY458HxfuRhRUQm5MjIb3BU9MHLJhkVzrXbBZO0fM3ZXv0JDatsIc4SloEofzfTkrCSNBVOsMCMUWI7WNd4j4dDjlR5SuJTzHQ7vyNs67TnzdINkgvGAdcoqtaDFFDgJB7rAfNL8QyQcWSe",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
