import { CodeFrequency, WeeklyAggregate } from '../types';

export const calculateLoc = (stat: CodeFrequency): number => {
	return stat.reduce((total: number, changes: WeeklyAggregate) =>
		total + changes[1] + changes[2], 0);
};