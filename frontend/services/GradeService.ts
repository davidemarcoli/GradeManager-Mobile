import { Grade } from "../models/Grades";

export function saveGrade(grade: Grade) {
  return fetch("http://10.0.2.2:8080/api/grades/persistence/addgrade", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(grade),
  });
}

export function getGrade(grade: Grade) {
  return fetch("http://10.0.2.2:8080/api/grades/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(grade),
  });
}
