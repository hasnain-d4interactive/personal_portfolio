import { ImageResponse } from "next/og";

export const alt = "Ahmed Hasnain portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 55%, #082f49 100%)",
          color: "white",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <div
              style={{
                height: "84px",
                width: "84px",
                borderRadius: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "radial-gradient(circle at top, rgba(125,211,252,0.7), rgba(8,47,73,0.7) 60%)",
                border: "1px solid rgba(255,255,255,0.18)",
                letterSpacing: "0.3em",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              AH
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 18, letterSpacing: "0.3em", opacity: 0.72 }}>
                FULL-STACK SOFTWARE DEVELOPER
              </span>
              <span style={{ fontSize: 30, fontWeight: 700 }}>Ahmed Hasnain</span>
            </div>
          </div>
          <div
            style={{
              padding: "12px 20px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              fontSize: "18px",
            }}
          >
            Laravel · React · Vue · Next.js · Python
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
            Building SaaS products for growth, content, and modern web workflows.
          </div>
          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              fontSize: "24px",
              color: "rgba(226,232,240,0.92)",
            }}
          >
            <span>Replug</span>
            <span>•</span>
            <span>ContentPen</span>
            <span>•</span>
            <span>Product-focused engineering</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
