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

export default function GoalsScreen() {
  const [grades, setGrades] = React.useState<Grade[]>([]);

  // add all fetched grades to the state
  useEffect(() => {
    getGradesByUserID().then((response) => {
      response!.json().then(value => {
        setGrades(value)
      })
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={{flex: 2}}>Grade</DataTable.Title>
          <DataTable.Title style={{flex: 4}}>Grade name</DataTable.Title>
          <DataTable.Title style={{flex: 4}}>Subject</DataTable.Title>
          <DataTable.Title style={{flex: 2}}>School</DataTable.Title>
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
                <DataTable.Cell style={{flex: 2}}>{grade.grade}</DataTable.Cell>
                <DataTable.Cell style={{flex: 4}}>{grade.name}</DataTable.Cell>
                <DataTable.Cell style={{flex: 4}}>{grade.subject}</DataTable.Cell>
                <DataTable.Cell style={{flex: 2}}>{grade.school}</DataTable.Cell>
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
