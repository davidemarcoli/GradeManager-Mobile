import React from "react";
import { View } from "react-native";
import TextField from "../atoms/TextField";
import { Avatar, Button, Card, Title, useTheme } from "react-native-paper";
import TextInputField from "../atoms/TextInputField";

export default function GradesScreen() {
  const [data, setData] = React.useState({
    username: "",
    password: "",
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
      <Card>
        <Card.Content>
          <Title>Add new grade</Title>
        </Card.Content>
        <Card.Actions style={{}}>
          <TextInputField
            label={"Grade"}
            defaultValue={data.username}
            onChangeText={(value: string) =>
              setData({
                ...data,
                username: value,
              })
            }
            marginTop={20}
            mainIcon={{
              name: "google",
              size: "medium",
              color: theme.colors.text,
            }}
            subtext={{
              text: "ex: 4.5",
              color: theme.colors.text,
              fontSize: 10,
              marginTop: 10,
            }}
          ></TextInputField>
          <Button>Add Grade</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
