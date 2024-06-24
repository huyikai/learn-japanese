// 从 `astro:content` 导入辅助工具
import { defineCollection, z } from 'astro:content';
// 为每一个集合定义一个 `type` 和 `schema`
const wordSchema = z.object({
  title: z.string(),
  tags: z.array(z.string()).optional(),
  kana: z.string(),
  tone: z.string(),
  type: z.string()
});
const wordCollection = defineCollection({
  type: 'content',
  schema: wordSchema
});

// 导出一个单独的 `collections` 对象来注册你的集合
export const collections = {
  word: wordCollection
};
