import React from "react";

export default function Homepage() {
  return (
    <main className="min-h-screen bg-[#e6f5f5] text-gray-800 font-sans">
      <section className="py-12 px-6 text-center">
        <img src="/logo.png" alt="VrijZekr logo" className="mx-auto w-32 mb-4" />
        <h1 className="text-4xl font-bold mb-2">VrijZekr</h1>
        <p className="text-xl italic">Vrij, maar zeker.</p>
      </section>
    </main>
  );
}