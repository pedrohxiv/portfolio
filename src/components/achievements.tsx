import { AchivementItem } from "./achivementItem";

interface AchievementsProps {
  dict: {
    metrics: string[];
  };
  repos: number;
}

export const Achievements = ({ dict, repos }: AchievementsProps) => {
  const achievementsList = [
    {
      prefix: "~",
      metric: dict.metrics[0],
      value: `${repos}`,
    },
    {
      metric: dict.metrics[1],
      value: "500",
      postfix: "+",
    },
    {
      metric: dict.metrics[2],
      value: "6",
    },
    {
      metric: dict.metrics[3],
      value: "7",
    },
  ];

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <AchivementItem key={index} achievement={achievement} />
        ))}
      </div>
    </div>
  );
};
