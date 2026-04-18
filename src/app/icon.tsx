import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F172A",
          borderRadius: "112px",
        }}
      >
        <svg width="512" height="512" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="7" fill="#0F172A" />
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="25.6" x2="10" y2="5.6" stroke="#FFFFFF" strokeWidth="2.2" />
            <line x1="10" y1="5.6" x2="16" y2="25.6" stroke="#FFFFFF" strokeWidth="2.2" />
            <line x1="6.4" y1="17.2" x2="13.6" y2="17.2" stroke="#6366F1" strokeWidth="2.2" />
            <line x1="18.8" y1="5.6" x2="18.8" y2="25.6" stroke="#FFFFFF" strokeWidth="2.2" />
            <line x1="26" y1="5.6" x2="26" y2="25.6" stroke="#FFFFFF" strokeWidth="2.2" />
            <line x1="18.8" y1="15.6" x2="26" y2="15.6" stroke="#6366F1" strokeWidth="2.2" />
            <circle cx="10" cy="5.6" r="2" fill="#6366F1" stroke="none" />
          </g>
        </svg>
      </div>
    ),
    size,
  );
}
