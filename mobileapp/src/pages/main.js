import React, {Component} from 'react';
import {View, Text} from 'react-native';

import api from '../services/api';

export default class Main extends Component {
  static navigationOptions = {
    title: 'JSHunt',
  };

  state = {
    docs: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    try {
      const response = await api.get('/products');
      console.log('TCL: Main -> loadProducts -> response', response);

      const {docs} = response.data;
      console.log('TCL: Main -> loadProducts -> docs', docs);

      this.setState({docs});
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View>
        <Text>Página Main: </Text>
        {this.state.docs.map(product => (
          <Text key={product._id}>{product.title}</Text>
        ))}
      </View>
    );
  }
}
