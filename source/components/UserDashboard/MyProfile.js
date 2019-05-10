import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,Image,ImageBackground,TouchableOpacity,I18nManager,
        ScrollView,TextInput,FlatList
} from 'react-native';
import store from '../../Stores/orderStore';
import { width, height, totalSize } from 'react-native-dimension';
import { FONT_NORMAL,FONT_BOLD,COLOR_PRIMARY,COLOR_ORANGE,COLOR_GRAY,COLOR_SECONDARY,COLOR_YELLOW } from '../../../styles/common';
import { observer } from 'mobx-react';
import styles from '../../../styles/UserDashboardStyles/MyProfileStyleSheet';
import UpperView from './UpperView';
export default class MyProfile extends Component<Props> {
  constructor( props ) {
    super(props);
    this.state = {

    }
  }
  static navigationOptions = {
    header: null,
  };
  render() {
    let data = store.USER_PROFILE.data;
    let plan = store.USER_PROFILE.data.package_info;
    return (
      <View style={styles.container}>
        <ScrollView>
          <UpperView />
          <View style={styles.titleCon}>
            <Text style={styles.titleTxt}>{data.page_title}</Text>
            {/*<TouchableOpacity style={styles.changeBtnCon} onPress={()=>{this.props.navigation.navigate('EditProfile')}}>
              <Text style={styles.closeBtnTxt}>Edit Profile</Text>
            </TouchableOpacity>*/}
          </View>
          {
            data.user_info.map((item,key)=>{
              return(
                <View key={key} style={styles.userInfoCon}>
                  <Text style={styles.label}>{item.key}</Text>
                  <Text style={styles.txt}>{item.value}</Text>
                </View>
              )
            })
          }
          <Text style={styles.labelMedia}>{data.about_user.heading}</Text>
          <Text style={styles.labelTxt}>{data.about_user.desc}</Text>
          <Text style={styles.labelMedia}>Social Media accounts</Text>
          {
            data.profile_social_media.map((item,key)=>{
              return(
                <View key={key} style={styles.userInfoCon}>
                  <Text style={styles.label}>{item.key}</Text>
                  <Text style={styles.txt}>{item.value}</Text>
                </View>
              );
            })
          }
          <View style={styles.planBox}>
            <View style={styles.boxTitleCon}>
              <Text style={styles.boxTitleTxt}>{plan.heading}</Text>
            </View>
            <View style={{height:height(8)}}>
              <Text style={styles.boxMessage}>{plan.desc}</Text>
            </View>
            <View style={{ alignItems:'center',alignSelf:'flex-start' }}>
              <TouchableOpacity style={styles.viewBtn}>
                <Text style={styles.btnTxt}>{plan.btn_txt}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
