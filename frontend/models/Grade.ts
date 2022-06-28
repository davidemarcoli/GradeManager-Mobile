import {User} from "./User";

export class Grade {
    id: string | undefined;
    name: string;
    grade: number;
    subject: string;
    school: string;
    user: User | undefined;

    constructor(
        id: string | undefined,
        name: string,
        grade: number,
        subject: string,
        school: string,
        user: User | undefined
    ) {
        this.id = id;
        this.name = name;
        this.grade = grade;
        this.subject = subject;
        this.school = school;
        this.user = user;
    }
}
