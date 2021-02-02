import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import MovieMainScreen from "./MovieMainScreen";

const MovieIntroScreen = (props) => {
  return (
    <View style={styles.screen}>
      {/*<Text>들어가며</Text>*/}
      {/*<Text>*/}
      {/*  최근 영화는 사회·문화적인 측면 뿐만 아니라, 세계 경제의 큰 축을 이루는 산업으로 우리의 삶에서*/}
      {/*  떼어 놓을 수 없을 만큼 큰 의미를 가지고 있다.*/}
      {/*  영화 고유의 개념 속에는 인문학적 지식과 경험, 문화 전체가 살아 숨쉬고 있다. 그리고 최근 다양한*/}
      {/*  기술을 바탕으로 한 과학적 접근과 기술 발달은 우리가 표현하지 못했던 것들을 시각화하여 새로운*/}
      {/*  가치를 창출하는데 큰 도움을 주고 있다. 시간에 지남에 따라 영화에 대한 개념과 영역은 매우 복잡하고*/}
      {/*  다양한 형태를 띄게 된 것이다.*/}
      {/*  1919년 영화가 한국에 상영된 이례로 100년의 시간 동안 수 많은 영화인들이 영화를 위해 일생을*/}
      {/*  바쳐왔으며, 그러한 노력 속에 대한민국은 고유의 영화 문화를 만들어 가고 있다. 그러한 노력이 최근*/}
      {/*  한류와 더불어 문화 선진국 반열에 들 수 있는 기회가 도래하고 있다.*/}
      {/*  그러나 아쉽게도 교육현장에서의 영화 교육, 특히 영화 리터러시는 부수적인 과목 또는 특별한 내용으로*/}
      {/*  취급되며, 영화의 중요성이나 그 깊이를 이해할 수 있는 기회를 제대로 제공하지 못하고 있다. 아울러*/}
      {/*  그러한 교육을 담당하는 교육적 체계를 구성하는데 많은 어려움을 겪고 있다.*/}
      {/*  본 연구는 이러한 영화 리터러시 교육의 최전선에 서있는 전문강사와 학교 교사들의 입장에서 보다*/}
      {/*  쉽고, 본질적인 수업을 진행하기 위한 방법을 찾고자 하는데 그 목적을 두고 있다. 그 수업의 대상은*/}
      {/*  초등학교 중 · 고학년으로 하며, 점차 그 대상을 늘려가고자 한다.*/}
      {/*  전문강사들에게는 일반화되고 활용가능한 자료를 제공하고, 영화의 이해 전반에 필요한 과정들을 보다*/}
      {/*  간략하고, 쉽게 구성하고자 하였다. 짧은 차시 안에 결과를 도출해야 하는 상황이 많기 때문에 수업*/}
      {/*  자료를 활용할 수 있는 꾸러미 형태가 도움이 되리라 믿는다.*/}
      {/*  또한, 교사들의 입장에서는 영화 교육에 대한 깊은 이해가 없이도, 영화 전반에 대한 이해를 교재의*/}
      {/*  내용을 따라가면서 쉽게 목표에 도달 할 수 있도록 구성을 하였다.*/}
      {/*  학생들의 입장에서는 좀 더 알고 싶거나, 실질적인 결과물을 얻을 수 있도록 하여 마치, 게임을 하는*/}
      {/*  것처럼 수업에 참가할 수 있을 것이다.*/}
      {/*  본 연구의 결과가 영화 리터러시를 보다 쉽고, 제대로 이해하는데 큰 도움이 되기를 바란다.*/}
      {/*</Text>*/}
      <Image
        style={styles.cardImage}
        source={require('../assets/images/intro.png')}
      />
      {/*<Button*/}
      {/*  title="Go Back to Main"*/}
      {/*  onPress={() => {*/}
      {/*    // props.navigation.goBack();*/}
      {/*    props.navigation.popToTop();*/}
      {/*  }}*/}
      {/*/>*/}
    </View>
  );
};

MovieMainScreen.navigationOptions = {
  headerTitle: '옹골찬 영화 연구회',
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center'
  },
  cardImage: {
    width: "98%",
    height: "77%",
  }
});

export default MovieIntroScreen;