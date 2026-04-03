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
          background: "linear-gradient(145deg, #fff7f0 0%, #f3d7c4 100%)",
          borderRadius: "36px",
          color: "#5a3b30",
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
