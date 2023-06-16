"use client";

import { DetailNews } from "@/components/organisms";

export default function Page({ params: { id } }) {
  return <DetailNews id={id} />;
}
