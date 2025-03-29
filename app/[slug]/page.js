import Link from 'next/link';

export default function StateDetails({ params }) {
  const { slug } = params;

  if (!slug) {
    return <p>Loading...</p>;
  }

  const decodedSlug = decodeURIComponent(slug);
  const parts = decodedSlug.split('-');

  const state = parts.pop(); // Extract state
  const category = parts.join(' '); // Extract category

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Category: {category}</h1>
      <h2 className="text-2xl">State: {state}</h2>
      <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
    </div>
  );
}
