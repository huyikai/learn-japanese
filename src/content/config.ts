// 从 `astro:content` 导入辅助工具
import { defineCollection, z } from 'astro:content';
// 为每一个集合定义一个 `type` 和 `schema`
const schema = z.object({
  title: z.string(),
  pubDate: z.date().optional(),
  description: z.string(),
  author: z.string(),
  image: z
    .object({
      url: z.string(),
      alt: z.string()
    })
    .optional(),
  tags: z.array(z.string()).optional()
});
const postCollection = defineCollection({
  type: 'content',
  schema
});
const stackCollection = defineCollection({
  type: 'content',
  schema
});
const projectCollection = defineCollection({
  type: 'content',
  schema
});
// 导出一个单独的 `collections` 对象来注册你的集合
export const collections = {
  post: postCollection,
  stack: stackCollection,
  project: projectCollection
};
