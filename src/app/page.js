import Link from "next/link";

export default function Home() {
  return (
    <main style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>Bienvenido a la app de Cartas</h1>
      <p>¡Envía y lee cartas usando Next.js + Firebase!</p>
      <div style={{ marginTop: "2rem" }}>
        <Link href="/cartas">
          <button style={{ marginRight: "1rem" }}>Ver cartas</button>
        </Link>
        <Link href="/nueva-carta">
          <button>Enviar nueva carta</button>
        </Link>
      </div>
    </main>
  );
}
