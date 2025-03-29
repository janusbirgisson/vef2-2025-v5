import { executeQuery } from '@/lib/datocms/executeQuery';
import { graphql } from '@/lib/datocms/graphql';
import { revalidateTag } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';

export const metadata = {
  title: 'Fréttavefur Janusar',
};

const query = graphql(
    /* GraphQL */ `
    query Article($id: ItemId!) {
	    article(filter: {id:{eq: $id}}) {
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
    `,
    [],
  );

export default async function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  revalidateTag('datocms');

  const { id } = await params;
  console.log(id);

  const { article } = await executeQuery(query, {variables: {id}});
    
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
