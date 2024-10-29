export default function Footer() {
  return (
    <footer className="fixed bottom-0 bg-main left-0 right-0 text-center text-accent py-4">
      <div className="">
        &copy; {new Date().getFullYear()} TheRetroKingPlatform
      </div>
    </footer>
  );
}
