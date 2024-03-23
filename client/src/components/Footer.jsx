import React from "react";
import '../index.css'
function Footer() {
  return (
    <>
      <hr className="text-white mx-5" />
      <footer className="bg-green-500 pb-5">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <img
                className="rounded-full size"
                src="../src/Images/logoo.png"
                width="40"
                height="40"
              />
            </div>

            <p className="mt-4 text-sm text-center text-white lg:text-right lg:mt-0">
              T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developers
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
