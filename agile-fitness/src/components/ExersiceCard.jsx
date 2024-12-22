import React from "react";

export default function ExerciseCard(props) {
  const { exercise, i } = props;
  return (
    <div className="p-4 rounded-md flex flex-col gap-4 bg-slate-50 sm:flex-wrap">
      <div className="flex flex-col sm:flex-row items-center sm:flex-wrap gap-x-4 ">
        <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400"></h4>
        0{i + 1}
      </div>
    </div>
  );
}
