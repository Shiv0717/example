import Link from 'next/link';

const categories = [
  'wire-rope-manufacturers',
  'steel-manufacturers',
  'cement-manufacturers'
];

async function fetchStates() {
  try {
    const response = await fetch('https://bestwebsitedesigningcompanyinindia.com/dynamic_api/api/state_list', {
      cache: 'no-store', // Prevents caching and fetches fresh data
    });

    if (!response.ok) {
      throw new Error('Failed to fetch states');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching states:', error);
    return [];
  }
}

export default async function StatePage() {
  const states = await fetchStates();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Select a Category and State</h1>
      {states.length === 0 ? (
        <p>No states available</p>
      ) : (
        categories.map((category) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl mb-4 capitalize">{category.replace(/-/g, ' ')}</h2>
            <ul className="flex flex-wrap gap-4">
              {states.map((state, index) => (
                <li key={index}>
                  <Link href={`/${category}-${encodeURIComponent(state)}`} className="text-blue-500 hover:underline">
                    {state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
