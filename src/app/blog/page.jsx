export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Our Blog</h1>
      <p className="text-muted-foreground mb-4">
        Explore wellness tips, self-care guides, and spa industry insights from
        our experts.
      </p>
      {/* Future: map blog posts here */}
      <div className="border border-dashed p-6 rounded-md text-center text-muted-foreground">
        No blog posts yet. Stay tuned!
      </div>
    </div>
  );
}
