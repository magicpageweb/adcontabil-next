import { ImageResponse } from "next/og";
import { BRAND, TAGLINE } from "@/lib/site";

export const alt = `${BRAND} — Contabilidade para Profissionais da Saúde`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(160deg, #4A2F0E 0%, #6B4515 45%, #BF7D2C 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "sans-serif",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "120px",
            background: "#F6A01A",
            color: "#4A2F0E",
            fontSize: "48px",
            fontWeight: "bold",
            borderRadius: "24px",
            marginBottom: "40px",
          }}
        >
          AD
        </div>
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          {BRAND}
        </h1>
        <p
          style={{
            fontSize: "32px",
            color: "rgba(255, 255, 255, 0.85)",
            textAlign: "center",
            maxWidth: "800px",
            letterSpacing: "2px",
          }}
        >
          {TAGLINE} para profissionais da saúde
        </p>
      </div>
    ),
    { ...size }
  );
}
