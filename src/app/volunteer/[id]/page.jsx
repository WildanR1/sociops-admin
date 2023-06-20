"use client";

import { DetailVolunteer } from "@/components/organisms";

export const metadata = {
  title: "Volunter - Detail Program",
};

export default function Page({ params: { id } }) {
  return <DetailVolunteer id={id} />;
}
