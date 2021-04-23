import { FC } from "react";
import Container from '../components/container';
import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import { CMS_NAME } from '../lib/constants';


const Index: FC = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <h2>Bienvenido a arnoldrestrepo.com</h2>
          <Link href="/blog">Blog</Link>
        </Container>
      </Layout>
    </>
  );
};

export default Index;