import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const dentistSlides = [
  {
    url: "../public/logo512.png",
    title: "Dentist",
  },
];

export function ImageSlider(props) {
  let slides = [
    {
      url: "https://drive.google.com/uc?id=15-vc0Y-28QPcyVNWQSNKmfRY2eWbSmKH",
      title: "teepees1",
    },
    {
      url: "https://drive.google.com/uc?id=1APlL7EZnowTtjnKLtsVCYg0h1jg2YW2Y",
      title: "teepees2",
    },
    {
      url: "https://drive.google.com/uc?id=1SrMKP6fEknN_a6oAjyJIjxYJiX-p49zi",
      title: "teepees3",
    },
    {
      url: "https://drive.google.com/uc?id=1y4vViDebbwr-alU60i1vYijUQwnjZIVI",
      title: "teepees4",
    },
  ];
  if (props.slides) {
    slides = props.slides;
    console.log(slides);
  }

  slides = dentistSlides;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group bg-[#393E46]">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      {/* Left Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            className="text-2xl cursor-pointer"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
