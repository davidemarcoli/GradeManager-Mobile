import {StyleSheet, View} from "react-native";
import React, {useEffect} from "react";
import {useTheme} from "react-native-paper";
import TextInputField from "../atoms/TextInputField";
import IconButton from "../atoms/IconButton";
import {saveGrade} from "../../services/GradeService";
import {Grade} from "../../models/Grade";
import * as yup from "yup";
import {useNavigation} from "@react-navigation/native";
import CustomSnackbar from "../atoms/CustomSnackbar";

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
    const navigation = useNavigation();

    const [isSnackbarVisible, setIsSnackbarVisible] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const onDismissSnackBar = () => setIsSnackbarVisible(false);

    useEffect(() => {
        if (message) {
            setIsSnackbarVisible(true);
        }
    }, [message]);

    async function addGrade() {
        console.log(data);

        schema.validate(data).then(() => {
            saveGrade(
                new Grade(
                    undefined,
                    data.gradename,
                    Number(data.grade),
                    data.subject,
                    data.school,
                    undefined
                )
            ).then(() => {
                navigation.navigate("Grades")
            })
                .catch((error: unknown) => {
                    if (error instanceof Error) console.log(error);
                })
            console.log("Grade added");
            //navigation.navigate("GradeList")
        })
            .catch((error: any) => {

                console.log(JSON.stringify(error))

                if (error.errors[0].startsWith("grade must be a `number` type")) {
                    setMessage("grade has to be a number")
                    setIsSnackbarVisible(true)
                } else {
                    setMessage(error.errors[0])
                    setIsSnackbarVisible(true)
                }

            })

    }

    return (
        <>
            <View style={styles.backIcon}>
                <IconButton
                    onPress={() => navigation.navigate("Grades")}
                    icon={{
                        name: "arrow-back",
                        iconType: "MaterialIcons",
                        color: theme.colors.text,
                        size: "extraLarge",
                    }}
                    backgroundColor={theme.colors.background}
                ></IconButton>
            </View>
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
                    onChangeText={(value: string) => setData({
                        ...data,
                        grade: value,
                    })}
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
                    onChangeText={(value: string) => setData({
                        ...data,
                        gradename: value,
                    })}
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
                    onChangeText={(value: string) => setData({
                        ...data,
                        subject: value,
                    })}
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
                    onChangeText={(value: string) => setData({
                        ...data,
                        school: value,
                    })}
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
                    text={{text: "ADD GRADE", weight: "bold"}}
                    backgroundColor={theme.colors.accent}
                ></IconButton>
                {isSnackbarVisible && (
                    <CustomSnackbar message={message} duration={3000} onDismiss={onDismissSnackBar}/>
                )}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    backIcon: {
        position: "absolute",
        top: 40,
        left: 20,
    },
});
