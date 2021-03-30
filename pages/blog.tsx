import Head from 'next/head';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import { CMS_NAME } from '../lib/constants';
import Post from '../types/post';

type Props = {
  allPosts: Post[];
};

const Blog = ({ allPosts }: Props) => {
  console.info('Blog Posts', allPosts);
  const heroPost: Object = allPosts[0];
  const morePost: Object = allPosts.slice(1);

  return (
    <Layout>
      <Head>
        <title>Blog de {CMS_NAME}</title>
      </Head>
      <p>I am a Blog </p>
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);
  return {
    props: { allPosts },
  };
};
