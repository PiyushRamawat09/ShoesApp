import { Dimensions } from "react-native";

const mobileH = Math.round(Dimensions.get('window').height);
const mobileW = Math.round(Dimensions.get('window').width);

export { mobileH, mobileW };

