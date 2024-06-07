"use client";
import { useState } from "react";
import Header from "./_components/Header";
import Filter from "./_components/Filter";
import JobList from "./_components/JobList";
import Footer from "./_components/Footer";

export default function Home() {
  const [filter, setFilter] = useState<string[]>([]);

  return (
    <div className="flex min-h-screen flex-col justify-start bg-lightGrayishCyanTablets align-middle">
      <Header />
      <Filter filter={filter} setFilter={setFilter} />
      <JobList filter={filter} setFilter={setFilter} />
      <Footer />
    </div>
  );
}
