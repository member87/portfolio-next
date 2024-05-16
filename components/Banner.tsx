import { useEffect, useState } from "react";

export function Banner() {
  const [banner, setBanner] = useState("false");

  useEffect(() => {
    setBanner(localStorage.getItem("banner") || "true");
  });

  const handleBanner = () => {
    localStorage.setItem("banner", "false");
    setBanner("false");
  }

  if (banner === "false") return null;

  return (
    <div className="sticky top-0 bg-accent py-4 px-2 text-center z-50 text-white shadow">
      <a href="https://blog.jackhumes.com">Checkout my blog here</a>
      <button onClick={handleBanner} className="w-8 h-8 absolute right-2">
        &#x2715;
      </button>
    </div>
  );
}
