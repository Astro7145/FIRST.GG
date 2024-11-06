import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:
  {
    alignItems: 'center',
    backgroundColor: '#153769',
    height: '100%',
    width: '100%'
  },
  moduleBox:
  {
    backgroundColor: '#e0e0e0',
    borderColor:  '#f1c40f',
    borderWidth: 2,
    borderRadius: 10,
    width: 'auto',
    marginHorizontal: '5%',
    marginTop: '5%',
    padding: '2%'
  },
  title:
  {
    color: '#f1c40f',
    fontSize: 70,
    marginTop: '20%'
  },
  searchBar:
  {
    height: '100%',
    width: '85%',
    backgroundColor: "white",
    borderStyle: 'solid',
    borderWidth: 3,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: "#f1c40f"
  },
  searchButton:
  {
    width: '15%',
    height: '100%',
    backgroundColor: "#f1c40f",
    borderStyle: 'solid',
    borderWidth: 3,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: "#f1c40f",
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchField:
  {
    height: 60,
    width: "70%",
    flexDirection: 'row'
  },
  iconSearch:
  {
    color: 'white'
  },
  sumName:
  {
      color: "#f1c40f",
      fontSize: 60,
      fontWeight: 'bold',
      marginTop: '7%',
      marginLeft: '5%'
  },
});

export default styles;