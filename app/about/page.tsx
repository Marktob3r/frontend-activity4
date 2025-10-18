import Link from "next/link";

export default function About() {
    return(
    <div className="h-screen flex items-center justify-center">
      <div className="h-4/5 w-2/5 flex flex-col items-center justify-center gap-5 bg-white rounded-[20px] shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] relative">
        <div className="absolute bottom-[20px] flex gap-5">
          <Link className="text-[grey] transition-[900ms] duration-[all] ease-[ease-in-out] hover:text-[black]" href="/">Home</Link>
          <Link className="text-[grey] transition-[900ms] duration-[all] ease-[ease-in-out] hover:text-[black]" href="/contact">Contact</Link>
        </div>
        <div className="top-[-50px] absolute">
          <h1>About Me</h1>
        </div>
        <div className="w-4/5">
            <p>Hi! I’m a Bachelor of Science in Information Technology (BSIT) student with a big passion for both technology and video games. Ever since I was young, I’ve been fascinated by how games work — from the code behind their mechanics to the creativity that brings virtual worlds to life. That curiosity eventually inspired me to pursue IT, where I could learn how to build, design, and understand the technology that powers the things I love.</p>
            <br/>
            <p>As a student, I’m constantly learning about programming, databases, and how technology connects people. I enjoy working on projects that challenge my problem-solving skills and allow me to turn ideas into something real. Whether it’s debugging a tricky piece of code or exploring new tools, I always try to approach it with patience and creativity.</p>
        </div>        
      </div>
    </div>
    );
}