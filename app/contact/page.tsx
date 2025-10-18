import Link from "next/link";

export default function Contact() {
    return(
    <div className="h-screen flex items-center justify-center">
      <div className="h-4/5 w-2/5 flex flex-col items-center justify-center gap-5 bg-white rounded-[20px] shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] relative">
        <div className="flex flex-col gap-10">
            <div>   
                <div className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000ff"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Z"/></svg>
                    <p className="text-[1.2rem]">0961-612-2655</p>
                </div>
            </div>
            <div>
                <div className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000ff"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/></svg>
                    <p className="text-[1.2rem]">#13 Fontaine St., E.B.B., Olongapo City</p>
                </div>
            </div>
            <div>
                <div className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000ff"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z"/></svg>
                    <p className="text-[1.2rem]">202311074@gordoncollege.edu.ph</p>
                </div>
            </div>
        </div>
        <div className="absolute bottom-[20px] flex gap-5">
          <Link className="text-[grey] transition-[900ms] duration-[all] ease-[ease-in-out] hover:text-[black]" href="/">Home</Link>
          <Link className="text-[grey] transition-[900ms] duration-[all] ease-[ease-in-out] hover:text-[black]" href="/about">About Me</Link>
        </div>
        <div className="top-[-50px] absolute">
          <h1>Contact</h1>
        </div>        
      </div>
    </div>
    );
}