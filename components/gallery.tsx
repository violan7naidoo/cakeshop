import Image from "next/image";

export function Gallery() {
  const images = [
    {
      src: "/1.png?height=400&width=400",
      alt: "Sponge Cake",
      startingPrice: "R550",
      sizes: ["6″", "3 Layers", "15cm"],
      flavors: ["Vanilla", "Chocolate", "Red Velvet"],
      decor: "Colour Drip, Laminimated, Toppers, Beads & Choc",
    },
    {
      src: "/2.png?height=400&width=400",
      alt: "Sponge Cake",
      startingPrice: "R850",
      sizes: ["6″", "3 Layers", "18cm"],
      flavors: ["Chocolate", "Vanilla", "Red Velvet", "Lemon"],
      decor: "Colour, Toppers, Macaroons, Fondant, Decor",
    },
    {
      src: "/3.png?height=400&width=400",
      alt: "Sponge Cakes",
      startingPrice: "R980",
      sizes: ["8″", "3 Layers", "20cm"],
      flavors: ["Vanilla", "Chocolate", "RedVelvet", "Orange", "Lemon"],
      decor: "Drip, Colour, Laminated, Topper, Choc, Beads, etc",
    },
    {
      src: "/4.png?height=400&width=400",
      alt: "Tier Cake",
      startingPrice: "R1100",
      sizes: ["7″ bottom", "5″ Top"],
      flavors: ["Vanilla", "Chocolate", "RedVelvet", "Orange", "Coconut", "Caramel"],
      decor: "Drip or Plain, Colour, Fondant, Piped Roses, Shimmer & Beads",
    },
    {
      src: "/5.jpg?height=400&width=400",
      alt: "Tier Cake",
      startingPrice: "R1425",
      sizes: ["7″ Top", "9″ Bottom", "3 or 4 Layers″"],
      flavors: ["Vanilla", "Chocolate", "RedVelvet", "Orange", "Lemon"],
      decor: "Colour, Rose, Swirl, Gold Beads, Topper, Shimmer & Fondant",
    },
    {
      src: "/6.png?height=400&width=400",
      alt: "3 layers",
      startingPrice: "R2400",
      sizes: ["5″ Top", "7″ Middle", "9″ Bottom"],
      flavors: ["Vanilla", "Chocolate", "Red Velvet", "Coconut", "Caramel", "Orange"],
      decor: "Fruit, Mararoons, Beads, Fondant, Flowers, Shimmer, Additional Decor Charge",
    },
    {
      src: "/7barbie.png?height=400&width=400",
      alt: "Y2 Beer Box",
      startingPrice: "R435",
      sizes: ["20cm x 15cm"],
      flavors: ["Vanilla", "Chocolate", "Single Layer", "Lemon", "Red Velvet", "Orange"],
      decor: "Ribbon, Beads, Picture, Butter Cream, Desseert Cream",
    },
    {
      src: "/8.png?height=400&width=400",
      alt: "Beer Box",
      startingPrice: "R795",
      sizes: ["30cm x 20cm"],
      flavors: ["Vanilla", "Chocolate", "Single layer", "RedVelvet", "Orange", "Coconut"],
      decor: "Ribbon, Beads, Picture or Only Wording",
    },
    {
      src: "/10.png?height=400&width=400",
      alt: "Sponge Cake",
      startingPrice: "R350 - R2400",
      sizes: ["16″"],
      flavors: ["Vanilla", "Chocolate", "Red Velvet", "Coconut", "Caramel", "Orange", "Lemon"],
      decor: "Ribbon, Picture, Only Wording, Butter cream, Dessert Cream",
    },
    {
      src: "/11.png?height=400&width=400",
      alt: "16 Inch",
      startingPrice: "R350 - R2400",
      sizes: ["16″"],
      flavors: ["Vanilla", "Chocolate", "Caramel", "Coconut", "Red Velvet", "Orange", "Lemon"],
      decor: "Ribbon, Only Wording, Picture, Butter Cream, Desseert Cream",
    },
    {
      src: "/12.png?height=400&width=400",
      alt: "3 layers Tier Cake Butter Cream",
      startingPrice: "R1950 - R2100",
      sizes: ["8″", "10″"],
      flavors: ["Vanilla", "Chocolate", "Lemon", "RedVelvet", "Orange", "Coconut", "Caramel"],
      decor: "Colour, Shimmer, Beads, Flowers, Fondant",
    },
    {
      src: "/heart.jpg?height=400&width=400",
      alt: "Heart Shaped Cake 3 Layers",
      startingPrice: "R490 - R600",
      sizes: ["3 layers"],
      flavors: ["Vanilla", "Chocolate", "Red Velvet", "Coconut", "Caramel", "Orange", "Lemon"],
      decor: "Fondant, Flowers, Rice Paper, Butterfly, Fondant Shells",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {images.map((image, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Image Container */}
          <div className="relative aspect-square w-full overflow-hidden rounded-lg">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          {/* Info Below Image */}
          <div className="mt-4 text-center">
            <h3 className="text-[#222222] text-xl font-playfair mb-2">{image.alt}</h3>
            <p className="text-[#101010] font-semibold mb-1">From {image.startingPrice}</p>
            <div className="text-[#242323] text-sm space-y-1">
              <p>
                <span className="text-[#101010] font-medium">Sizes:</span> {image.sizes.join(", ")}
              </p>
              <p>
                <span className="text-[#101010] font-medium">Flavors:</span> {image.flavors.join(", ")}
              </p>
              <p>
                <span className="text-[#101010] font-medium">Decor:</span> {image.decor}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}