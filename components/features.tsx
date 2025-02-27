import { Heart, Star, Cake } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Cake className="h-8 w-8 text-[#E8B4B8]" />,
      title: "What sets us apart?",
      description:
        "Our dedication to creating personalised cakes that reflect your style and personality.",
    },
    {
      icon: <Cake className="h-8 w-8 text-[#E8B4B8]" />,
      title: "Premium Quality",
      description: "Whether you want a traditional design or something more contemporary, we work with you to bring your cake dreams to life.",
    },
    {
      icon: <Cake className="h-8 w-8 text-[#E8B4B8]" />,
      title: "At The Bake Shop Crescent",
      description: "we believe that cake isn't just a treat- it's a memory in the making. Come visit us, and let's make your next occasion as sweet as it can be",
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8 px-4">
      {features.map((feature, index) => (
        <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-center mb-4">{feature.icon}</div>
          <h3 className="font-playfair text-xl text-[#4A3427] mb-2">{feature.title}</h3>
          <p className="text-[#6B5D56]">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

