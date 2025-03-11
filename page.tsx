import Image from "next/image"
import { ContactForm } from "./components/contact-form"
import { Gallery } from "./components/gallery"
import { Gallery2 } from "./components/gallery2"
import { Navigation } from "./components/navigation"
import { Features } from "./components/features"
import { Footer } from "./components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FDBAF0]">
      <Navigation />

    
{/* Mobile Hero Section (visible below sm breakpoint) */}
<section className="relative h-[40vh] flex items-start justify-center sm:hidden">
  <Image
    src="/main-logo.jpg"
    alt="Beautiful decorated cake (mobile)"
    fill
    className="object-contain brightness-[0.85] object-top"
    priority
  />
  <div className="relative z-10 text-center text-white">
    {/* Add content here if needed */}
  </div>
</section>

{/* Desktop Hero Section (visible on sm and above) */}
<section className="relative h-[90vh] hidden sm:flex items-center justify-center w-full">
  <Image
    src="/main-logo-desktop.jpg"
    alt="Beautiful decorated cake"
    fill
    className="object-cover brightness-[0.85]"
    style={{ objectPosition: 'center 15%' }}
    priority
  />
  <div className="relative z-10 text-center text-white">
    {/* Add content here if needed */}
  </div>
</section>



     {/* About Section */}
<section id="about" className="py-20 px-4 bg-gradient-to-b from-[#FDBAF0] to-[white]">
  <div className="container mx-auto max-w-5xl">
    {/* About Us */}
    <div className="flex flex-col items-center gap-4 mb-16 md:flex-row md:gap-8">
    <div className="w-full text-center md:w-1/2 md:text-left">
      <h2 className="font-playfair text-4xl md:text-5xl text-[#0f0e0e] mb-4 font-bold tracking-tight">About Us</h2>
      <p className="text-[#0f0e0e] text-lg leading-relaxed font-semibold">
        Welcome to <span className="italic">The Bake Shop At Crescent</span>, where passion meets perfection. We craft extraordinary cakes—beautiful, delicious, and unforgettable—that turn your celebrations into showstopping moments.
      </p>
    </div>
    <div className="w-full md:w-1/2 animate-fadeInRight">
      <Image 
        src="/pp.jpg" 
        alt="Our Mission" 
        width={500} 
        height={300} 
        className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>
    {/* Our Mission */}
    <div className="text-center mb-16">
      <h2 className="font-playfair text-4xl md:text-5xl text-[#0f0e0e] mb-6 font-bold tracking-tight">Our Mission</h2>
      <p className="text-[#0f0e0e] text-lg max-w-3xl mx-auto leading-relaxed font-semibold">
        Simple yet bold: We create high-quality, mouthwatering cakes with the finest ingredients and a sprinkle of love in every layer. Our goal? To bring joy, one slice at a time, and make every order an experience to remember.
      </p>
    </div>

    {/* Our Story */}
    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
      <div className="md:w-1/2 text-center md:text-right">
        <h2 className="font-playfair text-4xl md:text-5xl text-[#0f0e0e] mb-4 font-bold tracking-tight">Our Story</h2>
        <p className="text-[#0f0e0e] text-lg leading-relaxed font-semibold">
          It all started in 2020 with a love for sweet treats. Now, we’re proud to offer a stunning variety of cakes—classic or custom—made with the freshest, locally sourced ingredients. Each one’s a masterpiece, inside and out.
        </p>
      </div>
      <div className="md:w-1/2 order-2 md:order-1 animate-fadeInLeft">
        <Image 
          src="/tt.jpg" 
          alt="Our Story" 
          width={500} 
          height={300} 
          className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  </div>
</section>


      {/* Gallery Section */}
          <section id="gallery" className="py-20 bg-gradient-to-b from-[#01D9F0] to-[white]">
      <div className="container mx-auto">
       
          <h2 className="font-playfair text-4xl md:text-5xl text-[#0f0e0e] text-center mb-12">Our Creations</h2>
          <Gallery />
        
      </div>
    </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-[#FDBAF0] to-[white]">
        <div className="container mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#0f0e0e] text-center mb-12 font-bold">Why Choose Us?</h2>
          <Features />
        </div>
      </section>

      

      {/* Gallery2 Section */}
      <section id="gallery2" className="py-20 bg-gradient-to-b from-[#01D9F0] to-[white]">
  <div className="container mx-auto">
    
      <h2 className="font-playfair text-4xl md:text-5xl text-[#0f0e0e] text-center mb-12 font-bold">More Sweet Moments</h2>
      <Gallery2 />
    
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#0f0e0e] text-center mb-12 font-bold">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-playfair text-2xl text-[#0f0e0e] mb-4">Visit Us</h3>
              <p className="text-[#0101010] mb-6">
              Crescent Shopping Centre
                <br />
                Ground Floor 
                Shop 103
                <br />
                1-3 Sunset Crescent , Umhlanga, Durban
              </p>
              <h3 className="font-playfair text-2xl text-[#0f0e0e] mb-4">Hours</h3>
              <p className="text-[#0f0e0e]">
              Monday - Friday: 9am - 6pm
                <br />
                Saturday: 9am - 4pm
                <br />
                Sunday: 9am - 3pm
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

