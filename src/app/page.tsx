import cardList from "./data";

function Card({
  img,
  title,
  day,
  link,
}: {
  img: string;
  title: string;
  day: number;
  link: string;
}) {
  return (
    <a
      href={link}
      className="card w-full bg-base-100 rounded-none border hover:opacity-70"
    >
      <div className="card-body items-center text-center gap-4">
        <h3 className="text-5xl text-right w-full">{day}</h3>
        <h2 className="card-title">{title}</h2>
      </div>
      <figure className="">
        <img src={img} alt="" className="" />
      </figure>
    </a>
  );
}

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-8 flex flex-col gap-10">
      <h1 className="text-6xl font-bold text-center ">30 Days of Code</h1>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
        {cardList.map((card, index) => (
          <Card
            img={card.img}
            link={card.link}
            title={card.title}
            key={index}
            day={index + 1}
          />
        ))}
      </div>
    </main>
  );
}
