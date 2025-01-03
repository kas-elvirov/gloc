import { CodeFrequency, WeeklyAggregate } from '../../../_shared/api/github/endpoints';

export const calculateLoc = (stat: CodeFrequency): number => {
  return stat.reduce(
    (total: number, changes: WeeklyAggregate) =>
      total + changes[1] + changes[2],
    0
  );
};
