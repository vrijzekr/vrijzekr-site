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

      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-6">Waarom VrijZekr?</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <h3 className="text-lg font-bold mb-2">Hypotheek</h3>
            <p>Wil je een huis kopen? Of heb je een werkgeversverklaring nodig? Bij ons is dit mogelijk en ben je vrijzekr van een mogelijke lening.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <h3 className="text-lg font-bold mb-2">Netto behoud</h3>
            <p>Beperk je netto-verschil, behoud je vrijheid én geniet van meer zekerheid.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <h3 className="text-lg font-bold mb-2">Zekerheid</h3>
            <p>Je werkt met zekerheid aan opdrachten, zonder zorgen over zzp-risico’s of juridische twijfels.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <h3 className="text-lg font-bold mb-2">Voordelen</h3>
            <p>Geniet van de voordelen van een werknemer. Bij ons kan je zaken regelen zoals ouderschapsverlof.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Voor wie?</h2>
        <p>Speciaal voor zelfstandigen in de zorg en financiële dienstverlening.</p>
      </section>

      <section className="py-12 px-6 bg-white text-center" id="contact">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-2">Stel je vraag of vraag direct een proforma aan:</p>
        <form className="max-w-md mx-auto mt-6 text-left">
          <label className="block mb-2 font-medium">Naam</label>
          <input type="text" className="w-full p-2 mb-4 rounded border border-gray-300" placeholder="Jouw naam" />

          <label className="block mb-2 font-medium">E-mailadres</label>
          <input type="email" className="w-full p-2 mb-4 rounded border border-gray-300" placeholder="jij@email.com" />

          <label className="block mb-2 font-medium">Bericht</label>
          <textarea className="w-full p-2 mb-4 rounded border border-gray-300" rows="4" placeholder="Waarmee kunnen we je helpen?"></textarea>

          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-2xl hover:bg-blue-700 transition">
            Verstuur
          </button>
        </form>
      </section>

      <section className="py-12 px-6 text-center bg-white">
        <h2 className="text-2xl font-semibold mb-6">Wat anderen zeggen</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <p className="text-yellow-500 text-xl mb-2">★★★★★</p>
            <p className="italic">“Heel fijn dat ik geen zorgen meer heb over mijn status als zzp’er. Alles is geregeld.”</p>
            <p className="mt-2 font-semibold">– Sarah, wijkverpleegkundige</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <p className="text-yellow-500 text-xl mb-2">★★★★★</p>
            <p className="italic">“Ik houd netto bijna hetzelfde over, maar ik heb wél een werkgeversverklaring gekregen.”</p>
            <p className="mt-2 font-semibold">– Mark, financieel adviseur</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <p className="text-yellow-500 text-xl mb-2">★★★★★</p>
            <p className="italic">“VrijZekr is echt een uitkomst. Geen gedoe met modelovereenkomsten of schijnzelfstandigheid.”</p>
            <p className="mt-2 font-semibold">– Ayşe, interim HR-specialist</p>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        &copy; 2025 VrijZekr. Alle rechten voorbehouden.
      </footer>
    </main>
  );
}
