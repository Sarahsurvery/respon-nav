import Image from "next/image";

export default function Home() {
  
  return (
    <div className="bg-sky-400 m-auto">
      <p className="bg-red-400 text-2xl min-h-80">My name is Sarah
      </p>
      <div className="grid grid-flow-col min-h-80">
      <span className="bg-violet-500 text-2px">I'm Textile & Fashion Designer</span>
      
      <div className="grid grid-flow-col min-h-80">
        <span className="bg-lime-500 text-2px">Also Media ART Creator</span>
      </div>
      </div>
    
    </div>
  );
}
