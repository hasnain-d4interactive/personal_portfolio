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
            "linear-gradient(145deg, #fffdf9 0%, #fff5eb 48%, #ffe7d6 100%)",
          color: "#2d211d",
          padding: "64px",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "-60px",
            top: "-80px",
            width: "320px",
            height: "320px",
            borderRadius: "999px",
            background: "rgba(249, 181, 126, 0.28)",
            filter: "blur(10px)",
          }}
        />
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
                borderRadius: "26px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #fff6ee, #f4d7c2)",
                border: "1px solid rgba(164, 109, 83, 0.18)",
                letterSpacing: "0.3em",
                fontSize: "24px",
                fontWeight: 700,
                color: "#5a3b30",
              }}
            >
              AH
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 18, letterSpacing: "0.3em", color: "#9d725a" }}>
                FULL-STACK SOFTWARE DEVELOPER
              </span>
              <span style={{ fontSize: 30, fontWeight: 700 }}>{`Ahmed Hasnain`}</span>
            </div>
          </div>
          <div
            style={{
              padding: "12px 20px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.75)",
              border: "1px solid rgba(219, 187, 166, 0.8)",
              fontSize: "18px",
              color: "#6a4b3c",
            }}
          >
            Laravel · React · Vue · Next.js · Python
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.06, maxWidth: 980 }}>
            Building modern SaaS products with AI-assisted delivery and full-stack focus.
          </div>
          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              fontSize: "24px",
              color: "#7b6053",
            }}
          >
            <span>Ahmed Hasnain</span>
            <span>•</span>
            <span>Replug</span>
            <span>•</span>
            <span>ContentPen</span>
            <span>•</span>
            <span>AI-enabled product delivery</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
