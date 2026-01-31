import { useRef } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { colors } from "../utils/colors";

export default function Dropdown({ selected, list, onSelect }) {
  const bottomSheetModalRef = useRef(null);

  const openSheet = () => bottomSheetModalRef.current?.present();

  const selectItem = (item) => {
    onSelect(item);
    bottomSheetModalRef.current?.close();
  };

  return (
    <>
      <Pressable style={styles.container} onPress={openSheet}>
        <Text style={styles.selectText}>{selected}</Text>
        <MaterialCommunityIcons name="chevron-down" size={22} color="black" />
      </Pressable>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={["24%"]}
        enablePanDownToClose
        enableDynamicSizing={false}
      >
        <BottomSheetView style={styles.contentContainer}>
          {list.map((item) => {
            const isSelected = selected === item;

            return (
              <Pressable
                key={item}
                onPress={() => selectItem(item)}
                style={[styles.row, isSelected && styles.rowSelected]}
              >
                <Text
                  style={[
                    styles.listText,
                    isSelected && styles.listTextSelected,
                  ]}
                >
                  {item}
                </Text>

                {isSelected && (
                  <MaterialCommunityIcons
                    name="check"
                    size={22}
                    color="white"
                  />
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
