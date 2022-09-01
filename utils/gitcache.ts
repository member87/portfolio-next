import cache from "memory-cache";

export default class GitCache {

  public static async getUrl(url: string): Promise<string> {
    const cacheResp = cache.get(url);
    if (cacheResp)
      return cacheResp;


    const resp: Response = await fetch(url);
    const str = await resp.clone().json();
    cache.put(url, str, 43200);
    return str;
  }

}

