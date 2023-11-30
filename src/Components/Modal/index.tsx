import React from "react";
import { Text, View, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { ModalProps } from "../../Types/Types";

export const Modals = ({ visible, setVisible, id }: ModalProps) => {
  return (
    <View style={styles.container}>
      <Modal transparent={true} animationType="slide" visible={visible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Modal</Text>
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
              }}
            >
              <Text style={styles.closeButton}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000058",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#EEF2E6",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    fontSize: 16,
    color: "blue",
    marginTop: 10,
  },
});
