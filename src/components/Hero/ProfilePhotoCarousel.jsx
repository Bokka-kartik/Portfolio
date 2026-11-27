import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const photos = [
  { src: "/Images/hero/kartik.png", alt: "Kartik Sai at a temple" },
  { src: "/Images/portraits/kartik-outdoors.jpg", alt: "Kartik outdoors" },
  { src: "/Images/portraits/kartik-closeup.jpg", alt: "Kartik in a jacket" },
  { src: "/Images/portraits/kartik-sunglasses.jpg", alt: "Kartik wearing sunglasses" },
  { src: "/Images/portraits/kartik-campus.jpg", alt: "Kartik on campus" },
];

const ProfilePhotoCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (!isPlaying) return undefined;

    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % photos.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const showPhoto = (index) => {
    setCurrent((index + photos.length) % photos.length);
  };

  return (
    <div
      className="portrait-carousel"
      role="group"
      aria-label="Kartik Sai photo carousel"
    >
      <div className="portrait-frame">
        {photos.map((photo, index) => (
          <img
            key={photo.src}
            className={`portrait-image${index === current ? " is-active" : ""}`}
            src={photo.src}
            alt={index === current ? photo.alt : ""}
            aria-hidden={index !== current}
            fetchPriority={index === current ? "high" : "auto"}
            decoding="async"
          />
        ))}
      </div>

      <div className="portrait-controls" aria-label="Photo controls">
        <button
          className="photo-control"
          type="button"
          onClick={() => showPhoto(current - 1)}
          aria-label="Show previous photo"
        >
          <ChevronLeft size={17} aria-hidden="true" />
        </button>
        <div className="photo-indicators" aria-label="Choose a photo">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              className={`photo-indicator${index === current ? " is-active" : ""}`}
              type="button"
              onClick={() => showPhoto(index)}
              aria-label={`Show photo ${index + 1} of ${photos.length}`}
              aria-pressed={index === current}
            />
          ))}
        </div>
        <button
          className="photo-control"
          type="button"
          onClick={() => showPhoto(current + 1)}
          aria-label="Show next photo"
        >
          <ChevronRight size={17} aria-hidden="true" />
        </button>
        <button
          className="photo-control"
          type="button"
          onClick={() => setIsPlaying((playing) => !playing)}
          aria-label={isPlaying ? "Pause photo slideshow" : "Play photo slideshow"}
        >
          {isPlaying ? (
            <Pause size={15} aria-hidden="true" />
          ) : (
            <Play size={15} aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProfilePhotoCarousel;
