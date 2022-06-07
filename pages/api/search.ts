// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Innertube from "youtubei.js";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query } = req;
  const { q } = query;
  const { s } = query;
  const isSugestion = s;
  const isQuery = q;

  if (isQuery) {
    const youtube = await new Innertube({ gl: "US" });
    res.status(200).json(await youtube.search(q, { client: "YOUTUBE" }));
  } else if (isSugestion) {
    const youtube = await new Innertube({ gl: "US" });
    res
      .status(200)
      .json(await youtube.getSearchSuggestions(s, { client: "YOUTUBE" }));
  } else {
    res.status(400).json({
      Error:
        "Please provide a query or a suggestion query. Example: /api/search?q=query or /api/search?s=suggestion",
    });
  }
}
