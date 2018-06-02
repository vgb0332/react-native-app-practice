import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  ScrollView
} from 'react-native';
import { observer } from 'mobx-react/native';
import authStore from '../../mobx/authStore';
import GridList from 'react-native-grid-list';
@observer
class Insta extends Component {
  static navigationOptions = {
    title: 'Insta',
    header: null,
  };

  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0,
      data: [
        {key: 'a', source:require('../../public/image/sample1.jpg') },
        {key: 'b', source:require('../../public/image/sample2.jpg') },
        {key: 'c', source:require('../../public/image/sample3.jpg') },
        {key: 'd', source:require('../../public/image/sample1.jpg') },
        {key: 'e', source:require('../../public/image/sample2.jpg') },
        {key: 'f', source:require('../../public/image/sample3.jpg') },
        {key: 'g', source:require('../../public/image/sample1.jpg') },
        {key: 'h', source:require('../../public/image/sample2.jpg') },
        {key: 'i', source:require('../../public/image/sample3.jpg') },
        {key: 'j', source:require('../../public/image/sample1.jpg') },
        {key: 'k', source:require('../../public/image/sample2.jpg') },
        {key: 'l', source:require('../../public/image/sample3.jpg') },
        {key: 'm', source:require('../../public/image/sample1.jpg') },
        {key: 'n', source:require('../../public/image/sample2.jpg') },
        {key: 'o', source:require('../../public/image/sample3.jpg') },
      ]
   };
  }

  onImagePress = (index) => {
    // alert(index);
    this.setState({
      currentIndex: index,
    })
  }

  renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={()=>this.onImagePress(index)}>
      <Image style={{margin: 5, width: '100%', height: '100%',}} source={item.source} />
    </TouchableOpacity>
  );

  render() {
    console.log(authStore.getUserStatus());
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1, flexDirection: 'column'}}>
        <View style={{flex:0.3, backgroundColor:'yellow'}}>
          <Image
            style={{width:'100%', height:'100%'}}
            source={this.state.data[this.state.currentIndex].source}
            resizeMode={'cover'}
            opacity = {1}
          />
        </View>
        <View style={{flex: 1}}>
          <GridList
            data={this.state.data}
            numColumns={3}
            renderItem={this.renderItem}
          />
        </View>
      </View>

    );
  }
}

export default Insta;
