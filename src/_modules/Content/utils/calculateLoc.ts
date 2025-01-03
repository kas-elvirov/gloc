import {
  CodeFrequency,
  WeeklyAggregate,
} from '../../../_shared/api/github/endpoints';

/**
 * # LOC calculating mechanizm
 *
 * If you pass [[0, 0, 0]] -> you get 0
 */
export const calculateLoc = (stat: CodeFrequency): number => {
  return stat.reduce(
    (total: number, changes: WeeklyAggregate) =>
      total + changes[1] + changes[2],
    0,
  );
};
