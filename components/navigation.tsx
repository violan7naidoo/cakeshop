"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="font-playfair text-xl text-[#4A3427]">The Bake Shop</span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["about", "gallery", "features", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-[#6B5D56] hover:text-[#4A3427] transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button className="md:hidden text-[#4A3427]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {["about", "gallery", "features", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-[#6B5D56] hover:text-[#4A3427] transition-colors text-left capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

