import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { widthPercentageToDP as wp } from '../../helpers/Responsive';
import { Icon, Avatar } from 'react-native-elements';

export default class Card extends React.Component {
    static propTypes = {
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        buttonText: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
    };

    static Margin = 7;

    render() {
        const { title, status, colorCode, imageUrl, width } = this.props;
        return (
            <View style={[styles.container, { width: width - 2 * Card.Margin, borderRadius: wp(3), overflow: 'hidden' }]}>
                <Image
                    source={{ uri: imageUrl }}
                    style={{ width: width - 2 * Card.Margin, height: width - 2 * Card.Margin }}
                />
                <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', bottom: 0 }}>
                    <View style={{backgroundColor:colorCode,padding:wp('1'),paddingHorizontal:wp('2.5'),borderRadius:wp('1'),position:'absolute',alignItems:'center',alignContent:'center',right:wp('2'),top:wp('3')}}>
                        <Text style={{fontSize:wp('3'),color:'#fff',fontWeight:'bold'}}>{status}</Text>
                    </View>
                    <View style={{bottom:0,position:'absolute',marginLeft:wp('4')}}>
                        <Text style={{ color: '#fff',marginBottom: 4,fontWeight:'bold', width: wp('60'),marginLeft:wp('1'),fontSize:wp('5') }}>{title}</Text>
                        <View style={{ marginBottom: 8, width: wp(45), flexDirection: 'row', alignItems: 'center',alignContent:'center' }}>
                            <Icon
                                size={16}
                                name='location'
                                type='evilicon'
                                color='white'
                                containerStyle={{ marginHorizontal: 0, marginVertical: 0 }}
                            />
                            <Text style={{ fontSize: wp('3'), color: '#fff' }}>Arkasana, United States</Text>
                        </View>
                    </View>


                </View>

                {/* <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: Card.Margin,
        backgroundColor: 'white',
    },
    content: {
        minHeight: 85,
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: 'lightgray',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
    },
    subtitle: {
        color: 'gray',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightgray',
    },
});