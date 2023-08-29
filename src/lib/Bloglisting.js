import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/BlogListBody.module.css'


const BlogListing = () => {

    return (
        <>
            <section className={styles.blogListBody}>
                <Container>
                    <Row className='justify-content-between'>
                        <Col lg={12}>
                            <h2 className='font48 black text-center fontf fw700 line60 black'>Our Blogs</h2>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BlogListing
