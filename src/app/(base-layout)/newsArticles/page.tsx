import { executeQuery } from '@/lib/datocms/executeQuery';
import { graphql } from '@/lib/datocms/graphql';
import { revalidateTag } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Fréttavefur Janusar',
};

const query = graphql(
    /* GraphQL */ `
      query Article {
        allArticles {
        articleTitle
        id
        author {
          name
        }
      }
    }
    `,
    [],
  );

type Article = {
  id: string;
  articleTitle: string;
  author: {
    name: string;
  };
};

export default async function NewsArticlesPage() {
  revalidateTag('datocms');

  const { allArticles } = await executeQuery(query, {}) as { allArticles: Article[] };
    
  if (!allArticles) {
    notFound();
  }

  console.log(allArticles);

  return (
    <>
      <h3>Veldu frétt:</h3>

      <ul>
        {allArticles.map((article) => (
          <li key={article.id}>
            <Link href={`/newsArticles/${article.id}`}>{article.articleTitle}</Link>
            {' '}
            {article.author.name}
          </li>
        ))}
      </ul>
    </>
  );
}
