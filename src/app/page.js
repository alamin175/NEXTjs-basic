import Counter from "@/Components/Counter";
import Image from "next/image";
import Link from "next/link";
import next from "@/assets/next.jpg";

export const metadata = {
  title: "Home",
  description: "This is Home",
};

export default function Home() {
  return (
    <div className="m-4">
      <h1>This is home</h1>
      <div>
        <Link className="btn m-3" href="/">
          <button>Home</button>
        </Link>
        <Link className="btn m-3" href="/about">
          <button>About</button>
        </Link>
        <Link className="btn m-3" href="/contact">
          <button>Contact</button>
        </Link>
        <Link className="btn m-3" href="/homepage">
          <button>HomePage</button>
        </Link>
      </div>
      <Counter></Counter>
      <Image
        width={400}
        height={400}
        src="https://upload.wikimedia.org/wikipedia/commons/d/db/NEXT_2020_Logo.jpg"
      />
      <Image width={400} height={400} src={next} />
    </div>
  );
}
