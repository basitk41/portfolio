export const getLevelDescription = (level: number) => {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Proficient";
  if (level >= 50) return "Intermediate";
  return "Beginner";
};
