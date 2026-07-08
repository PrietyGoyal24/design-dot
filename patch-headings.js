const fs = require('fs');

function processFile(path, pointNum, title, href) {
  let content = fs.readFileSync(path, 'utf8');

  // Since we already modified the files with replace_file_content earlier, 
  // the current structure in the file looks like:
  /*
            <div className="flex items-center gap-4 whitespace-nowrap">
              <span className="text-[13px] font-display font-bold tracking-widest text-[#f27820]">
                05.
              </span>
              <div className="w-16 h-[1px] bg-slate-400" />
              <span className="text-[14px] font-extrabold tracking-wide text-slate-900">
                What Are Client Says.
              </span>
              <div className="flex-1" />
              <div className="w-16 h-[1px] bg-slate-400 hidden sm:block" />
              <a
                ...
              >
                EXPLORE
              </a>
            </div>
  */
  // Wait, I replaced lines 14-30 (or similar) inside `<div className="lg:col-span-5 space-y-4 text-left">`.
  
  // So let's match from `<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">`
  // up to the `</a>\n            </div>` inside the left column, but actually it's better to just regex 
  // the grid and the container and pull the header out.

  const regex = /<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">\s*<div className="lg:col-span-5 space-y-4 text-left">[\s\S]*?<\/a>\s*<\/div>/;

  const match = content.match(regex);
  if (!match) {
    console.log(`Could not find match in ${path}`);
    return;
  }

  const replacement = `<div className="flex items-center w-full whitespace-nowrap mb-10">
          <span className="text-[15px] font-extrabold tracking-widest text-[#f27820] mr-6">
            ${pointNum}
          </span>
          <div className="w-[80px] h-[1.5px] bg-[#f27820] mr-6" />
          <span className="text-[22px] font-extrabold tracking-wide text-slate-900">
            ${title}
          </span>
          <div className="flex-1" />
          <div className="w-[60px] h-[1px] bg-slate-900 mr-6 hidden sm:block" />
          <a
            href="${href}"
            target="_blank"
            className="bg-[#f27820] text-slate-950 hover:bg-black hover:text-white transition-colors px-[14px] py-[6px] text-[11px] font-bold tracking-widest uppercase"
          >
            EXPLORE
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 text-left">`;

  const newContent = content.replace(regex, replacement);
  fs.writeFileSync(path, newContent, 'utf8');
  console.log(`Updated ${path}`);
}

processFile('./components/Testimonials.tsx', '05.', 'What Are Client Says.', 'https://dd.mocup.in/testimonial');
processFile('./components/Clientele.tsx', '06.', 'Clientele.', 'https://dd.mocup.in/clientele');
processFile('./components/Blog.tsx', '07.', 'Blog .', 'https://blog.deesigndot.com/');
