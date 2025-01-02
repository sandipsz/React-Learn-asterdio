import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import { useFetch } from "@/hooks/useFetch";
import { useState } from "react";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col items-center gap-2 border-2 rounded-[10px] border-slate-300 p-4 animate-pulse">
      <div className="w-[200px] h-[200px] bg-gray-300 rounded-[10px]"></div>
      <div className="w-3/4 h-6 bg-gray-300 rounded-[10px]"></div>
      <div className="w-full h-4 bg-gray-300 rounded-[10px]"></div>
      <div className="w-1/2 h-6 bg-gray-300 rounded-[10px]"></div>
    </div>
  );
};

const Home = () => {
  const [visibleItems, setVisibleItems] = useState(8);

  const { data, loading } = useFetch(
    `${import.meta.env.VITE_API_URL}/products`
  );

  const handleViewMore = () => {
    setVisibleItems((prev) => prev + 8);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-4">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div
                className="my-4 mx-auto w-64 md:w-72 justify-center items-center"
                key={index}
              >
                <SkeletonCard />
              </div>
            ))
          : data?.slice(0, visibleItems).map((item) => (
              <div
                className="my-4 mx-auto w-64 md:w-72 justify-center items-center"
                key={item.id}
              >
                <Card
                  id={item.id}
                  title={item.title.split(" ").slice(0, 2).join(" ")}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                  rating={item.rating}
                />
              </div>
            ))}
      </div>
      {!loading && visibleItems < data.length && (
        <div className="flex justify-center mx-auto items-center my-6">
          <Button
            onClick={handleViewMore}
            className="px-8 py-3 items-center text-white bg-orange-500 rounded-[5px] hover:bg-orange-600"
          >
            View More
          </Button>
        </div>
      )}
    </>
  );
};

export default Home;
