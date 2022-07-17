import { useEffect, useState } from "react";

export const Square = () => {
    const [move, setMove] = useState({ ix: 0, iy: 0 });

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
    
    const getMousePos = e => {
        return { x: e.clientX, y: e.clientY };
    };
    
    const handleMove = e => {
        console.log(getMousePos(e));
    };
  

    return (
        <div className="w-full min-h-screen h-full flex items-center"  onMouseMove={e => handleMove(e)} >
            <svg viewBox="0 0 1582 747" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-[1550px] mx-auto ">
                <rect data-speed="2.6" className="move" x="21.825" y="574.827" width="68.4134" height="62.5457" rx="10" transform="rotate(-28.5616 21.825 574.827)" fill="#D9D9D9" fillOpacity="0.6" />
                <rect data-speed="2" className="move" x="5.45166" y="181.283" width="24.1656" height="23.4325" rx="3" transform="rotate(13.4534 5.45166 181.283)" fill="white" fillOpacity="0.2" />
                <rect data-speed="-2" className="move" x="494.397" y="522" width="31.8563" height="30.8899" rx="3" transform="rotate(38.2273 494.397 522)" fill="white" fillOpacity="0.2" />
                <rect data-speed="1" className="move" x="536.383" width="41.2421" height="39.991" rx="3" transform="rotate(24.1009 536.383 0)" fill="white" fillOpacity="0.4" />
                <rect data-speed="0.5" className="move" x="1287.5" y="148.054" width="56.3963" height="54.6855" rx="3" transform="rotate(24.1009 1287.5 148.054)" fill="#D9D9D9" fillOpacity="0.6" />
                <rect data-speed="-1" className="move" x="1559.29" y="226.475" width="29.5011" height="28.6062" rx="3" transform="rotate(42.6137 1559.29 226.475)" fill="white" fillOpacity="0.4" />
                <rect data-speed="3" className="move" x="1455.99" y="614.993" width="23.8465" height="23.1231" rx="3" transform="rotate(52.3263 1455.99 614.993)" fill="white" fillOpacity="0.2" />
                <rect data-speed="-3" className="move" x="1041.54" y="700" width="33.2816" height="32.2719" rx="3" transform="rotate(52.3263 1041.54 700)" fill="white" fillOpacity="0.4" />
            </svg>
        </div>

    )
}