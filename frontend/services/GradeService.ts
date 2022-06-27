import { Grade } from "../models/Grade";
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

export function updateGradeByID(gradeId: string, newGrade: Grade) {
  return fetch(`http://10.0.2.2:8080/api/grades/update/${gradeId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newGrade),
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

export function deleteGradeByID(gradeId: string) {
  return fetch(`http://10.0.2.2:8080/api/grades/delete/${gradeId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

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
