import React from "react";
import { View } from "react-native";
import TextField from "../atoms/TextField";
import { Avatar, Button, Card, Title, useTheme } from "react-native-paper";
import TextInputField from "../atoms/TextInputField";
import IconButton from "../atoms/IconButton";
import { saveGrade } from "../../services/GradeService";
import { Grade } from "../../models/Grades";
import { getUser } from "../../services/UserService";
import * as yup from "yup";

const schema = yup.object().shape({
    grade: yup.number().required().min(1).max(6),
    gradename: yup.string().required(),
    subject: yup.string().required(),
    school: yup.string().required(),
});

export default function GradesScreen() {
  const [data, setData] = React.useState({
    grade: "",
    gradename: "",
    subject: "",
    school: "",
  });

  const theme = useTheme();

  async function addGrade() {
    console.log(data);

    schema.validate(data).then(() => {
        try {
            saveGrade(
                new Grade(
                    undefined,
                    data.gradename,
                    Number(data.grade),
                    data.subject,
                    data.school,
                    undefined
                )
            );
        } catch (e: unknown) {
            if (e instanceof Error) console.log(e);
        }
        console.log("Grade added");
      })
        .catch((error: any) => {
            console.log(error)
            console.error(error)
        })

  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        marginLeft: 40,
        marginRight: 40,
      }}
    >
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
      <IconButton
        marginTop={30}
        height={50}
        borderRadius={30}
        onPress={() => {
          addGrade();
        }}
        text={{ text: "ADD GRADE", weight: "bold" }}
        backgroundColor={theme.colors.accent}
      ></IconButton>
    </View>
  );
}
