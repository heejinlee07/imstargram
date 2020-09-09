export const generateId = (targets) => {
  return targets?.length
    ? Math.max(...targets?.map((target) => target?.id)) + 1
    : 1;
};
