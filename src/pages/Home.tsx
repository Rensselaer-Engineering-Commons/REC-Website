import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl">Welcome to My Website</h1>
      </header>
      <main className="p-4">
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl">Latest News</h2>
          <p className="text-base md:text-lg lg:text-xl">
            This is where the latest news will be displayed.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-200 p-4">Feature 1</div>
            <div className="bg-gray-300 p-4">Feature 2</div>
            <div className="bg-gray-400 p-4">Feature 3</div>
          </div>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl lg:text-3xl">Contact Us</h2>
          <p className="text-base md:text-lg lg:text-xl">
            Get in touch with us through the contact page.
          </p>
        </section>
      </main>
      <footer className="bg-blue-500 text-white p-4 mt-8">
        <p className="text-center text-sm md:text-base lg:text-lg">&copy; 2023 My Website</p>
      </footer>
    </div>
  );
}

export default Home;