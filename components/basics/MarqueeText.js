import Marquee from 'react-gsap-marquee'

export const MarqueeText = ({text, title}) => {
    return(
        <div className="relative w-full h-full">
            <Marquee maxVelocity={0} reverseOnScrollUp={false} speed={20}>
              <h1 className="dark:text-main-blue text-main-red uppercase font-righteous block whitespace-nowrap text-9xl md:text-[12rem] leading-[14vw] mb-20 align-middle pt-16 pr-10">{text}</h1>
            </Marquee>
            <div className="absolute top-0 left-0 right-0 w-full flex justify-center items-center h-full">
              <span className="dark:bg-white bg-main-dark py-4 px-7 text-sm md:text-base uppercase dark:text-main-dark font-medium dark:font-medium text-white tracking-[0.2em]">
                {title}
              </span>
            </div>
        </div>
    )
}