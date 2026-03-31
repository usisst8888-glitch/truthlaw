"use client";

import Image from "next/image";

export default function MapPopup() {
  const handleClick = () => {
    const popup = window.open("", "mapPopup", "width=900,height=600,scrollbars=yes,resizable=yes");
    if (popup) {
      popup.document.write(`
        <html><head><title>오시는 길</title></head>
        <body style="margin:0;display:flex;justify-content:center;align-items:center;background:#f5f5f5;">
          <img src="/pc_section/section_06_map.png" style="max-width:100%;max-height:100vh;" />
        </body></html>
      `);
    }
  };

  return (
    <div className="shrink-0 cursor-pointer" onClick={handleClick}>
      <Image
        src="/pc_section/section_06_map.png"
        alt="오시는 길"
        width={828}
        height={524}
        className="h-auto rounded-lg hover:opacity-90 transition-opacity"
        style={{ maxWidth: "650px", width: "100%" }}
      />
    </div>
  );
}
