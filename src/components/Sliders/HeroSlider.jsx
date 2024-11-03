"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function HeroSlider() {
  return (
    <div className="cursor-default">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          loop: true,
          pauseOnMouseClick: true,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="h-[500px] md:h-[400px] w-full mb-6 rounded-lg border border-accent-secondary bg-main"
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "0.6em",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-theme-color": "#fff",
          "--swiper-navigation-size": "30px",
          "--swiper-navigation-sides-offset": "30px",
        }}
      >
        <SwiperSlide
          className="bg-[url('/slide/slide-1.png')] md:bg-[url('/page/not-found.jpg')] bg-no-repeat bg-center md:bg-top p-20 bg-cover md:bg-cover  items-center"
          style={{ display: "flex" }}
        >
          <div className="max-w-3xl ">
            <div className="text-zinc-400 md:text-zinc-300 text-sm mb-2 uppercase">
              Free Arcade Games
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase shadow-lg">
              Play retro games
            </h1>
            <p className="my-6 max-w-[418px] font-normal text-white md:text-zinc-100">
              Relive the classics! Dive into our collection of retro games and
              enjoy them for free. Start playing now!
            </p>
            <a
              href="/all-games"
              className="text-sm font-semibold bg-accent-gradient py-3 px-6 rounded-xl border border-yellow-400 uppercase"
            >
              Explore Now
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="bg-[url('/slide/slide-2.jpg')] bg-no-repeat bg-center md:bg-right-top bg-cover p-20 items-center"
          style={{ display: "flex" }}
        >
          <div className="max-w-3xl ">
            <div className="text-zinc-300 text-sm mb-2 uppercase md:visible invisible">
              Mario Adventures
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase ">
              The World of Mario
            </h1>
            <p className="my-6 max-w-[418px] font-normal text-zinc-300">
              Step back into Mario’s world and help him save the day, one jump
              at a time!
            </p>

            <a
              href="/game/super-mario-64"
              className="text-sm font-semibold bg-accent-gradient py-3 px-6 rounded-xl border border-yellow-400 uppercase"
            >
              Play Mario
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="bg-[url('/slide/slide-4.jpg')] bg-no-repeat bg-right bg-cover p-20 items-center"
          style={{ display: "flex" }}
        >
          <div className="max-w-3xl ">
            <div className=" md:visible invisible text-zinc-300 text-sm mb-2 uppercase">
              Iconic Sonic Adventures
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase ">
              Race with Sonic
            </h1>
            <p className="my-6 max-w-[418px] font-normal text-zinc-100">
              Feel the thrill! Dash through loops, collect rings, and beat the
              clock in classic Sonic style.
            </p>

            <a
              href="/game/sonic-the-hedgehog"
              className="text-sm font-semibold bg-accent-gradient py-3 px-6 rounded-xl border border-yellow-400 uppercase"
            >
              Play Sonic
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
