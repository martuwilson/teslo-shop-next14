import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={
        titleFont.className
      }>
        New account page
      </h1>
    </main>
  );
}
