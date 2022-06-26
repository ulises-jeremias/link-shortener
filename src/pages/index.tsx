import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { NextPageWithLayout } from './_app';

const CreateLinkForm = dynamic(() => import('../components/CreateLinkForm'), {
  ssr: false,
});

const IndexPage: NextPageWithLayout = () => {
  return (
    <Suspense>
      <CreateLinkForm />
    </Suspense>
  );
};

export default IndexPage;
