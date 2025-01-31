'use client';
import Image from 'next/image';
import Link from 'next/link';
import Bites from '../page';

const HomePage = () => {
  // Testimonial data
  const testimonials = [
    {
      name: "ade",
      feedback: "The groundnuts are of exceptional quality and delivered on time!",
      location: "kastina, Nigeria",
      image: "https://img.freepik.com/free-photo/peanuts-shells-wood_1150-18413.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid"
    },
    {
      name: "Ebuka",
      feedback: "Excellent customer service and fresh products. Highly recommended!",
      location: "oyo, Nigeria",
      image: "https://img.freepik.com/free-photo/groundnuts-heart-shape-plate-put-sack-groundnuts_1150-34403.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid"
    },
    {
      name: "ogunjimi",
      feedback: "I was impressed with the fast delivery and organic taste. Will buy again!",
      location: "ofa, Nigeria",
      image: "https://img.freepik.com/free-photo/peanuts_1308-39977.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Bites/>
      <section className="bg-blue-600 text-white py-20 relative overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left md:w-1/2 ml-5">
            <h1 className="text-4xl font-bold mb-4">Welcome to Oraj Edibles Store</h1>
            <p className="text-lg mb-6">
              Discover the finest selection of groundnuts. Order now and enjoy the taste of quality!
            </p>
            {
              <Link href="/user/mainpage/oraj-edibles/products">
                <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition transform hover:scale-105">
                  Shop Now
                </button>
              </Link>
            }
          </div>

          <div className="mt-8 md:mt-0 md:w-1/3">
            <Image
              src="https://res.cloudinary.com/dzaz4b8pw/image/upload/c_pad,w_500,h_400/v1738064640/IMG-20250128-WA0007-removebg-preview_g6cea7.png"
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
            {['Organic & Fresh', 'Fast Delivery', 'Customer Satisfaction'].map((title, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded shadow-md text-center transform hover:scale-105 transition duration-300"
              >
                <Image
                  src="https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1738061248/IMG-20250128-WA0007_c31ayw.jpg"
                  alt={title}
                  width={200}
                  height={200}
                  className="mx-auto mb-4 w-full h-[200px] object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p>
                  {title === "Organic & Fresh"
                    ? "We source only the freshest and organically grown groundnuts for our customers."
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
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Taste Quality?</h2>
          <p className="text-lg mb-6">
            Place your order now and let us deliver the best groundnuts to your door.
          </p>
          {
            <Link href="/user/mainpage/oraj-edibles/contact">
              <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-white transition transform hover:scale-105">
                Contact Us
              </button>
            </Link>
          }
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
