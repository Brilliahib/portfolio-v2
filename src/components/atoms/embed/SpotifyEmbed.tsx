"use client";

interface SpotifyEmbedProps {
  url: string;
}

export default function SpotifyEmbed({ url }: SpotifyEmbedProps) {
  return (
    <div className="mx-auto w-full max-w-xl">
      <iframe
        style={{ borderRadius: "12px" }}
        src={url}
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}
