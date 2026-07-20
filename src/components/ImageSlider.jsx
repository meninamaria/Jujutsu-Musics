import { useState, useEffect, useRef, useCallback } from "react";
import Banner1 from '../assets/banner/background1.svg'
import Banner2 from '../assets/banner/background2.svg'
import Banner3 from '../assets/banner/background3.svg'
import "./ImageSlider.css";

/**
 * ImageSlider
 * Slider de imagens que troca automaticamente, com dots de navegação
 * e pausa ao passar o mouse (hover).
 *
 * Uso:
 * <ImageSlider
 *   images={["/img1.jpg", "/img2.jpg", "/img3.jpg"]}
 *   interval={3000}
 * />
 */
export default function ImageSlider({
  images = [Banner1, Banner2, Banner3],
  interval = 3000,
}) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const goToSlide = useCallback((index) => {
    setCurrent(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(nextSlide, interval);
    return () => clearInterval(timerRef.current);
  }, [isPaused, interval, nextSlide]);

  return (
    <div
      className="slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          className={`slider-image ${i === current ? "active" : ""}`}
        />
      ))}

      <button
        onClick={prevSlide}
        aria-label="Slide anterior"
        className="slider-arrow slider-arrow-left"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        aria-label="Próximo slide"
        className="slider-arrow slider-arrow-right"
      >
        ›
      </button>

      <div className="slider-dots">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`slider-dot ${i === current ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
