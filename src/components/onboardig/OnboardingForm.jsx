

function OnboardingForm() {
  return (
    <div className="min-h-screen w-9/10 bg-gray-900 text-white flex items-center justify-center">
      <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-5xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Enter your details</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="linkedin">LinkedIn Link</label>
          <input type="url" id="linkedin" className="w-full p-2 bg-gray-700 rounded" placeholder="https://linkedin.com/in/yourprofile" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="facebook">Facebook Link</label>
          <input type="url" id="facebook" className="w-full p-2 bg-gray-700 rounded" placeholder="https://facebook.com/yourprofile" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="twitter">Twitter Link</label>
          <input type="url" id="twitter" className="w-full p-2 bg-gray-700 rounded" placeholder="https://twitter.com/yourprofile" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="thread">Thread Link</label>
          <input type="url" id="thread" className="w-full p-2 bg-gray-700 rounded" placeholder="https://thread.com/yourprofile" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="github">GitHub Link</label>
          <input type="url" id="github" className="w-full p-2 bg-gray-700 rounded" placeholder="https://github.com/yourprofile" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="portfolio">Portfolio</label>
          <input type="text" id="portfolio" className="w-full p-2 bg-gray-700 rounded" placeholder="Enter your portfolio link" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="portfolioLink">Portfolio Link</label>
          <input type="url" id="portfolioLink" className="w-full p-2 bg-gray-700 rounded" placeholder="https://yourportfolio.com" />
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create
        </button>
      </form>
    </div>
  );
}

export default OnboardingForm;