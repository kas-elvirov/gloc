import { SYSTEM_DEFAULTS } from '../../consts/defaults';

export type TrackEventsEventName = string;
/**
 * YYYY-MM-DD format
 */
export type TrackEventsCurrentDate = string;

export type TrackEventsState = Record<
  TrackEventsEventName,
  {
    hourly: [
      number,
      number,
      number,
      number,
      number,

      number,
      number,
      number,
      number,
      number,

      number,
      number,
      number,
      number,
      number,

      number,
      number,
      number,
      number,
      number,

      number,
      number,
      number,
      number,
    ];
    daily: Record<TrackEventsCurrentDate, number>;
  }
>;

class TrackEvents {
  state: TrackEventsState = {};

  trackEvent = (eventName: TrackEventsEventName) => {
    chrome?.storage?.sync?.get(
      {
        [SYSTEM_DEFAULTS.STORAGE.EVENTS_STAT.KEY]:
          SYSTEM_DEFAULTS.STORAGE.EVENTS_STAT.DEFAULT_VALUE,
      },
      result => {
        const now = new Date();

        const currentHour = now.getHours();
        const currentDate = now.toISOString().split('T')[0];

        const state = {
          ...result[SYSTEM_DEFAULTS.STORAGE.EVENTS_STAT.KEY],
        } as TrackEventsState;

        if (!state[eventName]) {
          state[eventName] = {
            // @ts-expect-error Everything is okay (array sizes are compatible. I think)
            hourly: Array(25).fill(0),
            daily: {},
          };
        }

        state[eventName].hourly[currentHour]++;

        if (!state[eventName].daily[currentDate]) {
          state[eventName].daily[currentDate] = 0;
        }

        state[eventName].daily[currentDate]++;

        chrome.storage?.sync?.set?.(
          { [SYSTEM_DEFAULTS.STORAGE.EVENTS_STAT.KEY]: state },
          () => {},
        );
      },
    );
  };

  calculatePercentOfHourlyEventUsage = ({
    state,
    eventName,
    limit,
  }: {
    state: TrackEventsState;
    eventName: TrackEventsEventName;
    limit: number;
  }): number => {
    const now = new Date();

    const currentHour = now.getHours();

    return state[eventName].hourly[currentHour] / (limit / 100);
  };
}

export const TrackEventsService = new TrackEvents();
