import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData} from '../lib/posts';
import { getFreePostName } from '../lib/jsposts';
import Link from 'next/link';
import Date,{JsDate} from '../components/date';
import { format } from "date-fns";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allJsData = getFreePostName();
  // JSON.stringify(allJsData);
  return {
    props: {
      allPostsData,
      allJsData
    },
  };
}

export default function Home({allPostsData, allJsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          <h1 className='center'>Markdown Posts</h1>
          {allPostsData.map(({ id, date, title }) => (
           <li className={utilStyles.listItem} key={id}>
           <Link href={`/posts/${id}`}>{title}</Link>
           <br />
           <small className={utilStyles.lightText}>
             <Date dateString={date} />
           </small>
         </li>
          ))}
           <hr/>
           <h1 className='center'>JS/React Posts</h1>
           {allJsData.map(({ id, time}) => (
            id!=='[id]' &&
           <li className={utilStyles.listItem} key={id}>
           <Link href={`/posts/${id}`}>{id}</Link>
           <br />
           <small className={utilStyles.lightText}>
             {/* {JSON.stringify(time)} */}
             {/* has error when I use below code */}
             {/* <JsDate dateString={time} /> */}
             {format(time,'LLLL d, yyyy')}
           </small>
         </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}