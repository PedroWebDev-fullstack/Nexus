import Image from "next/image";


export default function Header() {
  return (
      <header className="fixed left-0 top-0 w-full p-5 bg-">
        <Image src="/favicon.webp" alt="" width={64} height={64} />
      </header>
  );
}
