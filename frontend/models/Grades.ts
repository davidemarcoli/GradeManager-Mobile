export class Grade {
  id: string | undefined;
  name: string;
  grade: number;
  subject: string;
  school: string;

  constructor(
    id: string | undefined,
    name: string,
    grade: number,
    subject: string,
    school: string
  ) {
    this.id = id;
    this.name = name;
    this.grade = grade;
    this.subject = subject;
    this.school = school;
  }
}
