interface HeroBannerProps {
  bannerImage?: string;
}

export function HeroBanner({ bannerImage }: HeroBannerProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem]">
        {bannerImage ? (
          <img
            src={bannerImage}
            alt="Bhagavad Gita - Sacred Scripture"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 gradient-maroon" />
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground drop-shadow-lg animate-fade-up">
            BHAGAVAD GĪTĀ
          </h1>
          <p className="mt-4 font-heading text-lg sm:text-xl md:text-2xl text-primary-foreground/90 italic drop-shadow animate-fade-up" style={{ animationDelay: '0.1s' }}>
            श्रीमद्भगवद्गीता
          </p>
          <p className="mt-2 text-sm sm:text-base text-primary-foreground/80 max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            The Song of the Lord - Ancient wisdom for modern seekers
          </p>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 gradient-saffron" />
    </section>
  );
}
