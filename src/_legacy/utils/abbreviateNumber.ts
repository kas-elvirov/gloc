enum POSTFIX {
  DEFAULT = '',
  KILO = 'k',
  MEGA = 'm',
  GIGA = 'g',
  TERA = 't',
  PETA = 'p',
  EXA = 'e',
}

const SI_SYMBOL = [
  POSTFIX.DEFAULT,
  POSTFIX.KILO,
  POSTFIX.MEGA,
  POSTFIX.GIGA,
  POSTFIX.TERA,
  POSTFIX.PETA,
  POSTFIX.EXA,
];

/*
    many thanks to Waylon Flinn - https://stackoverflow.com/a/40724354/5124009

    about SI - https://en.wikipedia.org/wiki/International_System_of_Units
*/
export const abbreviateNumber = (num: number): string => {
  // what tier? (determines SI symbol)
  const tier = (Math.log10(num) / 3) | 0;

  // if zero, we don't need a suffix
  if (tier === 0) {
    const result = `${num}`;

    return result;
  }

  // get suffix and determine scale
  const suffix = SI_SYMBOL[tier];
  const scale = Math.pow(10, tier * 3);

  // scale the number
  const scaled = num / scale;

  // format number and add suffix
  const result = `${scaled.toFixed(1)}${suffix}`;

  return result;
};
