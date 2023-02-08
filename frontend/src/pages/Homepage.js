import React from 'react';
import {Link,} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import '../styles/Homepage.css';

export default function Homepage() {
    const {loading, error, data} = useFetch('http://localhost:1337/api/main-page?populate=*');
    if (loading)
        return <p> Loading ...</p>;

    if (error) 
        return <p> Error : (</p>;

        return (
        <article className={'homepage'}>
            <h2>Takie tango</h2>
            <hr/>
            <section className={'aboutBody'}>
                <div className={'aboutDescription'}>
                <p>{data.attributes.description}</p>
                    <div className={'aboutImgContainer'}> {
                       (<img src={
                                `http://localhost:1337${data.attributes?.photo?.data?.attributes?.formats?.large?.url}`
                            }
                            alt="img"/>)
                    } </div>
                    <div>                        
                        <Link id='backHome' to={'/'}> {'Back to Home'} </Link>
                    </div>
                </div>
            </section>
        </article>)
    }
