export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop", // Food
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop", // Restaurant interior
    "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=800&auto=format&fit=crop", // Burger
    "https://images.unsplash.com/photo-1560081467-ce87968b3173?q=80&w=800&auto=format&fit=crop", // Drinks
    "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800&auto=format&fit=crop", // Seafood
  ];

  return (
    <section className="py-2 bg-cajun-black">
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-2 px-2 pb-4">
        {images.map((src, idx) => (
          <div key={idx} className="shrink-0 w-[80vw] sm:w-[40vw] md:w-[30vw] lg:w-[25vw] h-64 snap-center rounded-xl overflow-hidden">
            <img 
              src={src} 
              alt={`Gallery image ${idx + 1}`} 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
