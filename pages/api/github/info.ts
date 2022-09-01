import type { NextApiRequest, NextApiResponse } from 'next'
import GitCache from '../../../utils/gitcache'


type infoResponse = {
  text: string
}

async function getInfo(project: string): Promise<string> {
  return GitCache.getUrl(`https://api.github.com/repos/member87/${project}`);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<infoResponse>
) {
  const info: string = await getInfo(JSON.parse(req.body).project);
  res.status(200).json({ text: info })

}
