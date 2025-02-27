import Image from "next/image"
import { ContactForm } from "./components/contact-form"
import { Gallery } from "./components/gallery"
import { Gallery2 } from "./components/gallery2"
import { Navigation } from "./components/navigation"
import { Features } from "./components/features"
import { Footer } from "./components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      <Navigation />

    
      {/* Mobile Hero Section (visible below sm breakpoint) */}
      <section className="relative h-[50vh] flex items-center justify-center sm:hidden">
        <Image
          src="/HeroMobile.jpg"
          alt="Beautiful decorated cake (mobile)"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="relative z-10 text-center text-white">
        
        </div>
      </section>

      {/* Desktop Hero Section (visible on sm and above) */}
      <section className="relative h-[90vh] hidden sm:flex items-center justify-center">
        <Image
          src="/Hero.jpg"
          alt="Beautiful decorated cake"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="relative z-10 text-center text-white">
   
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#4A3427] mb-6">About Us</h2>
          <p className="text-[#6B5D56] mb-12 leading-relaxed">
            Welcome to The Bake Shop At Crescent, where passion meets perfection in every creation. We believe that
            every celebration deserves something extraordinary, and that's exactly what we deliver - beautiful,
            delicious, and memorable cakes that become the centerpiece of your special moments.
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#4A3427] mb-6">Our Mission</h2>
          <p className="text-[#6B5D56] mb-12 leading-relaxed">
          Is simple : To create high-quality, mouthwatering cakes using the finest ingredients, with a touch of love in 
          every layer. We believe in bringing joy to our customers, one slice at a time, and providing an unforgettable experience with every order.
          </p>

          <h2 className="font-playfair text-4xl md:text-5xl text-[#4A3427] mb-6">Our Story</h2>
          <p className="text-[#6B5D56] leading-relaxed">
          Our journey began in 2020 when a passion for sweet treats grew, and today, we're proud to offer a wide variety of cakes-whether you're looking for a 
          classic flavor or something uniquely custom, we've got you covered. We use only the freshest ingredients, often sourced locally, ensuring that each cake is a piece of art in both taste and design.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#4A3427] text-center mb-12">Our Creations</h2>
          <Gallery />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#FAF3F0]">
        <div className="container mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#4A3427] text-center mb-12">Why Choose Us?</h2>
          <Features />
        </div>
      </section>

      {/* Gallery2 Section */}
      <section id="gallery2" className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#4A3427] text-center mb-12">More Sweet Moments</h2>
          <Gallery2 />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="font-playfair text-4xl md:text-5xl text-[#4A3427] text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-playfair text-2xl text-[#4A3427] mb-4">Visit Us</h3>
              <p className="text-[#6B5D56] mb-6">
              3 Sunset Crescent, Umhlanga Ridge
                <br />
                Durban, South Africa
              </p>
              <h3 className="font-playfair text-2xl text-[#4A3427] mb-4">Hours</h3>
              <p className="text-[#6B5D56]">
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

