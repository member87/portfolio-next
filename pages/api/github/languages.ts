// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import GitCache from '../../../utils/gitcache'

type langResponse = {
  text: string
}

type langRequest = {
  project: string
}

async function getReadme(project: string): Promise<string> {
  return GitCache.getUrl(`https://api.github.com/repos/member87/${project}/languages`);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<langResponse>
) {

  let body: langRequest;

  try {
    body = JSON.parse(req.body);
  } catch (e) {
    body = req.body
  }

  const info: string = await getReadme(body.project);
  res.status(200).json({ text: info })
}
