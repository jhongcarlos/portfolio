"use client";

import dynamic from "next/dynamic";
import { ComponentProps } from "react";

// Dynamically import to avoid SSR issues with the canvas renderer
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((m) => m.Player),
  { ssr: false, loading: () => <div className="w-full h-full" /> }
);

type PlayerProps = ComponentProps<typeof Player>;

export function LottiePlayer(props: PlayerProps) {
  return <Player {...props} />;
}
