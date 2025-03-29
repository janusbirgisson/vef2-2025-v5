import { executeQuery } from '@/lib/datocms/executeQuery';
import { graphql } from '@/lib/datocms/graphql';
import { revalidateTag } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';

export const metadata = {
  title: 'Fréttavefur Janusar',
};

const query = graphql(/* GraphQL */`
  query ArticleById($id: ItemId!) {
    article(filter: { id: { eq: $id } }) {
      articleTitle
      flokkur {
        title
      }
      author {
        name
      }
      frett
    }
  }
`);

type Article = {
  articleTitle: string;
  flokkur: {
    title: string;
  };
  author: {
    name: string;
  };
  frett: string;
};

export default async function NewsArticlePage({ params }: { params: { id: string } }) {
  revalidateTag('datocms');

  const { article } = await executeQuery(query, {
    variables: { id: params.id },
  });

  if (!article) {
    notFound();
  }

  return (
    <>
      <Link href="/newsArticles">Til baka</Link>
      <h3>{article.articleTitle}</h3>
      <p>{article.flokkur.title}</p>
      <p>{article.author.name}</p>
      <div><Markdown>{article.frett}</Markdown></div>
    </>
  );
}
