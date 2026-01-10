import { PostCard } from "@/components/post-card";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <main className="container mx-auto grid gap-12 p-12">
      <h1 className="text-4xl font-bold">Le journal des pompons</h1>

      <section className="grid gap-10">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </section>

      <hr />
      <Link href="/">&larr; Retour à l’accueil</Link>
    </main>
  );
}
