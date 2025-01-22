import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-500">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
        Welcome to E-Commerce Hub
      </h1>
      <p className="text-lg md:text-xl text-white text-center max-w-2xl mb-10">
        Explore our diverse range of products across multiple e-commerce platforms. Click below to start your journey!
      </p>
      <Link href="/main" className="px-6 py-3 bg-white text-indigo-500 font-semibold rounded-lg shadow-md hover:bg-indigo-100 transition">
        
          Enter the Marketplace
       
      </Link>
    </div>
  );
}
