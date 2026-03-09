type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function RenderContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                id={slugify(block.text)}
                className="mb-4 mt-8 scroll-mt-[100px] font-poppins text-[22px] font-bold text-ebombo-secondary md:text-[28px]"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                id={slugify(block.text)}
                className="mb-3 mt-6 scroll-mt-[100px] font-poppins text-[18px] font-semibold text-ebombo-secondary md:text-[22px]"
              >
                {block.text}
              </h3>
            );
          case "h4":
            return (
              <h4
                key={i}
                id={slugify(block.text)}
                className="mb-2 mt-4 scroll-mt-[100px] font-poppins text-[16px] font-semibold text-ebombo-secondary md:text-[18px]"
              >
                {block.text}
              </h4>
            );
          case "p":
            return (
              <p
                key={i}
                className="mb-4 font-roboto text-base leading-[1.7] text-ebombo-text"
              >
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="mb-4 ml-5 list-disc space-y-2 font-roboto text-base leading-[1.7] text-ebombo-text"
              >
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol
                key={i}
                className="mb-4 ml-5 list-decimal space-y-2 font-roboto text-base leading-[1.7] text-ebombo-text"
              >
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
