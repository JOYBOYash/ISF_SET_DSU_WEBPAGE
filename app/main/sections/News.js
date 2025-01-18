import Button from "@/app/components/Button";
import React from "react";
import NewsCard from "@/app/components/NewsCard";

function News() {
  return (
    <section className="home-about m-[100px] about py-10">
      <h1 className="memtitle text-4xl font-bold text-left mb-6">Anouncements </h1>
      <div className=" flex flex-col gap-6 items-center">
        <div className="newscards flex m-4 w-full items-center gap-12 justify-center mx-auto p-6 shadow-md rounded-lg">
          <NewsCard />
        </div>
        <Button text="View all" link="/main-news" />
      </div>
    </section>
  );
}

export default News;
