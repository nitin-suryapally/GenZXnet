const LinkedInCTA = () => {
    return (
      <div className=" px-4 py-8 w-full">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between w-full max-w-3xl">
          {/* Left Section - Text */}
          <div className="text-center md:text-left">
            <p className="text-gray-600">
              Connect with us on LinkedIn! <br />
              Find opportunities tailored to your talents.
            </p>
          </div>
  
          {/* Right Section - LinkedIn Button */}
          <div className="flex justify-center md:justify-end">
            <a
              href="https://www.linkedin.com" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2 hover:bg-orange-600 transition duration-300"
            >
              Get connected on LinkedIn
              <span className="text-blue-900">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default LinkedInCTA;
  