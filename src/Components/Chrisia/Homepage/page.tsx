'use client';
import Image from 'next/image';
import Link from 'next/link';
import Christia from '../page';

const HomePage = () => {
  // Testimonial data
  const testimonials = [
    {
      name: "sunday",
      feedback: "The groundnuts are of exceptional quality and delivered on time!",
      location: "abia, Nigeria",
      image: "https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1738065286/IMG-20250127-WA0006-removebg_fe1fg8.png"
    },
    {
      name: "fatimah",
      feedback: "Excellent customer service and fresh products. Highly recommended!",
      location: "Ilorin, Nigeria",
      image: "https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1738065286/IMG-20250127-WA0006-removebg_fe1fg8.png"
    },
    {
      name: "abdul",
      feedback: "I was impressed with the fast delivery and organic taste. Will buy again!",
      location: "kano, Nigeria",
      image: "https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1738065286/IMG-20250127-WA0006-removebg_fe1fg8.png"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Christia />
      <section className="bg-[#970942] text-white py-20 relative overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left md:w-1/2 ml-5">
            <h1 className="text-4xl font-bold mb-4">Welcome to Christia-Lure-Scents</h1>
            <p className="text-lg mb-6">
            A brand thats help people boost their confidence and stand out through fashion accessories, body and home frangrance.
            </p>
            <Link href="/user/mainpage/chrisia-lure-scents/products">
              <button className="bg-white text-[#970942] font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition transform hover:scale-105">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/3">
            <Image
              src="https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1738065286/IMG-20250127-WA0006-removebg_fe1fg8.png"
              alt="Groundnuts Hero"
              width={500}
              height={350}
              className="rounded shadow-lg w-full h-auto transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Quality and Classic', 'Fast Delivery', 'Customer Satisfaction'].map((title, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded shadow-md text-center transform hover:scale-105 transition duration-300"
              >
                <Image
                  src="https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1738065286/IMG-20250127-WA0006-removebg_fe1fg8.png"
                  alt={title}
                  width={200}
                  height={200}
                  className="mx-auto mb-4 w-full h-[200px] object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p>
                  {title === "Quality and Classic"
                    ? "We source only the quality and classic for our customers."
                    : title === "Fast Delivery"
                    ? "Enjoy fast and reliable delivery services to your doorstep, anywhere in the region."
                    : "Your satisfaction is our priority. We ensure top-notch quality in every order."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#970942] text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Taste Quality?</h2>
          <p className="text-lg mb-6">
            Place your order now and let us deliver the best groundnuts to your door.
          </p>
          <Link href="/user/mainpage/chrisia-lure-scents/contact">
            <button className="bg-white text-[#970942] font-semibold px-6 py-3 rounded shadow hover:bg-white transition transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-gray-100 mb-11">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded shadow-md text-center transform hover:scale-105 transition duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt="Customer Photo"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full border border-gray-200"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">{testimonial.name}</h3>
                <p className="italic text-gray-600 mb-4">{testimonial.feedback}</p>
                <p className="text-sm text-gray-500">- {testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
