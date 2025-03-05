import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#01D9F0] to-[white] text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-playfair text-xl mb-4">Contact</h3>
            <p className="text-sm">
              3 Sunset Crescent, Umhlanga Ridge
              <br />
              Durban, South Africa
              <br />
              Phone: (068) 544-9130
              <br />
              Email: info@thebakeshop.co.za
            </p>
          </div>
          <div>
            <h3 className="font-playfair text-xl mb-4">Hours</h3>
            <p className="text-sm">
              Monday - Friday: 9am - 6pm
              <br />
              Saturday: 9am - 4pm
              <br />
              Sunday: 9am - 3pm
            </p>
          </div>
          <div>
            <h3 className="font-playfair text-xl mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com/watch/?v=1645710852822100&rdid=O7B8iaV1fs2pDfjr" className="hover:text-[#E8B4B8] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.facebook.com/watch/?v=1645710852822100&rdid=O7B8iaV1fs2pDfjr" className="hover:text-[#E8B4B8] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/watch/?v=1645710852822100&rdid=O7B8iaV1fs2pDfjr" className="hover:text-[#E8B4B8] transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
          <p>© {new Date().getFullYear()} The Bake Shop At Crescent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

