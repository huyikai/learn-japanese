import type { CollectionEntry } from 'astro:content';
export function sortByPubDate(
  a: CollectionEntry<'words' | 'grammars'>,
  b: CollectionEntry<'words' | 'grammars'>
) {
  const dateA = a.data.pubDate ? new Date(a.data.pubDate).getTime() : 0;
  const dateB = b.data.pubDate ? new Date(b.data.pubDate).getTime() : 0;
  return dateA - dateB;
}
