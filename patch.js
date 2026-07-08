const fs = require('fs');
const path = './components/Navbar.tsx';

let content = fs.readFileSync(path, 'utf8');

// 1. h3 text-[15px] -> text-[18px]
content = content.replace(/text-\[15px\]/g, 'text-[18px]');

// 2. p text-[11px] -> text-[13px] (for the subtitles under h3)
content = content.replace(/className="text-\[11px\] text-slate-500 font-semibold mb-6"/g, 'className="text-[13px] text-slate-500 font-semibold mb-6"');

// 3. left column item list container gap: flex flex-col gap-4 -> gap-[24px]
// We must be careful to only target the ones inside the mega menus left column.
// Those are followed by {EXPERTISE_MENU.left.items.map, etc.
content = content.replace(/<div className="flex flex-col gap-4">\s*\{([A-Z_]+_MENU\.left\.items\.map)/g, '<div className="flex flex-col gap-[24px]">\n                    {$1');

// 4. item container flex items-start gap-3 -> grid grid-cols-[auto_1fr] items-start gap-4
content = content.replace(/<div key=\{item\.title\} className="flex items-start gap-3">/g, '<div key={item.title} className="grid grid-cols-[auto_1fr] items-start gap-4">');

// 5. item icons
content = content.replace(/className="w-8 h-8 flex-shrink-0 mt-0\.5"/g, 'className="w-[32px] h-[32px] mt-1"');
content = content.replace(/className="w-8 h-8 bg-slate-100 rounded-lg flex-shrink-0 flex items-center justify-center text-\[#f58331\] font-bold text-xs mt-0\.5"/g, 'className="w-[32px] h-[32px] bg-slate-100 rounded-lg flex items-center justify-center text-[#f58331] font-bold text-xs mt-1"');

// 6. item title text-[10px] font-extrabold -> text-[13px] font-[800]
content = content.replace(/<span className="text-\[10px\] font-extrabold tracking-widest text-slate-800 uppercase leading-snug">/g, '<span className="text-[13px] font-[800] tracking-widest text-slate-800 uppercase leading-snug">');

// 7. item desc text-[10.5px] -> text-[12px]
content = content.replace(/<span className="text-\[10\.5px\] text-slate-500 font-medium leading-normal mt-0\.5">/g, '<span className="text-[12px] text-slate-600 font-[400] leading-normal mt-1">');

// 8. item links text-[10.5px] -> text-[12px]
content = content.replace(/className="text-\[#00539c\] font-bold text-\[10\.5px\] tracking-widest hover:underline hover:text-\[#f58331\] transition-colors"/g, 'className="text-[#00539c] font-bold text-[12px] tracking-widest hover:underline hover:text-[#f58331] transition-colors"');

// 9. Center column container gap-1 -> gap-4
content = content.replace(/className="col-span-3 border-r border-slate-200 pr-4 flex flex-col gap-1 select-none"/g, 'className="col-span-3 border-r-[2.5px] border-slate-200 pr-[32px] flex flex-col gap-4 select-none"');

// 10. Center column button text-[11px] -> text-[13px]
content = content.replace(/className=\{`flex items-center justify-between w-full text-left px-4 py-\[9px\] font-bold text-\[11px\] tracking-widest uppercase rounded-\[4px\] transition-all duration-150 cursor-pointer \$\{/g, 'className={`flex items-center justify-between w-full text-left px-4 py-[8px] font-bold text-[13px] tracking-widest uppercase rounded-[4px] transition-all duration-150 cursor-pointer ${');

// 11. Right column subservices container gap-y-3.5 -> gap-y-[16px]
content = content.replace(/className="grid grid-cols-2 gap-x-8 gap-y-3\.5 pr-4"/g, 'className="grid grid-cols-2 gap-x-8 gap-y-[16px] pr-4"');

// 12. Right column subservices items text-[11.5px] -> text-[13px] font-[200]
content = content.replace(/className="text-slate-600 hover:text-\[#00539c\] transition-colors text-\[11\.5px\] font-bold tracking-wide py-0\.5"/g, 'className="text-[#333333] hover:text-[#00539c] transition-colors text-[13px] font-[200] leading-[24px] py-0.5"');

// 13. AI left item extra element fix. There's a <div> that has <span className="text-[10px]...
// We already replaced text-[10px] globally.

fs.writeFileSync(path, content, 'utf8');
console.log('Navbar updated successfully.');
