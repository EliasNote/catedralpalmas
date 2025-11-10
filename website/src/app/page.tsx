"use client";

import Image from "next/image";
import { Hero, News, Horarios } from "@/components";
import { NewsService } from "@/services/newsService";
import { News as NewsType } from "@/types";
import { useState, useEffect } from "react";

export default function Home() {
  const mx = "px-2";
  const [news, setNews] = useState<NewsType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsData = await NewsService.getNews();
        setNews(newsData);
      } catch (error) {
        console.error("Erro ao carregar notícias:", error);
        console.error("Error details:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-col gap-[60px] items-center w-full">
      <Hero />
      <div className="relative w-full flex justify-center overflow-hidden">
        <p className="absolute  left-4 md:left-8 lg:left-16 xl:left-80 top-1/2 -translate-y-1/2 text-justify text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl max-w-[80%] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[550px] px-2 z-10 font-playfair-display text-shadow-custom font-bold">
          Ele tomou sobre si as nossas enfermidades, e carregou com as nossas
          dores.
          <br />
          <br />
          Isaías 53:4
        </p>
        <div className="hidden lg:block w-full">
          <Image
            src={"/christ1.png"}
            width={1920}
            height={1180}
            quality={100}
            className="w-full h-[1180px] object-cover object-center"
            alt="Cristo carregando a cruz"
          />
        </div>
        <div className="block lg:hidden w-full">
          <Image
            src={"/christ1-mobile.png"}
            width={1920}
            height={1180}
            quality={100}
            className="w-full h-[1180px] object-cover object-center"
            alt="Cristo carregando a cruz"
          />
        </div>
      </div>
      <News news={news} className={mx} />
      <div className="relative w-full flex justify-center overflow-hidden">
        <p className="absolute left-4 md:left-8 lg:left-16 xl:left-80 top-1/2 -translate-y-1/2 text-justify text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl max-w-[80%] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[550px] px-2 z-10 font-playfair-display text-shadow-custom font-bold">
          Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que
          todo o que nele crer não pereça, mas tenha a vida eterna.
          <br />
          <br />
          João 3:16
        </p>
        <Image
          src={"/christ2.png"}
          alt="Cristo"
          width={1920}
          height={1180}
          quality={100}
          className="w-full h-[1180px] object-cover object-center"
        />
      </div>
      <Horarios className={mx} />
      <div className="relative w-full flex justify-center overflow-hidden">
        <p className="absolute left-4 md:left-8 lg:left-16 xl:left-50 top-1/2 -translate-y-1/2 text-justify text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl max-w-[80%] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[550px] px-2 z-10 font-playfair-display text-shadow-custom font-bold">
          E o sétimo anjo tocou a sua trombeta, e houve no céu grandes vozes,
          que diziam: Os reinos do mundo vieram a ser de nosso Senhor e do seu
          Cristo, e ele reinará para todo o sempre.
          <br />
          <br />
          Apocalipse 11:15
        </p>
        <Image
          src={"/christ3.png"}
          alt="Cristo"
          width={1920}
          height={1180}
          quality={100}
          className="w-full h-[1180px] object-cover object-center"
        />
      </div>
    </section>
  );
}
