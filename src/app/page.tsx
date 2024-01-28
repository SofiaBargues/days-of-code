import Image from "next/image";
import cardList from "./data";

export default function Home() {
  return (
    <main className="container mx-auto py-36 px-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {cardList.map((card, index) => (
          <div className="shadow-lg rounded-lg" key={index}>
            <img className="rounded-t-lg" src={card.img} alt="" />
            <div className="p-5">
              <h3 className="text-3xl font-bold text-slate-700 mb-3">
                {card.title}
              </h3>
              <p className="text-lg font-normal text-gray-600 ">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
