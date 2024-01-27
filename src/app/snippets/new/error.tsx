"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPgae({ error }: ErrorPageProps) {
  return <div>{error.message}</div>;
}
