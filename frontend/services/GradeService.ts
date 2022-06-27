import { Grade } from "../models/Grades";
import { getUser } from "./UserService";

export function saveGrade(grade: Grade) {
  getUser().then((value) => {
    grade.user = value;

    return fetch("http://10.0.2.2:8080/api/grades/persistence/addgrade", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(grade),
    });
  });
}

export function getGradeByID(gradeId: string) {
  return fetch(`http://10.0.2.2:8080/api/grades/${gradeId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export const getGradesByUserID = async () => {
  const user = await getUser();
  if (user) {
    const userId = user.id;
    return fetch(`http://10.0.2.2:8080/api/grades/user/${userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }
};

/*
export function getGradesByUserID() {
  getUser().then((value) => {
    const userId = value!.id;
    return fetch(`http://10.0.2.2:8080/api/grades/user/${userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userId),
    });
  });
}
*/
