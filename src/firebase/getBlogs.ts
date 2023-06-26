/* eslint-disable react-hooks/rules-of-hooks */
import { collection, query, getDocs, Timestamp } from 'firebase/firestore';
import { db } from './firebase-config';

export interface BlogPost {
  title: string;
  published: Timestamp;
  tags: string[];
  content: string;
}

export default async function getBlogs(): Promise<BlogPost[]> {
  const q = query(collection(db, 'Blog Posts'));
  const snapshot = await getDocs(q);
  const blogPosts: BlogPost[] = snapshot.docs.map(
    (doc) => doc.data() as BlogPost
  );
  return blogPosts;
}
