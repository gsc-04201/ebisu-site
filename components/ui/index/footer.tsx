import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <Image
        src="/top-wave-black.png"
        alt="bottom wave"
        width={1920}
        height={500}
        className="object-cover"

      />
      <footer
        className="text-primary-foreground p-10"
        style={{ backgroundColor: "#333333" }}
      >
        <div className="container mx-auto text-center">
          <p>COPYRIGHT © 2024. MADE WITH ♡ RECYCLE EBISU</p>
        </div>
      </footer>
    </div>
  );
}
