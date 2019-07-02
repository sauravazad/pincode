import codes from "./pincode";

export const toRad = value => {
  const RADIANT_CONSTANT = 0.0174532925199433;
  return value * RADIANT_CONSTANT;
};
/**
 * [calculategeoDistance calculates the distance in metres between two geocoords]
 * @author  Saurav
 * @version [version]
 * @date    2016-03-10
 * @param   {[type]}   start [description]
 * @param   {[type]}   end   [description]
 * @return  {[type]}            [description]
 */
export const calculategeoDistance = (start, end) => {
  const KM_RATIO = 6371;
  try {
    const dLat = toRad(end.lat - start.lat);
    const dLon = toRad(end.lng - start.lng);
    const lat1Rad = toRad(start.lat);
    const lat2Rad = toRad(end.lat);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1Rad) * Math.cos(lat2Rad);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const dMtrs = KM_RATIO * c;
    return dMtrs;
  } catch (e) {
    return -1;
  }
};

class PincodeDistance {
  constructor() {
    this.codes = codes;
  }
  getlatLng(pincode) {
    return this.codes[pincode];
  }
  getDistance(toPincode, fromPincode) {
    const toCoords = this.getlatLng(toPincode);
    const fromCoords = this.getlatLng(fromPincode);
    if(toPincode === fromPincode) {
      return 1;
    }
    return calculategeoDistance(toCoords, fromCoords)
  }
}
export default PincodeDistance;