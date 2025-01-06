import { motion } from 'framer-motion';
import './LatestNews.scss';
import { useEffect, useState } from 'react';
import ShapeShiftingText from './ShapeShiftingText';

const LatestNews = () => {
    const phrases = ["SOBRE", "ESPACIOS UNICOS", "MEMORABLES", "INSPIRADORES"];
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3000); // Cambiar texto cada 3 segundos
        return () => clearInterval(interval);
    }, []);
    return (
        <><div className="latestNews">
            <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#FFF",
            }}
        >
            <ShapeShiftingText text={phrases[currentPhraseIndex]} />
        </div>
        
        </div><main className="main columns">
                <section className="column main-column">
                    <a className="article first-article" href="#">
                        <figure className="article-image is-4by3">
                            <img src="https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/1366/posts/26611/attachment/image-01.png" alt="" />
                        </figure>
                        <div className="article-body">
                            <h2 className="article-title">
                                Asesoria Juridica
                            </h2>
                            <p className="article-content">
                                Para comprar una casa, puedes buscar asesoria de un abogado inmobiliario o asesor legal inmobiliario. Estos profesionales son expertos en el marco juridico del sector inmobiliario y pueden asesorarte en todos los aspectos de la operacion. 
                                La asesoria juridica para comprar una casa puede ser util para: Revisar la situacion legal del inmueble, Conocer la situacion registral del inmueble, Elaborar el contrato de compraventa, Indicar la modalidad de compraventa mas adecuada.
                            </p>
                            <footer className="article-info">
                                <span>By Joe Smith</span>
                                <span>42 comments</span>
                            </footer>
                        </div>
                    </a>
                    <a className="article" href="#">
                        <figure className="article-image is-16by9">
                            <img src="https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/1366/posts/26611/attachment/image-02.png" alt="" />
                        </figure>
                        <div className="article-body">
                            <h2 className="article-title">
                                Hello World
                            </h2>
                            <p className="article-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                            </p>
                            <footer className="article-info">
                                <span>By Joe Smith</span>
                                <span>42 comments</span>
                            </footer>
                        </div>
                    </a>
                </section>
                <section className="column">
                    <a className="article" href="#">
                        <figure className="article-image is-3by2">
                            <img src="https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/1366/posts/26611/attachment/image-03.png" alt="" />
                        </figure>
                        <div className="article-body">
                            <h2 className="article-title">
                                Hello World
                            </h2>
                            <p className="article-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <footer className="article-info">
                                <span>By Joe Smith</span>
                                <span>42 comments</span>
                            </footer>
                        </div>
                    </a>
                    <a className="article" href="#">
                        <div className="article-body">
                            <h2 className="article-title">
                                Hello World
                            </h2>
                            <p className="article-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <footer className="article-info">
                                <span>By Joe Smith</span>
                                <span>42 comments</span>
                            </footer>
                        </div>
                    </a>
                    <a className="article" href="#">
                        <div className="article-body">
                            <h2 className="article-title">
                                Hello World
                            </h2>
                            <p className="article-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <footer className="article-info">
                                <span>By Joe Smith</span>
                                <span>42 comments</span>
                            </footer>
                        </div>
                    </a>
                    <a className="article" href="#">
                        <div className="article-body">
                            <h2 className="article-title">
                                Hello World
                            </h2>
                            <p className="article-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <footer className="article-info">
                                <span>By Joe Smith</span>
                                <span>42 comments</span>
                            </footer>
                        </div>
                    </a>
                </section>
            </main>
        </>
    )
}


export { LatestNews };
