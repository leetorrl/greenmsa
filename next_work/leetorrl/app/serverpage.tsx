'use server';

async function fetchData() {
  const res = await fetch("http://localhost:3000/api/hello");
  return res.json();
}

export default async function Page() {

  const data = await fetchData();

  return (
    <div>
      <h1>Fetched Data</h1>
      <ClientComponent data={data} />
    </div>
  );
}
