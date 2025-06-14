export type TBropwser =
  | 'Firefox'
  | 'Chrome'
  | 'Safari'
  | 'Opera'
  | 'Internet Explorer'
  | 'Unknown';

export function detectBrowser(): TBropwser {
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.indexOf('firefox') > -1) {
    return 'Firefox';
  } else if (userAgent.indexOf('chrome') > -1) {
    return 'Chrome';
  } else if (userAgent.indexOf('safari') > -1) {
    return 'Safari';
  } else if (userAgent.indexOf('opera') > -1 || userAgent.indexOf('opr') > -1) {
    return 'Opera';
  } else if (
    userAgent.indexOf('msie') > -1 ||
    userAgent.indexOf('trident') > -1
  ) {
    return 'Internet Explorer';
  } else {
    return 'Unknown';
  }
}
