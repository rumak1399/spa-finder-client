export default function CareerPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Careers at SpaFinder</h1>
      <p className="text-muted-foreground mb-4">
        Join our mission to bring wellness and relaxation to everyone. Explore
        our open roles.
      </p>
      {/* Future: map open positions here */}
      <div className="border border-dashed p-6 rounded-md text-center text-muted-foreground">
        No job openings currently.
      </div>
    </div>
  );
}
