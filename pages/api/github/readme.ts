// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import GitCache from "../../../utils/gitcache";

type readmeResponse = {
  text: string;
};

type readmeRequest = {
  project: string;
};

async function getReadme(project: string): Promise<string> {
  return GitCache.getUrl(
    `https://raw.githubusercontent.com/member87/${project}/HEAD/README.md`,
  );
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<readmeResponse>,
) {
  let body: readmeRequest;

  try {
    body = JSON.parse(req.body);
  } catch (e) {
    body = req.body;
  }

  const info: string = await getReadme(body.project);
  res.status(200).json({ text: info });
}
