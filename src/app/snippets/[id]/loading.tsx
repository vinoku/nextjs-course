"use client";

import { Hourglass } from "react-loader-spinner";

export default function SnippetLoadingPage() {
  return (
      <div className="flex items-center justify-center mt-40">
        <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#84888f", "#bbc5d4"]}
        />
      </div>
  );
}
