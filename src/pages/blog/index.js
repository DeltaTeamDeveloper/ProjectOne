import Head from 'next/head'
import Link from "next/link";
import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/BlogListBody.module.css'
//
import { getPostList } from "@/lib/posts";
import FeaturedImage from "@/lib/FeaturedImage";
import Date from "@/lib/Date";
import LoadMore from "@/lib/LoadMore";
import BlogListing from '@/lib/Bloglisting';


export async function getStaticProps() {
    const allPosts = await getPostList();

    return {
        props: {
            allPosts: allPosts,
        },
    }
}


export default function BlogHome({ allPosts }) {


    const [posts, setPosts] = useState(allPosts);


    return (
        <>
            <Head>
                <title>Blogs - Book Writing Experts</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <BlogListing />

            <main>
                <section className={`${styles.postList} mt-0 mt-lg-4`}>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Row className={`${styles.blogCard}`}>
                                    {
                                        posts.nodes.map((post) => (
                                            <Col lg={4}>
                                                <div key={post.slug} className={`${styles.blogRow} align-items-center mb-0 mb-lg-5`}>
                                                    <div>
                                                        <FeaturedImage post={post} />
                                                    </div>
                                                    <div>
                                                        <div className={styles.cardCntnt}>
                                                            <h4 className={`${styles.blogTitle} mb-0`}>
                                                                <Link href={`/blog/${post.slug}`}>
                                                                    {post.title}
                                                                </Link>
                                                            </h4>

                                                            {
                                                                post.categories.nodes.map((category) => (
                                                                    <h5 className={`${styles.blogCategory} mt-2`} key={category.slug}>
                                                                        {category.name} - Blog
                                                                    </h5>
                                                                ))
                                                            }

                                                            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} className={styles.blogDesciption}>
                                                            </div>

                                                            <h6 className={styles.detailDate}>
                                                                Published on <Date dateString={post.date} />
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))
                                    }
                                </Row>
                                <div className="pt-lg-0 pt-4 pb-4 text-center">
                                    <LoadMore posts={posts} setPosts={setPosts} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    )
}

