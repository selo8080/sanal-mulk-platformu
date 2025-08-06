import Navbar from '../components/Navbar';

export default function Cities() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <h1>Şehirler</h1>
        <p>Farklı şehirlerdeki mülkleri inceleyin ve fırsatları keşfedin.</p>
        <ul>
          {['İstanbul', 'Ankara', 'İzmir', 'Antalya', 'Bursa', 'Eskişehir', 'Trabzon', 'Gaziantep', 'Konya', 'Samsun'].map(city => (
            <li key={city}>{city}</li>
          ))}
        </ul>
      </main>
    </>
  );
}