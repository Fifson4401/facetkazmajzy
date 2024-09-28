import Footer from "@/core/components/Footer/Footer";
import Header from "@/core/components/Header/Header";

export default function NotFound() {
  return (
    <div className='flex flex-col min-h-screen justify-between'>

      <Header />
      <main
        lang={'pl'}
        className="flex-1 flex flex-col items-center gap-6 overflow-hidden bg-background p-8 text-foreground light md:gap-10 md:px-14 md:py-8 xl:px-28"
      >
        <p>sads</p>
      </main>
      <Footer />
    </div>
  );
}