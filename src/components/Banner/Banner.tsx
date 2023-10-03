import Image from "next/image";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    window.scrollTo({ top: 80, behavior: "smooth" });
  }, []);

  return (
    <main>
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
          <div className="text-center">
            <h1 className="text-4xl text-primary font-semibold  sm:text-5xl  lg:text-7xl md:4px lh-96">
              Таны санхүүгийн асуудлыг
              <br /> бид шийднэ.
            </h1>
            <p className="mt-6 text-lg leading-8 text-bluegray">
              бид орон сууц, хашаа байшин барьцаалсан 24 сарын хугацаатай,
              3,9%-ийн хүүтэй, 5 сая төгрөг хүрлх зээлийг орлого нотлохгүйгээр{" "}
              <br /> өдөрт нь шийдвэрлэн олгож байна.
            </p>
          </div>

          <div className="text-center mt-5">
            <button
              type="button"
              className="text-15px text-white font-medium bg-primary py-5 px-9 mt-2 leafbutton"
            >
              Илүү дэлгэрэнгүй
            </button>
            <button
              type="button"
              className="text-15px ml-4 mt-2 text-primary transition duration-150 ease-in-out hover:text-white hover:bg-primary font-medium py-5 px-16 border border-primary leafbutton"
            >
              Хүсэлт илгээх
            </button>
          </div>

          <div className="max-w-4xl h-96 bg-blue m-auto mt-10">
            <Image
              src={"/assets/banner/slider-5.png"}
              alt="banner-image"
              width={900}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
