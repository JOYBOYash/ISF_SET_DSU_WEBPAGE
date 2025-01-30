"use client";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/config/firebase";
import { Newspaper, Trash2 } from "lucide-react";
import { Twitter, Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import ScrollAnimation from "./ScrollAnimations";

function NewsCard(props) {
  const [news, setNews] = useState([]);

  // Fetch news from Firestore
  useEffect(() => {
    const newsCollection = collection(db, "News");
    const unsubscribe = onSnapshot(newsCollection, (snapshot) => {
      const fetchedNews = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNews(fetchedNews);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const deleteNews = async (newsId) => {
    try {
      const newsRef = doc(db, "News", newsId);
      await deleteDoc(newsRef); // Deleting the news document from Firestore
      console.log("News deleted successfully");
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  return (
   <ScrollAnimation inAnimation="fadeIn" outAnimation="fadeOut">
     <div className=" p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-600/40">
        Latest News !
      </h1>
      <div
        className={
          props.adminView
            ? "news flex flex-wrap justify-center gap-8"
            : "news flex overflow-x-scroll gap-8"
        }
      >
        {news.map((item) => (
          <div
            key={item.id}
            className="newscard bg-blue-900/30 m-4 hover:bg-blue-900/40 flex flex-col hover:border-blue-600 border border-blue-700 rounded-xl shadow-xl gap-4 p-6 transition-transform transform hover:scale-105"
          >
            <div className=" relative">
              <Newspaper className="newl h-12 w-12 absolute top-0 right-0 -mt-8 -mr-8 text-blue-500" />
              <div className="textsn flex gap-2 items-center  mb-4 text-center">
                <h2 className="text-xl  font-semibold text-white">
                  {item.title}
                </h2>
                <div className="w-4 h-4 rounded-full animate-ping bg-red-600 p-2"></div>
              </div>
              <p className="titlen text-xl text-gray-300">
                {new Date(item.date).toDateString()}
              </p>
              <p className="descn text-xl text-gray-300 mb-4">{item.shortDesc}</p>
            </div>
            <div className="flex justify-between gap-2 items-center">
              <div className="nlinks flex items-center gap-4">
                {item.xLink && (
                  <a
                    href={item.xLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 p-2 bg-blue-500 rounded-full hover:bg-blue-700 transition-all duration-300 nbg"
                  >
                    <Twitter className="nicon h-6 w-6" />
                  </a>
                )}
                {item.fbLink && (
                  <a
                    href={item.fbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 p-2 bg-blue-500 rounded-full hover:bg-blue-900 transition-all duration-300 nbg"
                  >
                    <Facebook className="nicon h-6 w-6" />
                  </a>
                )}
                {item.instaLink && (
                  <a
                    href={item.instaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 p-2 bg-blue-500 rounded-full hover:bg-pink-700 transition-all duration-300 nbg"
                  >
                    <Instagram className="nicon h-6 w-6" />
                  </a>
                )}
                {item.linkedinLink && (
                  <a
                    href={item.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 p-2 bg-blue-500 rounded-full hover:bg-blue-900 transition-all duration-300 nbg"
                  >
                    <Linkedin className="nicon h-6 w-6" />
                  </a>
                )}
                {item.ytLink && (
                  <a
                    href={item.ytLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 p-2 bg-blue-500 rounded-full hover:bg-red-600 transition-all duration-300 nbg"
                  >
                    <Youtube className="nicon h-6 w-6" />
                  </a>
                )}
              </div>
              {props.adminViewdel && (
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition-all duration-300 nbg"
                  onClick={() => deleteNews(item.id)}
                >
                  <Trash2 className="nicon h-6 w-6 inline-block" />
                  Remove News
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
   </ScrollAnimation>
  );
}

export default NewsCard;
