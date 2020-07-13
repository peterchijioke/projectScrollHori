import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import {
  Drawer,
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Item,
} from "native-base";

import * as Font from "expo-font";
import CardImge from "./components/CardImge";
import FooterBadge from "./components/FooterBadge";

// import { Container, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import SideBar from "./components/SideBar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };
  Copy;
  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    return (
      <Drawer
        ref={(ref) => {
          this.drawer = ref;
        }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
      >
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={this.openDrawer}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Side Bar Drawer</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name="camera" />
              </Button>
            </Right>
          </Header>
          <FlatList
            // horizontal
            data={[{ key: "a" }, { key: "b" }, { key: "c" }, { key: "d" }]}
            renderItem={({ item }) => <CardImge />}
          />
        </Container>
        <FooterBadge />
      </Drawer>

      // <FlatList
      //   horizontal
      //   data={this.state.data}
      //   renderItem={({ item: rowData }) => {
      //     return (
      //       <Card
      //         style={{ height: 200 }}
      //         title={null}
      //         image={{ url: rowData.image }}
      //         containerStyle={{
      //           padding: 0,
      //           width: 160,
      //           height: 200,
      //           marginTop: 150,
      //         }}
      //       >
      //         <Text style={{ marginBottom: 10 }}>{rowData.title}</Text>
      //       </Card>
      //     );
      //   }}
      //   keyExtractor={(item, index) => index}
      // />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
