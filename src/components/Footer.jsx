import React from "react";

export default function Footer() {
  const nofSocialMediaHandles = socialMediaHandles.length;
  return (
    <footer>
      <ul>
        {socialMediaHandles.map((socialMediaHandle, index) => {
          const { name, url } = socialMediaHandle;

          return (
            <li key={name} className="inline-block text-slate-400">
              <a
                href={url}
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
              {index + 1 < nofSocialMediaHandles && (
                <span className="inline-block px-2">|</span>
              )}
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

const socialMediaHandles = [];
