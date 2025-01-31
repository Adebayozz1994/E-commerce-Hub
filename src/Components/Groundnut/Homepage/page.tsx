"use client";
import Image from "next/image";
import Navbar from "../page";
import Link from "next/link";

const HomePage = () => {
  const testimonials = [
    {
      name: "funmilola",
      feedback:
        "The groundnuts are of exceptional quality and delivered on time!",
      location: "Lagos, Nigeria",
      image:
        "https://img.freepik.com/free-photo/peanuts-shells-wood_1150-18413.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid",
    },
    {
      name: "wuraola",
      feedback:
        "Excellent customer service and fresh products. Highly recommended!",
      location: "Ibadan, Nigeria",
      image:
        "https://img.freepik.com/free-photo/groundnuts-heart-shape-plate-put-sack-groundnuts_1150-34403.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid",
    },
    {
      name: "ojo toyeshe",
      feedback:
        "I was impressed with the fast delivery and organic taste. Will buy again!",
      location: "Abeokuta, Nigeria",
      image:
        "https://img.freepik.com/free-photo/peanuts_1308-39977.jpg?uid=R147290862&ga=GA1.1.1457401061.1705098422&semt=ais_hybrid",
    },
  ];

  return (
    <>
      <div>
        <Navbar />
        <section className="bg-yellow-100 text-red-800 py-20 overflow-hidden">
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
            {/* Hero Text */}
            <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to The NUTural Bites
              </h1>
              <p className="text-lg mb-6">
                Discover the finest selection of groundnuts. Order now and
                enjoy the taste of quality!
              </p>
              <Link href="/user/mainpage/natural-bites/product">
                <button className="bg-brown-600 text-red-800 font-semibold px-6 py-3 rounded-full shadow border-2 hover:bg-yellow-900 hover:text-yellow-100 transition transform hover:scale-105">
                  Shop Now
                </button>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="md:w-1/2 flex justify-center ">
              <Image
                src="https://res.cloudinary.com/dzaz4b8pw/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1738098311/IMG-20250128-WA0028-removebg-preview_kdiep1.png"
                alt="Groundnuts Hero"
                width={500}
                height={350}
                className="w-full md:w-[500px] h-auto transform hover:scale-105 transition duration-300"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left ml-6">
              <h2 className="text-3xl font-bold mb-4 text-red-800">Why Choose Us?</h2>
              <p className="text-lg mb-6 text-red-800">
                We deliver the highest quality groundnuts with unparalleled
                customer service. From farm to your table, every bite is a taste
                of nature.
              </p>
              <Link href="/user/mainpage/natural-bites/aboutus">
                <button className="bg-brown-600 text-white font-semibold px-6 py-3 rounded shadow hover:bg-brown-700 transition transform hover:scale-105">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://res.cloudinary.com/dzaz4b8pw/image/upload/v1738098642/IMG-20250128-WA0021_ylojfh.jpg"
                alt="Why Choose Us"
                width={600}
                height={400}
                className="rounded shadow-lg object-cover transform hover:scale-105 transition duration-300"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* Featured Image Section */}
        <section className="py-16 bg-yellow-100">
          <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
            <Image
              src="https://res.cloudinary.com/dzaz4b8pw/image/upload/v1738100122/IMG-20250128-WA0040_f8xbtt.jpg"
              alt="Featured Groundnuts 1"
              width={400}
              height={300}
              className="rounded shadow-lg object-fit w-[500px] h-[500px] transform hover:scale-105 transition duration-300"
              unoptimized
            />
            <Image
              src="https://res.cloudinary.com/dzaz4b8pw/image/upload/v1738142467/IMG-20250128-WA0020_q4wto1.jpg"
              alt="Featured Groundnuts 2"
              width={400}
              height={300}
              className="rounded shadow-lg object-cover w-[500px] h-[500px] transform hover:scale-105 transition duration-300"
              unoptimized
            />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-yellow-50 text-red-800 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Taste Quality?
            </h2>
            <p className="text-lg mb-6">
              Place your order now and let us deliver the best groundnuts to
              your door.
            </p>
            <Link href="/user/mainpage/natural-bites/contact">
              <button className="bg-brown-600 text-red-800 font-semibold px-6 py-3 rounded-full shadow border-2 hover:bg-yellow-900 hover:text-yellow-100 transition transform hover:scale-105">
                Contact Us
              </button>
            </Link>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-16 bg-yellow-50 mb-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-red-800 mb-8">
              What Our Customers Say
            </h2>
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
                      unoptimized
                    />
                  </div>
                  <h3 className="text-lg font-bold text-red-800 mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="italic text-gray-600 mb-4">
                    {testimonial.feedback}
                  </p>
                  <p className="text-sm text-gray-500">
                    - {testimonial.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
