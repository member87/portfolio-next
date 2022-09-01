// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { Cache, CacheContainer } from 'node-ts-cache'
import { MemoryStorage } from 'node-ts-cache-storage-memory'

const myCache = new CacheContainer(new MemoryStorage())



type ReadmeResponse = {
  text: string
}

async function getReadme(project: string): Promise<string> {
  const readme = await myCache.getItem<string>(`readme:${project}`)
  if (readme)
    return readme


  const resp: Response = await fetch(`https://raw.githubusercontent.com/member87/${project}/HEAD/README.md`);
  const str = resp.clone().text();
  await myCache.setItem(`readme:${project}`, str, { ttl: 43200 })

  return str;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReadmeResponse>
) {

  const readme: string = await getReadme('cam-finder-web');
  res.status(200).json({ text: readme })

}
