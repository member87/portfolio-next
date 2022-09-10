import type { NextApiRequest, NextApiResponse } from 'next'
import GitCache from '../../../utils/gitcache'


type infoResponse = {
  text: string
}

type infoRequest = {
  project: string
}

async function getInfo(project: string): Promise<string> {
  return GitCache.getUrl(`https://api.github.com/repos/member87/${project}`);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<infoResponse>
) {

  let body: infoRequest;

  try {
    body = JSON.parse(req.body);
  } catch (e) {
    body = req.body
  }

  const info: string = await getInfo(body.project);
  res.status(200).json({ text: info })

}
