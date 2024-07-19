//@ts-nocheck
import { Link } from "@nextui-org/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({ city,setCity,
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar city={city} setCity={setCity}/>
      <main className="container mx-auto max-w-6xl px-6 flex-grow pt-16" >
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">NextUI</p>
      </footer>
    </div>
  );
}
