// Últimas entradas del blog, leídas del RSS en el momento del build (no en el
// navegador): la web sigue sin JavaScript y la CSP no cambia. Si el RSS no
// responde, la sección simplemente no se muestra.
const RSS = 'https://blog.jelopez.link/rss.xml';

export interface BlogPost { title: string; href: string; description: string; date: Date; tags: string[] }

const decode = (s: string) =>
  s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&amp;/g, '&')
    .trim();

let cache: Promise<BlogPost[]> | undefined;

export function latestPosts(n = 3): Promise<BlogPost[]> {
  cache ??= (async () => {
    try {
      const res = await fetch(RSS, { signal: AbortSignal.timeout(8000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const xml = await res.text();
      return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, item]) => {
        const get = (tag: string) => decode(item.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`))?.[1] ?? '');
        return {
          title: get('title'),
          href: get('link'),
          description: get('description'),
          date: new Date(get('pubDate')),
          tags: [...item.matchAll(/<category>([\s\S]*?)<\/category>/g)].map((m) => decode(m[1])),
        };
      }).filter((p) => p.title && p.href.startsWith('https://blog.jelopez.link/'));
    } catch (err) {
      console.warn(`[blog] No se pudo leer el RSS (${(err as Error).message}); se omite «Del blog».`);
      return [];
    }
  })();
  return cache.then((posts) => posts.slice(0, n));
}
