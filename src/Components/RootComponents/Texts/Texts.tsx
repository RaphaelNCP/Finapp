import {
  useFonts,
  Nunito_400Regular,
  Nunito_800ExtraBold,
  Nunito_700Bold,
  Nunito_300Light,
} from "@expo-google-fonts/nunito";
import { Text } from "react-native";
import { TextProps } from "../../../Types/Types";

export const NormalText = ({ as, size, align }: TextProps) => {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      style={{
        fontFamily: "Nunito_400Regular",
        fontSize: size,
        color: "#1C6758",
        textAlign: align,
      }}
    >
      {as}
    </Text>
  );
};

export const BoldText = ({ as, size, align }: TextProps) => {
  const [fontsLoaded] = useFonts({
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      style={{
        fontFamily: "Nunito_700Bold",
        fontSize: size,
        color: "#1C6758",
        textAlign: align,
      }}
    >
      {as}
    </Text>
  );
};

export const LightText = ({ as, size, align }: TextProps) => {
  const [fontsLoaded] = useFonts({
    Nunito_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      style={{
        fontFamily: "Nunito_300Light",
        fontSize: size,
        color: "#1C6758",
        textAlign: align,
      }}
    >
      {as}
    </Text>
  );
};

export const Title = ({ as, size, align }: TextProps) => {
  const [fontsLoaded] = useFonts({
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      style={{
        fontFamily: "Nunito_800ExtraBold",
        fontSize: size,
        color: "#1C6758",
        textAlign: align,
      }}
    >
      {as}
    </Text>
  );
};
