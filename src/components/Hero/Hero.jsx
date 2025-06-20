import React, { useEffect, useState } from "react";
import { fetchDataFromTMDB } from "../../api/tmdb";
import "./Hero.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { ORIGINAL_IMG_BASE_URL, RESPONSIVE } from "../../utils/constants";
import CarouselCard from "../CarouselCard/CarouselCard";

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [trendingItems, setTrendingItems] = useState([]);

  useEffect(() => {
    const fecthTrendingContent = async () => {
      setLoading(true);
      try {
        const data = await fetchDataFromTMDB(
          "/trending/all/day?language=en-US"
        );
        const firstBackdrop = data.results?.[0]?.backdrop_path;
        if (firstBackdrop) {
          const preloadLink = document.createElement("link");
          preloadLink.rel = "preload";
          preloadLink.as = "image";
          preloadLink.href = `${ORIGINAL_IMG_BASE_URL}${firstBackdrop}`;
          preloadLink.fetchPriority = "high";
          document.head.appendChild(preloadLink);
        }
        setTrendingItems(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fecthTrendingContent();
  }, []);

  if (loading)
    return (
      <div className="hero-skeliton shimmer">
        <div className="carousel-card-container"></div>
      </div>
    );

  return (
    <div className="hero-container">
      <Carousel
        infinite={true}
        responsive={RESPONSIVE}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={true}
      >
        {trendingItems.map((item) => (
          <CarouselCard key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
