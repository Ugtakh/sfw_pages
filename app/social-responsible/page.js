"use client";
import Layout from "@/components/layout/Layout";
import { useEffect, useRef, useState, forwardRef } from "react";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import AsideBar from "./AsideBar";
import { years } from "./data.js";

const durationFn = function (deltaTop) {
  return deltaTop;
};

const scrollToTop = () => {
  animateScroll.scrollToTop();
};
const scrollTo = (offset) => {
  scroller.scrollTo("scroll-to-element", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
    offset: offset,
  });
};
const scrollToWithContainer = () => {
  let goToContainer = new Promise((resolve, reject) => {
    Events.scrollEvent.register("end", () => {
      resolve(true);
      Events.scrollEvent.remove("end");
    });

    scroller.scrollTo("scroll-container", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  });

  goToContainer.then(() =>
    scroller.scrollTo("scroll-container-second-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      containerId: "scroll-container",
      offset: 50,
    })
  );
};

export default function Page() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div
          className="single-blog-area padding-top inner-font-1 inner-blog-1"
          id="home"
        >
          <div className="container" style={{ marginTop: 30 }}>
            <h3>Нийгмийн хариуцлага</h3>
            <p>
              Манай банк бус санхүүгийн байгууллага нь Монголын банк бус
              санхүүгийн байгууллагуудын холбооноос зохион байгуулдаг бүх аян
              болон үйл ажиллагаанд нийгмийн хариуцлагын үүднээс идэвхтэй
              оролцдог болно.
            </p>
            <div className="row">
              <AsideBar years={years} />
              <MainContent years={years} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

const MainContent = ({ years }) => {
  return (
    <div className="col-lg-8" style={{ paddingTop: 30, paddingBottom: 30 }}>
      {years.map((year) => (
        <Element name={"year" + year.year} className="element">
          <div className="single-blog-contents lg-ml-15">
            <div className="single-blog-img">
              <img src={year.imgUrl || ""} alt="" />
            </div>
            <h3>{year.year.split("-")[0]}</h3>
            <div className="blog-date-time"></div>
            <p>{year.content}</p>
            <div className="theme-border" />
          </div>
        </Element>
      ))}
    </div>
  );
};
