import React, { Component, SetStateAction, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";
import { Grade } from "../../models/Grades";
import { getGradesByUserID } from "../../services/GradeService";
import { getUser } from "../../services/UserService";

/*
async function getAllGrades(): Promise<Grade[]> {
  console.log(grades);
  return new Promise((resolve, reject) => {
    resolve(grades);
  });
} */

/*
const getUserId = async () => {
  const user = await getUser();
  return user!.id;
};*/

export default function App() {
  const [grades, setGrades] = React.useState<Grade[]>([]);

  // add all fetched grades to the state
  useEffect(() => {
    getGradesByUserID().then((value) => {
      if (value) {
        setGrades(value as unknown as SetStateAction<Grade[]>);
      }
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        marginLeft: 40,
        marginRight: 40,
      }}
    >
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Grade</DataTable.Title>
          <DataTable.Title>Grade name</DataTable.Title>
          <DataTable.Title>Subject</DataTable.Title>
          <DataTable.Title>School</DataTable.Title>
        </DataTable.Header>
        {
          grades.map(grade => {
            return (
              <DataTable.Row 
                key={grade.id} 
                onPress={() => {
                  console.log(`selected account ${grade.id}`)
                }}
              >
                <DataTable.Cell>{grade.grade}</DataTable.Cell>
                <DataTable.Cell>{grade.name}</DataTable.Cell>
                <DataTable.Cell>{grade.subject}</DataTable.Cell>
                <DataTable.Cell>{grade.school}</DataTable.Cell>
              </DataTable.Row>
          )})}
          </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
});
