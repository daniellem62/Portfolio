export default function CVPage() {
  return (
    <div className="h-screen w-screen overflow-hidden lg:ml-64 flex flex-col pt-16 lg:pt-0">
      <object
        data="/Danielle_CV.pdf"
        type="application/pdf"
        className="w-full flex-1"
        aria-label="Danielle Mcloughlin's CV"
      >
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          <p className="mb-4">Your browser doesn't support embedded PDFs.</p>
          <a
            href="/Danielle_CV.pdf"
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
