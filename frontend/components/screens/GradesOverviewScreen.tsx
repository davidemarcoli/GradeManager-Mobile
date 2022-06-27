import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { DataTable, Title, useTheme } from "react-native-paper";
import { Grade } from "../../models/Grades";
import {
  deleteGradeByID,
  getGradesByUserID,
  updateGradeByID,
} from "../../services/GradeService";
import IconButton from "../atoms/IconButton";
import TextInputField from "../atoms/TextInputField";
import { useNavigation } from "@react-navigation/native";
import { User } from "../../models/User";
import { getUser } from "../../services/UserService";

export default function GradesOverviewScreen() {
  const theme = useTheme();
  const [grades, setGrades] = React.useState<Grade[]>([]);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = React.useState({
    id: "",
    grade: "",
    gradename: "",
    subject: "",
    school: "",
  });

  // add all fetched grades to the state. Add a value to the watchlist, so it gets updated as soon as some data about the grade changes.
  useEffect(() => {
    getGradesByUserID().then((response) => {
      response!.json().then((value) => {
        setGrades(value);
      });
    });
  }, []);

  async function createUpdatedGrade(): Promise<Grade> {
    return new Grade(
      data.id,
      data.gradename,
      Number(data.grade),
      data.subject,
      data.school,
      await getUser()
    );
  }

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Title
                style={{
                  color: theme.colors.text,
                  left: "50%",
                  position: "absolute",
                  top: "3%",
                }}
              >
                Edit
              </Title>
              <View style={styles.backBtn}>
                <IconButton
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  icon={{
                    name: "arrow-back",
                    iconType: "MaterialIcons",
                    color: theme.colors.text,
                    size: "extraLarge",
                  }}
                ></IconButton>
              </View>
              <View style={styles.editFields}>
                <TextInputField
                  label={"Grade"}
                  defaultValue={data.grade}
                  onChangeText={(value: string) =>
                    setData({
                      ...data,
                      grade: value,
                    })
                  }
                  marginTop={20}
                  mainIcon={{
                    name: "numeric",
                    size: "medium",
                    color: theme.colors.text,
                  }}
                  subtext={{
                    text: "ex: 4.5",
                  }}
                  numeric={true}
                ></TextInputField>
                <TextInputField
                  label={"Grade Name"}
                  defaultValue={data.gradename}
                  onChangeText={(value: string) =>
                    setData({
                      ...data,
                      gradename: value,
                    })
                  }
                  marginTop={20}
                  mainIcon={{
                    name: "file-document-outline",
                    size: "medium",
                    color: theme.colors.text,
                  }}
                  subtext={{
                    text: "ex: Trigonometry 2",
                  }}
                ></TextInputField>
                <TextInputField
                  label={"Subject"}
                  defaultValue={data.subject}
                  onChangeText={(value: string) =>
                    setData({
                      ...data,
                      subject: value,
                    })
                  }
                  marginTop={20}
                  mainIcon={{
                    name: "book-outline",
                    size: "medium",
                    color: theme.colors.text,
                  }}
                  subtext={{
                    text: "ex: Mathematics",
                  }}
                ></TextInputField>
                <TextInputField
                  label={"School"}
                  defaultValue={data.school}
                  onChangeText={(value: string) =>
                    setData({
                      ...data,
                      school: value,
                    })
                  }
                  marginTop={20}
                  mainIcon={{
                    name: "school-outline",
                    size: "medium",
                    color: theme.colors.text,
                  }}
                  subtext={{
                    text: "ex: BMS",
                  }}
                ></TextInputField>

                <View style={styles.modalBnt}>
                  <IconButton
                    onPress={() => {
                      createUpdatedGrade().then((grade) => {
                        updateGradeByID(data.id, grade);
                        setModalVisible(!modalVisible);
                      });
                    }}
                    icon={{
                      name: "check-circle-outline",
                      size: "large",
                      iconType: "MaterialIcons",
                      color: "white",
                    }}
                    backgroundColor={theme.colors.accent}
                    border={{
                      width: 1,
                      color: theme.colors.accent,
                    }}
                    sameRow={true}
                    height={40}
                    width={6}
                    borderRadius={10}
                  ></IconButton>
                  <IconButton
                    onPress={() => {
                      deleteGradeByID(data.id);
                      setModalVisible(!modalVisible);
                    }}
                    icon={{
                      name: "delete-outline",
                      size: "large",
                      iconType: "MaterialIcons",
                      color: theme.colors.accent,
                    }}
                    backgroundColor="white"
                    border={{
                      width: 1,
                      color: theme.colors.accent,
                    }}
                    sameRow={true}
                    height={40}
                    width={60}
                    borderRadius={10}
                  ></IconButton>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={{ flex: 2 }}>Grade</DataTable.Title>
            <DataTable.Title style={{ flex: 4 }}>Grade name</DataTable.Title>
            <DataTable.Title style={{ flex: 4 }}>Subject</DataTable.Title>
            <DataTable.Title style={{ flex: 2 }}>School</DataTable.Title>
          </DataTable.Header>
          {grades.map((grade) => {
            return (
              <DataTable.Row
                key={grade.id}
                onPress={() => {
                  console.log(`selected grade with id: ${grade.id}`);
                  setModalVisible(!modalVisible);
                  setData({
                    ...data,
                    id: grade.id!,
                    grade: grade.grade.toString(),
                    gradename: grade.name,
                    subject: grade.subject,
                    school: grade.school,
                  });
                }}
              >
                <DataTable.Cell style={{ flex: 2 }}>
                  {grade.grade}
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 4 }}>
                  {grade.name}
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 4 }}>
                  {grade.subject}
                </DataTable.Cell>
                <DataTable.Cell style={{ flex: 2 }}>
                  {grade.school}
                </DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </DataTable>

        <View
          style={{
            marginLeft: 40,
            marginRight: 40,
          }}
        >
          <IconButton
            marginTop={30}
            height={50}
            borderRadius={30}
            onPress={() => navigation.navigate("GradesScreen")}
            text={{ text: "NEW GRADE", weight: "bold" }}
            backgroundColor={theme.colors.accent}
          ></IconButton>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "80%",
    height: "75%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalBnt: {
    paddingTop: 10,
    //horizontally center two buttons
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  backBtn: {
    position: "absolute",
    top: "3%",
    left: "10%",
  },
  editFields: {
    marginTop: "10%",
  },
});
