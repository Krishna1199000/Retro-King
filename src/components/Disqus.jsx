"use client";
import { DiscussionEmbed } from "disqus-react";

export default function Disqus({ url, identifier, title }) {
  return (
    <div className="mt-12">
      <DiscussionEmbed
        shortname="retro-king"
        config={{
          url: url,
          identifier: identifier,
          title: title,
          language: "en",
        }}
      />
    </div>
  );
}
