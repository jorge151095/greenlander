import { FC } from 'react';
import ButtonLink, { ButtonLinkProps } from '../ButtonLink/ButtonLink';
import './Hero.styles.scss';

interface HeroProps {
    imageUrl?: string;
    imageText: string;
    headline: string;
    button: ButtonLinkProps;
    videoUrl?: string;
}

const Hero: FC<HeroProps> = ({
    imageUrl,
    imageText,
    headline,
    button,
    videoUrl
}) => {
    return <div className='hero'>
        {videoUrl ? (
            <video
                className="hero-video"
                src={videoUrl}
                autoPlay
                muted
                loop
                playsInline
            />
        ) : (
            <img className='img-background' src={imageUrl} alt={imageText} />
        )}
        <div className='cta'>
            <h1 className='headline'>{headline}</h1>
            <ButtonLink {...button} />
        </div>
    </div>
};

export { Hero };
