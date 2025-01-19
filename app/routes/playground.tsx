import Playground from "@/components/playground";
import type { Route } from "./+types/playground";

export function meta(args: Route.MetaArgs) {
  return [
    { title: "Playground" },
    { name: "description", content: "Welcome to the Playground!" },
  ];
}

export default function () {
  return <Playground />;
}
