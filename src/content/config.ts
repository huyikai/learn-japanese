// 从 `astro:content` 导入辅助工具
import { defineCollection, z } from 'astro:content';
// 为每一个集合定义一个 `type` 和 `schema`
const wordSchema = z.object({
  title: z.string(), // 标题
  description: z.string(), // 释义
  pubDate: z.date().optional(), // 日期
  tags: z.array(z.string()).optional(), // 标签
  kana: z.string(), // 假名
  pronunciation: z.string(), // 音标
  tone: z.string(), // 调音
  type: z.string(), // 类型
  example: z.array(z.string()).optional() // 例子
});
const wordCollection = defineCollection({
  type: 'content',
  schema: wordSchema
});

const grammarSchema = z.object({
  title: z.string(), // 标题
  description: z.string(), // 释义
  pubDate: z.date().optional(), // 日期
  example: z.array(z.string()).optional() // 例子
});
const grammarCollection = defineCollection({
  type: 'content',
  schema: grammarSchema
});

// 导出一个单独的 `collections` 对象来注册你的集合
export const collections = {
  words: wordCollection,
  grammars: grammarCollection
};
