import { StyleSheet, Text, View, Image } from 'react-native';
//Footer component
//Footer with logo, copyright info 
export default function Footer() {
  return (
    <View style={styles.footer}>
      <Image source={require('./images/poke-logo.png')}
        style={{ width: 80, height: 60 }} />
      <Text style={styles.footerText}>Copyright &copy; 2023 World of Pokemon.</Text>
      <Text style={styles.footerText}>Design and code by Emily Williams</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 13,
    paddingLeft: 15,
    backgroundColor: '#fdeec5'
  },
  footerText: {
    fontSize: 15,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center'
  }
});
