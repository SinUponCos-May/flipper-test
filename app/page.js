import ProductCard from '@/components/ProductCard';
import CommentSection from '@/components/CommentSection';

// Server-side data fetching
async function getProducts() {
  // In a real app, this would be a database call
  // For this example, we'll return static data
  return [
    {
      id: 1,
      name: "FlipperX Pro",
      emoji: "🐬",
      description: "The ultimate multi-tool device for pentesters, hardware hackers, and security researchers.",
      price: 199,
      originalPrice: 249,
      inStock: true,
      features: [
        "Sub-GHz radio for wireless research",
        "RFID & NFC emulation",
        "Bluetooth & BadUSB",
        "GPIO pins for hardware hacking",
        "Infrared transceiver"
      ]
    },
    {
      id: 2,
      name: "FlipperX Lite",
      emoji: "🐠",
      description: "A compact version with core features for beginners and everyday tinkering.",
      price: 129,
      inStock: true,
      features: [
        "RFID & NFC capabilities",
        "Infrared learning & emulation",
        "BadUSB functionality",
        "Compact and portable design"
      ]
    },
    {
      id: 3,
      name: "Dev Board Bundle",
      emoji: "🔧",
      description: "FlipperX Pro with additional development boards and accessories.",
      price: 299,
      originalPrice: 349,
      inStock: false,
      features: [
        "FlipperX Pro included",
        "Wi-Fi Dev Board",
        "NFC/RFID expansion",
        "GPIO Breakout board",
        "Premium case"
      ]
    },
    {
      id: 4,
      name: "Hacker Accessories Kit",
      emoji: "🎒",
      description: "Essential accessories for maximizing your FlipperX potential.",
      price: 79,
      inStock: true,
      features: [
        "Protective silicone case",
        "Extended battery pack",
        "GPIO pin set",
        "RFID cards & tags",
        "Carrying pouch"
      ]
    }
  ];
}

export default async function Home() {
  const products = await getProducts();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-3xl">🐬</div>
            <h1 className="text-2xl font-bold text-blue-700">FlipperX</h1>
          </div>
          <div className="space-x-6">
            <a href="/" className="font-medium hover:text-blue-600">Home</a>
            <a href="#products" className="font-medium hover:text-blue-600">Products</a>
            <a href="#about" className="font-medium hover:text-blue-600">About</a>
            <a href="#comments" className="font-medium hover:text-blue-600">Community</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Hack The World <span className="text-blue-600">Responsibly</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          FlipperX is the ultimate multi-tool device for hardware hacking, pentesting, and security research. 
          Explore wireless protocols, emulate access cards, analyze digital signals, and more.
        </p>
        <a href="#products" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          Explore Products
        </a>
      </header>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About FlipperX</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                At FlipperX, we believe in democratizing security research and hardware hacking. 
                Our devices are designed to be accessible, powerful, and educational tools for 
                security professionals, students, and tech enthusiasts alike.
              </p>
              <p className="text-gray-700 mb-4">
                Founded in 2023, we're committed to ethical hacking practices and responsible 
                disclosure. All our products are intended for legal security research, 
                penetration testing (with proper authorization), and educational purposes only.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">⚠️ Responsible Use Policy</h4>
                <p className="text-gray-700">
                  FlipperX devices should only be used on systems you own or have explicit permission to test. 
                  Unauthorized access to computer systems is illegal and unethical.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Choose FlipperX?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Open Source Ecosystem</h4>
                    <p className="text-gray-600">Our firmware and software are open source, with a thriving community of developers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Powerful Hardware</h4>
                    <p className="text-gray-600">Multiple radios (Sub-GHz, RFID, NFC, Bluetooth), GPIO, and BadUSB capabilities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Continuous Updates</h4>
                    <p className="text-gray-600">Regular firmware updates with new features and capabilities from our development team.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section id="comments" className="container mx-auto px-4 py-16">
        <CommentSection />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-3xl">🐬</div>
                <h2 className="text-2xl font-bold">FlipperX</h2>
              </div>
              <p className="text-gray-400">
                Empowering security researchers and hardware hackers with accessible, powerful tools.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#comments" className="text-gray-400 hover:text-white">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Responsible Use Agreement</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} FlipperX Technologies. All rights reserved.</p>
            <p className="mt-2 text-sm">For educational and authorized security research purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}