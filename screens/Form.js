import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import { Formik } from "formik";
import Button from '../components/Button.js';
import * as Yup from "yup";

//yup
const reviewSchema = Yup.object({
title: Yup.string().required().min(4),
body: Yup.string().required().min(8),
rating: Yup.number().required().min(1).max(5).test('is-num-1-5','Rating must be a number 1- 5', (val)=> {
  return parseInt(val) < 6 && parseInt(val) > 0
})
})



const Form = ({ addReview }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={globalStyles.container2}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalStyles.container}>
          <Formik
            initialValues={{ title: "", body: "", rating: "" }}
            validationSchema={reviewSchema}
            onSubmit={(values, actions) => {
              actions.resetForm();
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
                    onBlur={props.handleBlur('title')} 
                    value={props.values.title}
                  />
                  <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                </View>

                <View style={globalStyles.formField}>
                  <Text style={globalStyles.lableText}>Content:</Text>
                  <TextInput
                    style={globalStyles.input}
                    multiline minHeight={60}
                    placeholder="body"
                    onChangeText={props.handleChange("body")}
                    onBlur={props.handleBlur('body')} 
                    value={props.values.body}
                  />
                  <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                </View>

                <View style={globalStyles.formField}>
                  <Text style={globalStyles.lableText}>Rating:</Text>
                  <TextInput
                    style={globalStyles.input}
                    placeholder="rating"
                    onChangeText={props.handleChange("rating")}
                    onBlur={props.handleBlur('rating')} 
                    value={props.values.rating}
                    keyboardType="numeric"
                  />
                  <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                </View>
                <Button onPress={props.handleSubmit} buttonTitle='submit' />
                  {/* 
                <Button
                  onPress={props.handleSubmit}
                  title="Submit"
                  color="green"
                  style={globalStyles.button}
                /> */}
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
