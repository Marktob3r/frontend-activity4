import Link from "next/link";
import Image from "next/image";
import Script from 'next/script';


export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-4/5 w-2/5 flex flex-col items-center justify-center gap-5 bg-white rounded-[20px] shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] relative">
        <div className="absolute left-[20px] top-[20px] flex flex-row gap-2">
          <div className="transition-[200ms] duration-[all] ease-[ease-in-out] hover:scale-105 cursor-pointer">
            <Link href={'https://www.facebook.com/marktob3r/'}>
              <Image src="/fb.png" alt="fb" width={35} height={35} draggable="false"/>
            </Link>
          </div>
          <div className="transition-[200ms] duration-[all] ease-[ease-in-out] hover:scale-105 cursor-pointer">
            <Link href={'https://github.com/Marktob3r'}>
              <Image src="/gh.png" alt="gh" width={35} height={35} draggable="false"/>
            </Link>
          </div>
        </div>
        <Image src="/1000.jpg" alt="profile" width={200} height={200} draggable="false"/>
        <p className="font-semibold text-center">Mark Christian Gabriel</p>
        <p className="text-center w-4/5 text-[0.8rem]">A BSIT student passionate about building practical tech solutions by day and leveling up in video games by night. Eager learner, team player, and always ready to apply coding skills to real-world problems.</p>
        <div className="absolute bottom-[20px] flex gap-5">
          <Link className="text-[grey] transition-[900ms] duration-[all] ease-[ease-in-out] hover:text-[black]" href="/about">About Me</Link>
          <Link className="text-[grey] transition-[900ms] duration-[all] ease-[ease-in-out] hover:text-[black]" href="/contact">Contact</Link>
        </div>
        <div className="top-[-50px] absolute">
          <h1>Home</h1>
        </div>
        <div className="text-[16px] px-[16px] py-[10px]">
          <button id="colorBtn" className="cursor-pointer">Click me</button>
        </div>
        <Script src="script.js" strategy="afterInteractive"/>
      </div>
    </div>
  );
}

