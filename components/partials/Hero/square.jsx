import { useEffect, useRef, useState } from "react";

export const Square = () => {
    // var moveSquare = useRef();

    // const moveSquare = (e) => {
    //     let move = document.querySelectorAll(".move");
    //     move.forEach((layer) => {
    //         const speed = layer.getAttribute("data-speed");

    //         const x = (window.innerWidth - e.target.pageX * speed) / 120;
    //         const y = (window.innerHeight - e.target.pageY * speed) / 120;

    //         layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    //     })
    //     // console.log("Test: ", e);
    //     console.log('Detected: ', move);
    // }

    const handleMove = e => {
       
        const moveSet = document.querySelectorAll('.move');
        moveSet.forEach((layer) => {
            const speed = layer.getAttribute("data-speed");

            const xScreen = ( e.screenX * speed ) / 250;
            const yScreen = ( e.screenY * speed ) / 250;
            layer.style.transform = `translateX(${xScreen}px) translateY(${yScreen}px)`;
            console.log("speed: ", speed);
            console.log("xScreen: ", e.screenX);
            console.log("yScreen: ", e.screenY);
        })

    };  

    return (
        <div className="w-full min-h-screen h-full flex items-center transition-transform duration-300" onMouseMove={e => handleMove(e)} >
            <svg viewBox="0 0 1582 747" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" ref={(el) => moveSquare = el}>
                <rect data-speed="-2" className="move" x="21.825" y="574.827" width="68.4134" height="62.5457" rx="10" transform="rotate(-28.5616 21.825 574.827)" fill="#D9D9D9" fillOpacity="0.6" />
                <rect data-speed="6" className="move" x="5.45166" y="181.283" width="24.1656" height="23.4325" rx="3" transform="rotate(13.4534 5.45166 181.283)" fill="white" fillOpacity="0.2" />
                <rect data-speed="4" className="move" x="494.397" y="522" width="31.8563" height="30.8899" rx="3" transform="rotate(38.2273 494.397 522)" fill="white" fillOpacity="0.2" />
                <rect data-speed="-6" className="move" x="536.383" width="41.2421" height="39.991" rx="3" transform="rotate(24.1009 536.383 0)" fill="white" fillOpacity="0.4" />
                <rect data-speed="8" className="move" x="1287.5" y="148.054" width="56.3963" height="54.6855" rx="3" transform="rotate(24.1009 1287.5 148.054)" fill="#D9D9D9" fillOpacity="0.6" />
                <rect data-speed="-4" className="move" x="1559.29" y="226.475" width="29.5011" height="28.6062" rx="3" transform="rotate(42.6137 1559.29 226.475)" fill="white" fillOpacity="0.4" />
                <rect data-speed="5" className="move" x="1455.99" y="614.993" width="23.8465" height="23.1231" rx="3" transform="rotate(52.3263 1455.99 614.993)" fill="white" fillOpacity="0.2" />
                <rect data-speed="-9" className="move" x="1041.54" y="700" width="33.2816" height="32.2719" rx="3" transform="rotate(52.3263 1041.54 700)" fill="white" fillOpacity="0.4" />
            </svg>
        </div>

    )
}

{/* <div class="particle-wrapper" style={{ willChange: 'opacity, transform', opacity: '1', transform: 'translate3d(0px, 0px, 0px) scale3d(1.5, 1.5, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
          <div class="particle-8" style={{willChange: 'transform', transform: 'translate3d(2.29228px, -1.62971px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-49deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}></div>
          <div class="particle-7" style={{willChange: 'transform', transform: 'translate3d(3.86535px, -4.1767px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-26deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}></div>
          <div class="particle-6" style={{willChange: 'transform', transform: 'translate3d(2.43459px, -6.62971px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(23deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}></div>
          <div class="particle-5" style={{willChange: 'transform', transform: 'translate3d(4.5769px, -4.1767px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(35deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}></div>
          <div class="particle-4" style={{willChange: 'transform', transform: 'translate3d(4.43459px, -1.35903px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(20deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}></div>
          <div class="particle-3" style={{willChange: 'transform', transform: 'translate3d(6.29228px, -1.81204px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(17deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}></div>
          <div class="particle-2" style={{willChange: 'transform', transform: 'translate3d(15.8768px, -11.9775px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-26deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}></div>
          <div class="particle-1" style={{willChange: 'transform', transform: 'translate3d(15.8768px, -6.16544px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(20deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}></div>
</div> */}