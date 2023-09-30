import Image from "next/image";

export default function Home() {
   return (
      <main>
         <h1>My Portfolio</h1>
         <Image src="/vercel.svg" alt="Next.js Logo" width={180} height={180} />
      </main>
   );
}
