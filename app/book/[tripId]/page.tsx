import { Metadata } from "next";

interface PageProps {
  params: {
    tripId: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Booking for Trip ${params.tripId}`,
  };
}

export default function BookingPage({ params }: PageProps) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Booking Trip: {params.tripId}</h1>
      <p>Seat selection and booking logic goes here.</p>
    </div>
  );
}
