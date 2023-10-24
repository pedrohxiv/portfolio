"use client";

import { useEffect, useState } from "react";

interface AchivementItemProps {
  achievement: {
    prefix?: string;
    metric: string;
    value: string;
    postfix?: string;
  };
}

export const AchivementItem = ({ achievement }: AchivementItemProps) => {
  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;

    const end = parseInt(achievement.value.substring(0, 3));

    if (start === end) return;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + achievement.value.substring(3));
      if (start === end) clearInterval(timer);
    }, (4 / end) * 1000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
      <h2 className="text-white text-4xl font-bold flex flex-row">
        {achievement.prefix}
        {count}
        {achievement.postfix}
      </h2>
      <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
    </div>
  );
};
