"use client";

import { useState, FormEvent } from "react";

// Define TypeScript interface for Pixabay API response
interface ImageData {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

export default function ImageSearchApp() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const API_KEY = "42766677-a60e8405a1f2deafc19e9c99a";

  const searchImages = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setImages([]);

    try {
      const res = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
          query
        )}&image_type=photo&per_page=20`
      );
      const data = await res.json();
      setImages(data.hits || []);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Image Search App</h1>

      {/* Search Bar */}
      <form onSubmit={searchImages} className="w-full max-w-md flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for images..."
          className="flex-1 p-3 border border-gray-300 rounded-l-lg outline-none text-lg"
        />
        <button
          type="submit"
          className="p-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Loading Indicator */}
      {loading && <p className="mt-4 text-lg text-gray-700">Loading...</p>}

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {images.map((image) => (
          <div key={image.id} className="bg-white shadow-lg rounded-lg p-2">
            <img
              src={image.webformatURL}
              alt={image.tags}
              className="w-full h-48 object-cover rounded-lg"
            />
            <a
              href={image.largeImageURL}
              download
              className="block text-center bg-blue-500 text-white py-2 mt-2 rounded-md hover:bg-blue-600 transition"
            >
              view
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
