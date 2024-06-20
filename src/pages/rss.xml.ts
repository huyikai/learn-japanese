import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export const GET = async (context: any) => {
  const posts = await getCollection('post');
  return rss({
    title: 'huyikai post | Post',
    description: 'huyikai post',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/post/${post.slug}/`
    })),
    customData: `<language>zh-cn</language>`
  });
};
