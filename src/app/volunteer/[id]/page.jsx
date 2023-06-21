"use client";

import { DetailVolunteer } from "@/components/organisms";

export default function Page({ params: { id } }) {
  return <DetailVolunteer id={id} />;
}
