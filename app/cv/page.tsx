export default function CVPage() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <object
        data="/Danielle-CV.pdf"
        type="application/pdf"
        className="w-full h-full"
        aria-label="Danielle Mcloughlin's CV"
      >
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          <p className="mb-4">Your browser doesn't support embedded PDFs.</p>
          <a
            href="/Danielle-CV.pdf"
            download
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Download CV
          </a>
        </div>
      </object>
    </div>
  );
}
