import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, rgba(2,6,23,1) 0%, rgba(14,116,144,1) 100%)",
          borderRadius: "36px",
          color: "white",
          fontSize: "72px",
          fontWeight: 700,
          letterSpacing: "0.24em",
        }}
      >
        AH
      </div>
    ),
    size,
  );
}
