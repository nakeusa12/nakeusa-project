import { TweenMax } from "gsap";
import React from "react";
import { useEffect } from "react";

export const CustomCursor = () => {
  const cursor = React.useRef(null);
  const cursorFollower = React.useRef(null);
  const cursorGroup = React.useRef(null);

  useEffect(() => {

    let posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;

    TweenMax.to({}, 0.02, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(cursorFollower.current, {
          css: {
            left: posX - 20,
            top: posY - 20,
          },
        });

        TweenMax.set(cursor.current, {
          css: {
            left: mouseX - 5,
            top: mouseY - 2,
          },
        });
      },
    });

    document.addEventListener("mousemove", (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });

    return () => {
      document.removeEventListener("mousemove", (e) => {
        mouseX = e.pageX;
        mouseY = e.pageY;
      });
    }
  }, []);

  useEffect(() => {

    // Card Project
    const cardProject = document.querySelectorAll(".content-card-project");

    cardProject.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.current.classList.add("active");
        cursorFollower.current.classList.add("active");
      });

      el.addEventListener("mouseleave", () => {
        cursor.current.classList.remove("active");
        cursorFollower.current.classList.remove("active");
      });
    });

    // Button
    const button = document.querySelectorAll(".button--winona");

    button.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.current.classList.add("is-btn");
        cursorFollower.current.classList.add("is-btn");
      });

      el.addEventListener("mouseleave", () => {
        cursor.current.classList.remove("is-btn");
        cursorFollower.current.classList.remove("is-btn");
      });
    });
  }, []);

  return (
    <div className="relative z-[10000]" ref={cursorGroup}>
      <div className="cursor bg-main-red dark:bg-main-blue active:bg-main-red dark:active:bg-main-blue" ref={cursor}></div>
      <div className="cursor-follower border-main-dark dark:border-main-whiteGray" ref={cursorFollower}></div>
    </div>
  );
};
