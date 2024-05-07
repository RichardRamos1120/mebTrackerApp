import { redirect } from 'next/navigation'

export default function Home() {
  redirect(`/congo`) // Navigate to the new post page

  return (
    <main className="main">
      <h1>Redirecting...</h1>
    </main>
  );
}



