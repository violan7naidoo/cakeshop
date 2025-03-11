import Image from "next/image";

export function Gallery2() {
  const images = [
    { src: "/m.jpg?height=400&width=400", alt: "Cake 1" },
    { src: "/g.jpg?height=400&width=400", alt: "Cake 2" },
    { src: "/w.jpg?height=400&width=400", alt: "Cake 3" },
    { src: "/k.jpg?height=400&width=400", alt: "Cake 4" },
    { src: "/ii.jpg?height=400&width=400", alt: "Cake 5" },
    { src: "/q.jpg?height=400&width=400", alt: "Cake 6" },
    { src: "/o.jpg?height=400&width=400", alt: "Cake 7" },
    { src: "/pp.jpg?height=400&width=400", alt: "Cake 8" },
    { src: "/b.jpg?height=400&width=400", alt: "Cake 9" },
    { src: "/uu.jpg?height=400&width=400", alt: "Cake 10" },
    { src: "/kk.jpg?height=400&width=400", alt: "Cake 11" },
    { src: "/l.jpg?height=400&width=400", alt: "Cake 12" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}