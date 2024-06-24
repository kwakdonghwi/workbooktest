import React from "react";
import BannerImg from "../../assets/coffee-white.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import BgImg from "../../assets/website/coffee-texture.jpg";

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-cursive"
                >
                  고급 커피
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-5"
                >
                  고객 자신, 고객이 회사의 아디피스싱을 추구할 수 있게 됩니다.
                  그리고 그들을 거부함으로써 그는 다른 위대한 사람들에게서 이러한 이유를 발견합니다.
                  옵션
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                      <span>최고급 커피</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                      <span>따뜻한 커피</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                      <span>차가운 커피</span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                  >
                    <h1 className="text-2xl font-semibold font-cursive ">
                      차도 있어요
                    </h1>
                    <p className="text-sm text-gray-500">

                      코드를 작성하는 것과 마찬가지로 완벽한 차 한 잔을 끓이려면
                      인내심, 정밀성, 그리고 약간의 열정이 필요합니다.
                      편안한 맛의 조화를 만들어내세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
