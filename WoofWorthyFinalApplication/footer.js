import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Image source={require('./images/logo.png')}
          style={{ width: 80, height: 120 }} />
            <Text style={styles.footerText}>Copyright &copy; 2023 WoofWorthy App.</Text>
            <Text style={styles.footerText}>Design and code by Emily Williams</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 5,
      paddingLeft: 15,
      backgroundColor: 'lightgrey',
    //   position: 'absolute',
    //   left: 0,
    //   top: '95%',
    //   height: 60
      
    },
    footerText: {
        fontSize: 15,
        flex: 1,
        alignSelf: 'center',
        textAlign: 'center',
        
    }
    
  });
  