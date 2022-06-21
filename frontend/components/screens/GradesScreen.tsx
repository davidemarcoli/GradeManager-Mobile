import React from "react";
import { View } from "react-native";
import TextField from "../atoms/TextField";
import { Avatar, Button, Card, Title, useTheme } from "react-native-paper";
import TextInputField from "../atoms/TextInputField";

export default function GradesScreen() {
  const [data, setData] = React.useState({
    grade: "",
    gradename: "",
    subject: "",
    school: "",
  });
  const theme = useTheme();

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
    </View>
  );
}
