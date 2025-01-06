import './FooterMinimalist.scss'; // Tus estilos personalizados
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import feather from 'feather-icons';
import { SocialIcon } from 'react-social-icons';

const FooterMinimalist = () => {
	const settings = {
		dots: true,               // Muestra los puntos de navegación
		infinite: true,          // Carrusel infinito
		speed: 1000,              // Velocidad de desplazamiento
		slidesToShow: 3,         // Número de slides que se muestran
		slidesToScroll: 2,       // Número de slides que se desplazan al hacer clic
		autoplay: true,          // Habilitar autoplay
		autoplaySpeed: 3000,     // Velocidad del autoplay
		responsive: [            // Configuración para diferentes tamaños de pantalla
		{
		breakpoint: 600,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
		}
		},
		{
		breakpoint: 1300,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 1,
		}
		},
		]
	};
	
	useEffect(() => {
	feather.replace(); // Reemplaza los íconos de Feather
	}, []);
	
    return (
	<div className="footer">
			<div className="owl-carousel">
				<Slider {...settings}>
					<a href="#" className="gallery__photo">
						<img src="https://images.unsplash.com/photo-1587354246490-7e26e63fcaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGhhaWxhbmR8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
					</a>
					<a href="#" className="gallery__photo">
						<img src="https://images.unsplash.com/photo-1510872893374-80379d91fc92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
					</a>
					<a href="#" className="gallery__photo">
						<img src="https://images.unsplash.com/photo-1590785204309-9888edf27ab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRoYWlsYW5kfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
					</a>
					<a href="#" className="gallery__photo">
						<img src="https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
					</a>
					<a href="#" className="gallery__photo">
						<img src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
					</a>
					<a href="#" className="gallery__photo">
						<img src="https://images.unsplash.com/photo-1541048162979-c9ca04d625d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGhhaWxhbmR8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
					</a>
				</Slider>
			</div>
		<div className="footer__redes">
			<ul className="footer__redes-wrapper">
				<li>
					<SocialIcon url="www.facebook.com" />
					<a href="#" className="footer__link">
						<i className="fab fa-facebook-f"></i>
						Facebook
					</a>
				</li>
				<li>
					<a href="#" className="footer__link">
						<i className="fab fa-twitter"></i>
						Twitter
					</a>
				</li>
				<li>
					<a href="#" className="footer__link">
						<i className="fab fa-instagram"></i>
						Instagram
					</a>
				</li>
				<li>
					<a href="#" className="footer__link">
						<i className="fab fa-youtube"></i>
						Youtube
					</a>
				</li>
			</ul>
		</div>
		<div className="separador"></div>
			<p className="footer__texto">Copyright @ 2024</p>
		</div>
	)
};


export { FooterMinimalist };
