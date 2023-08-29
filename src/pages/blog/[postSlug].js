import Head from "next/head";
import Link from 'next/link'
import Image from "next/image";
import styles from '@/styles/InnerBlog.module.css'
import { Container, Row, Col } from 'react-bootstrap'
//
import { getPostSlugs, getSinglePost } from "@/lib/posts";
import Date from "@/lib/Date";
//
import logo from '../../../public/favicon.png'


export async function getStaticProps({ params }) {
    const postData = await getSinglePost(params.postSlug);

    let featuredImageUrl = "https://wp23.cryscampus.com/bwe/wp-content/uploads/2023/08/moz-brand-authority-768x439-1.png";

    if (postData.featuredImage) {
        featuredImageUrl = `https://wp23.cryscampus.com/bwe/wp-content/uploads/${postData.featuredImage.node.mediaDetails.file}`;
    }

    return {
        props: {
            postData,
            featuredImageUrl,
        }
    };
}

export async function getStaticPaths() {
    const postSlugs = await getPostSlugs();

    return {
        paths: postSlugs.map((s) => (
            {
                params: {
                    postSlug: s.slug
                }
            }
        )),
        fallback: false
    }
}

export default function Post({ postData, featuredImageUrl }) {

    return (
        <>
            <Head>
                <title key="title">{postData.title}</title>
                <meta name="description" content={postData.metaDesc} key="metadesc" />
                <meta property="og:title" content={postData.opengraphTitle} />
                <meta key="og-description" property="og:description" content={postData.metaDesc} />
                <meta property="og:url" content={postData.opengraphUrl} />
                <meta property="og:type" content={postData.opengraphType} />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:site_name" content={postData.opengraphSiteName} />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <section className={styles.innerBlog}>
                <Container>
                    <Row className="justify-content-between">
                        <Col lg={8}>
                            <div className={styles.blogContent}>
                                <div className={`${styles.contentHeading}`}>
                                    <h1>{postData.title}</h1>
                                    <h6 className={`${styles.detailDate} mt-5`}>
                                        <Image src={logo} alt="Book Writing Experts" width={25} height={25} />
                                        <span>By Book Writing Experts Team in 2023</span>
                                    </h6>
                                    <h6 className="mt-3 mb-0 fw-bold font14">
                                        Published on  <Date dateString={postData.date} />
                                    </h6>
                                </div>
                                <div className="mt-4">
                                    <Image src={featuredImageUrl} className={styles.newstyleimg} alt="Book Writing Experts" width={736} height={450} />
                                </div>
                                <div className={`${styles.contentBody} mt-4`}
                                    dangerouslySetInnerHTML={{ __html: postData.content }}>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}