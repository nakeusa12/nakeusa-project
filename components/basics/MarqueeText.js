import Marquee from 'react-gsap-marquee'

export const MarqueeText = ({text, title}) => {
    return(
        <div className="relative w-full h-full">
            <Marquee className="rotate-[-3deg]" maxVelocity={0} reverseOnScrollUp={false} speed={20}>
              <h1 className="text-main-blue uppercase font-righteous block whitespace-nowrap text-[12vw] leading-[14vw] mb-20 align-middle pt-16 pr-10">{text}</h1>
            </Marquee>
            <div className="absolute top-0 left-0 right-0 w-full flex justify-center items-center h-full">
              <span className="bg-main-dark py-4 px-7 text-base uppercase text-white tracking-[0.2em]">
                {title}
              </span>
            </div>
        </div>
    )
}