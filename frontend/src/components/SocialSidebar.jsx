import { Facebook, Youtube } from "lucide-react";

const SocialSidebar = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-4">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 text-black hover:bg-yellow-600 bg-yellow-500 border-t border-black transition-colors"
          aria-label="Twitter"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 text-black bg-yellow-500 hover:bg-yellow-600 transition-colors border-t border-black"
          aria-label="Facebook"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 text-black bg-yellow-500 hover:bg-yellow-600 transition-colors border-t border-black"
          aria-label="YouTube"
        >
          <Youtube className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
