import React from "react";
import { View } from "react-native";
import TextField from "../atoms/TextField";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export default function GradesScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        marginLeft: 40,
        marginRight: 40,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Card>
          <Card.Content>
            <Title>Add new grade</Title>
          </Card.Content>
          <Card.Actions>
            <Button>Add Grade</Button>
          </Card.Actions>
        </Card>
      </View>
    </View>
  );
}
