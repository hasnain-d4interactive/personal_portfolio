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
          background: "linear-gradient(145deg, #ffffff 0%, #f6f6f4 58%, #efefed 100%)",
          color: "#141414",
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
            background: "rgba(253, 196, 72, 0.2)",
            filter: "blur(18px)",
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
                background: "#fdc448",
                border: "1px solid rgba(20,20,20,0.08)",
                letterSpacing: "0.3em",
                fontSize: "24px",
                fontWeight: 700,
                color: "#141414",
              }}
            >
              AH
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 18, letterSpacing: "0.3em", color: "#fdc448" }}>
                FULL-STACK SOFTWARE DEVELOPER
              </span>
              <span style={{ fontSize: 30, fontWeight: 700 }}>{`Ahmed Hasnain`}</span>
            </div>
          </div>
          <div
            style={{
              padding: "12px 20px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.82)",
              border: "1px solid rgba(20,20,20,0.1)",
              fontSize: "18px",
              color: "#5f6673",
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
              color: "#5f6673",
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
