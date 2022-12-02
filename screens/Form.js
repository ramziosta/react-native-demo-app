import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import { Formik } from "formik";
import * as Yup from "yup";

const Form = ({addReview}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={globalStyles.container2}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalStyles.container}>
          <Formik
            initialValues={{ title: "", body: "", rating: "" }}
            onSubmit={(values) => {
              addReview(values);
            }}

          >
            {(props) => (
              <View>
                <View style={globalStyles.formField}>
                  <Text style={globalStyles.lableText}>Title:</Text>
                  <TextInput
                    style={globalStyles.input}
                    placeholder="title"
                    onChangeText={props.handleChange("title")}
                    value={props.values.title}
                  />
                </View>

                <View style={globalStyles.formField}>
                  <Text style={globalStyles.lableText}>Content:</Text>
                  <TextInput
                    style={globalStyles.input}
                    placeholder="body"
                    onChangeText={props.handleChange("body")}
                    value={props.values.body}
                  />
                </View>

                <View style={globalStyles.formField}>
                  <Text style={globalStyles.lableText}>Rating:</Text>
                  <TextInput
                    style={globalStyles.input}
                    placeholder="rating"
                    onChangeText={props.handleChange("rating")}
                    value={props.values.rating}
                    keyboardType="numeric"
                  />
                </View>

                <Button
                  onPress={props.handleSubmit}
                  title="Submit"
                  color="green"
                  style={globalStyles.button}
                />
              </View>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
