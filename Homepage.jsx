import React from "react";

export default function Homepage() {
  return (
    <main className="min-h-screen bg-[#e6f5f5] text-gray-800 font-sans">
      <section className="py-12 px-6 text-center">
        <img src="/logo.png" alt="VrijZekr logo" className="mx-auto w-32 mb-4" />
        <h1 className="text-4xl font-bold mb-2">VrijZekr</h1>
        <p className="text-xl italic">Vrij, maar zeker.</p>
        <p className="max-w-xl mx-auto mt-4">
          Sinds 2015 helpen wij ondernemers uit verschillende branches die of niet meer kunnen freelancen of niet willen, maar dan wel mét de voordelen van loondienst. Samen met een partner ontzorgen wij jou. Geen risico, wel zekerheid – en met het kleinste verschil ten opzichte van het zelfstandig ondernemen. Jij blijft ondernemer en wij ontzorgen jou door deze dienst aan te bieden.
        </p>
        <a href="#contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition">
          Vraag vrijblijvend een proforma aan
        </a>
      </section>
    </main>
  );
}
