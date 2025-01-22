import Navbar from "../page";


const HomePage = () => {

  // Testimonial data
  const testimonials = [
    {
      name: "funmilola",
      feedback: "The groundnuts are of exceptional quality and delivered on time!",
      location: "Lagos, Nigeria",
      image: "/assets/image/funmi.jpg"
    },
    {
      name: "wuraola",
      feedback: "Excellent customer service and fresh products. Highly recommended!",
      location: "Ibadan, Nigeria",
      image: "/assets/image/ola.jpg"
    },
    {
      name: "ojo toyeshe",
      feedback: "I was impressed with the fast delivery and organic taste. Will buy again!",
      location: "Abeokuta, Nigeria",
      image: "/assets/image/tboy.jpg"
    }
  ];



  return (
        <>
        <Navbar/>
          {/* Hero Section */}
          <section className="bg-green-600 text-white py-20 relative overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
              <div className="text-center md:text-left md:w-1/2 ml-5">
                <h1 className="text-4xl font-bold mb-4">Welcome to Groundnut Store</h1>
                <p className="text-lg mb-6">
                  Discover the finest selection of groundnuts. Order now and enjoy the taste of quality!
                </p>
                <div className="bg-white text-green-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition transform hover:scale-105">
                  Shop Now
                </div>
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
          <section className="bg-green-600 text-white py-16">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Taste Quality?</h2>
              <p className="text-lg mb-6">
                Place your order now and let us deliver the best groundnuts to your door.
              </p>
              <div className="bg-white text-green-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition transform hover:scale-105">
                Contact Us
              </div>
            </div>
          </section>

          {/* Customer Reviews Section */}
          <section className="py-16 bg-gray-100">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded shadow-md text-center transform hover:scale-105 transition duration-300"
                  >
                    <div className="flex justify-center mb-4"></div>
                    <h3 className="text-lg font-bold mb-2">{testimonial.name}</h3>
                    <p className="italic text-gray-600 mb-4">{testimonial.feedback}</p>
                    <p className="text-sm text-gray-500">- {testimonial.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

export default HomePage;
