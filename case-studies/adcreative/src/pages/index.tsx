
import React from 'react';



import { HomeLayout } from '../components/layouts';
import { HomeTemplate } from '../components/templates';

export default function Home() {
  return (
    <div id="home">
      <HomeLayout>
        <HomeTemplate />
      </HomeLayout>
    </div>
  );
}

// interface GetServerSideProps {
//   locale: keyof typeof LANGUAGE;
// }
// export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
//   console.log("getServerSideProps")
//   const languages = await serverSideTranslations(locale, ['common', 'footer']);
//   console.log({ languages })

//   return {
//     props: {}
//   };
// }
