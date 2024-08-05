import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from  '../assets/star.png';
import '../custom-slick.css';

const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const testimonials = [
    { rating: 5.0, text: "''This service exceeded all my expectations! The team was professional and the results were phenomenal. I would highly recommend them to anyone looking for quality and reliability.''", name: "John Mark", company: "Acme Corp" },
    { rating: 5.0, text: "''Great experience overall. The project was completed on time and within budget. The customer support was also very responsive and helpful.''", name: "Jane Smith", company: "Widget Co." },
    { rating: 5.0, text: "''I am very pleased with the outcome. The team took my ideas and turned them into something truly special. Will definitely use their services again in the future.''", name: "Mark Johnson", company: "Tech Innovators" },
    { rating: 5.0, text: "''Outstanding service from start to finish. The attention to detail and commitment to quality were evident in every step of the process. Highly recommended!''", name: "Sarah Williams", company: "Creative Solutions" },
    { rating: 5.0, text: "''We are extremely satisfied with the results. The team was attentive, professional, and delivered exactly what we needed. Their dedication to their work is evident in the high quality of the final product.''", name: "Emily Brown", company: "Horizon Enterprises" },
    { rating: 5.0, text: "''The team was a pleasure to work with. They were responsive, creative, and delivered exceptional results. I would not hesitate to recommend them to anyone looking for top-notch service.''", name: "Michael Davis", company: "Innovative Solutions" },
    { rating: 5.0, text: "''I cannot say enough good things about this service. The team went above and beyond to ensure that our project was a success. I would not hesitate to work with them again in the future.''", name: "Laura Wilson", company: "Digital Creations" },
    { rating: 5.0, text: "''The team was fantastic to work with. They were professional, creative, and delivered exactly what we needed. I would highly recommend them to anyone looking for top-quality service.''", name: "Chris Miller", company: "Tech Solutions" },
];

const ClientSay = () => {
    return (
        <div className='py-36 mb-32 bg-black'>
            <div className="flex flex-col items-center mb-8">
                <h1 className="text-white text-4xl font-semibold">What our clients say</h1>
            </div>
            <Slider {...settings} >
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='p-4 hover:scale-110 transition-all duration-700 ease-in-out'>
                        <div className='flex flex-row gap-1 items-center mb-2'>
                            <h1 className='text-white'>{testimonial.rating.toFixed(1)}</h1>
                            {[...Array(Math.round(testimonial.rating))].map((_, i) => (
                                <img key={i} src={star} alt="star" className="w-4 h-4" />
                            ))}
                        </div>
                        <div>
                            <p className="text-white mb-2">{testimonial.text}</p>
                            <p className="text-white font-semibold">{testimonial.name}, {testimonial.company}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ClientSay;
