import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "../constants/colors";
import { keyboardBehavior } from "../constants/theme";

export default function ScreenContainer({
  children,
  style,
  contentContainerStyle,
  keyboardAware = true,
  scroll = false,
  dismissOnTouch,
}) {
  const shouldDismiss = dismissOnTouch ?? scroll;

  const scrollContent = (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.grow, contentContainerStyle]}
    >
      {shouldDismiss ? (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.grow}>{children}</View>
        </TouchableWithoutFeedback>
      ) : (
        children
      )}
    </ScrollView>
  );

  const staticContent = shouldDismiss ? (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[styles.flex, contentContainerStyle]}>{children}</View>
    </TouchableWithoutFeedback>
  ) : (
    <View style={[styles.flex, contentContainerStyle]}>{children}</View>
  );

  const body = scroll ? scrollContent : staticContent;

  return (
    <SafeAreaView style={[styles.container, style]} edges={["top", "left", "right"]}>
      {keyboardAware ? (
        <KeyboardAvoidingView style={styles.flex} behavior={keyboardBehavior}>
          {body}
        </KeyboardAvoidingView>
      ) : (
        body
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  flex: {
    flex: 1,
  },
  grow: {
    flexGrow: 1,
  },
});
