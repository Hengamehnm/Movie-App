import { useRef } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { colors } from "../utils/colors";

export default function Dropdown({ selected, list, onSelect }) {
  const bottomSheetModalRef = useRef(null);

  const openSheet = () => {
    bottomSheetModalRef.current?.present();
  };

  const closeSheet = () => {
    bottomSheetModalRef.current?.close();
  };

  return (
    <>
      <Pressable style={styles.container} onPress={openSheet}>
        <Text style={styles.selectText}>{selected}</Text>
        <Entypo name="chevron-down" size={22} color="black" />
      </Pressable>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={["24%"]}
        enablePanDownToClose
        enableDynamicSizing={false}
      >
        <BottomSheetView style={styles.contentContainer}>
          {list.map((i, index) => {
            const isSelected = selected === i;

            return (
              <Pressable
                key={index}
                onPress={() => {
                  onSelect(i);
                  closeSheet();
                }}
                style={[styles.row, isSelected && styles.rowSelected]}
              >
                <Text
                  style={[
                    styles.listText,
                    isSelected && styles.listTextSelected,
                  ]}
                >
                  {i}
                </Text>

                {isSelected && (
                  <Ionicons name="checkmark-sharp" size={22} color="white" />
                )}
              </Pressable>
            );
          })}
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    alignSelf: "center",
    borderRadius: 5,
    paddingHorizontal: 9,
    paddingVertical: 6,

    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },

  contentContainer: {
    paddingTop: 6,
  },

  row: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  rowSelected: {
    backgroundColor: colors.rowGreen,
  },

  listText: {
    fontSize: 16,
    color: colors.header,
  },

  listTextSelected: {
    color: colors.white,
    fontWeight: "600",
  },

  selectText: {
    fontSize: 16,
  },
});
