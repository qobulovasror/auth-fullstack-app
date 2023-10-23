import { StyleSheet } from "react-native";

const startedStyle = StyleSheet.create({
  backImg: {
    width: "100%",
    height: "100%",
  },
  img: {
    marginTop: "15%",
    width: 200,
    height: 100,
    padding: "50%",
  },
  text: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
  },
  btn1: {
    marginHorizontal: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginTop: 40,
  },
  btn2: {
    marginHorizontal: 30,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginTop: 40,
  },
  btnText: { textAlign: "center", fontSize: 20, fontWeight: "500" },
});

const regisStyle = StyleSheet.create({
  container: {
    backgroundColor: '#0089F6FF',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    paddingVertical: 40
  },
  img: {
    marginTop: "15%",
    width: 200,
    height: 100,
    padding: "50%",
  },
  form: {
    position: "relative",
    marginTop: 30,
    marginStart: 10,
    marginEnd: 25,
  },
  input: {
    width: "100%",
    padding: 15,
    marginBottom: 10,
    marginTop: 5,
    borderRadius: 10,
    borderColor: "#fff",
    color: "#fff",
    borderWidth: 1,
    fontSize: 23,
    marginHorizontal: 10
  },
  text: {
   
  },
  btn: {
    marginHorizontal: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginTop: 40,
  },
  btnText: { 
    color: '#0089F6FF',
    textAlign: "center", 
    fontSize: 25
  },
});

const loginStyle = StyleSheet.create({
  container: {
    backgroundColor: '#0089F6FF',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    paddingVertical: 40
  },
  img: {
    marginTop: "15%",
    width: 200,
    height: 100,
    padding: "50%",
  },
  form: {
    position: "relative",
    marginTop: 30,
    marginStart: 10,
    marginEnd: 25,
  },
  input: {
    width: "100%",
    padding: 15,
    marginBottom: 10,
    marginTop: 5,
    borderRadius: 10,
    borderColor: "#fff",
    color: "#fff",
    borderWidth: 1,
    fontSize: 23,
    marginHorizontal: 10
  },
  text: {
   
  },
  btn: {
    marginHorizontal: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginTop: 40,
  },
  btnText: { 
    color: '#0089F6FF',
    textAlign: "center", 
    fontSize: 25
  },
});

export { startedStyle, regisStyle, loginStyle };
