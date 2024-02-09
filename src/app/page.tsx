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
      className="card w-full bg-base-100 rounded-none border border-primary hover:opacity-70 max-w-96 m-auto h-44"
    >
      {/* <div className="card-body items-center text-center gap-4">
        <h3 className="text-5xl text-right w-full">{day}</h3>
        <h2 className="card-title">{title}</h2>
      </div> */}
      <figure className="">
        <img src={img} alt="" className="h-44 object-cover w-full" />
      </figure>
    </a>
  );
}

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-8 flex flex-col gap-10 text-base-content">
      <h1 className="text-4xl md:text-6xl font-semibold text-center leading-[1.35]">
        30
        <br />
        <span className=" font-bold text-5xl md:text-8xl [&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
          Days of Code
        </span>
        <br />
        Calendar
      </h1>
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
