import React from "react";

function Footer() {
  return (
    <div className="w-full bg-black">
      <footer className="bg-black p-[30px] w-[1000px] m-0 m-auto">
        <nav>
          <p className="ml-[81px] mb-[20px] w-[400px] text-xs text-[#86868B]">
            More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
            <a href="#">other retailer</a> neer you.
            <span>Or Call 000800-040-1966.</span>
          </p>
          <div className="text-xs flex justify-between items-center border-t-[1px] border-[#86868B]">
            <div>
              <p className="text-[#86868B]">
                Copyright @ 2024 Apple Inc. All rights reserved.
              </p>
            </div>
            <div>
              <ul className="flex *:m-[20px]">
                <li>
                  <a href="#">Privacy Policy |</a>
                </li>
                <li>
                  <a href="#">Terms of Use |</a>
                </li>
                <li>
                  <a href="#">Sales Policy |</a>
                </li>
                <li>
                  <a href="#">Legal |</a>
                </li>
                <li>
                  <a href="#">Site Map |</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
