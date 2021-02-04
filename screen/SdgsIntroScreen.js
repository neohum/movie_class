import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const SdgsIntroScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>
      지속가능발전목표(UN-SDGs)
2015년 제 70차 UN총회에서 2030년까지 달성하기로 결의한 의제인 지속가능발전목표(SDGs:Sustainable Development Goals)는 지속가능발전의 이념을 실현하기 위한 인류 공동의 17개 목표입니다. ‘2030 지속가능발전 의제’라고도 하는 지속가능발전목표(SDGs)는  '단 한 사람도 소외되지 않는 것(Leave no one behind)'이라는 슬로건과 함께 인간, 지구, 번영, 평화, 파트너십이라는 5개 영역에서 인류가 나아가야 할 방향성을 17개 목표와 169개 세부 목표로 제시하고 있습니다.

국제적 배경과 의의
2015년, MDGs 이행 목표 기한이 만료됨에 따라 각국 정부들은 목표 달성을 위한 노력을 계속하고 새로운 문제들을 해결할 필요가 있었습니다. 지난 기간동안 유엔은 향후 15년(2016-2030년)동안 세계적인 우선순위가 무엇이어야 할지에 대한 논의해 왔습니다. 그리고 2012년 6월에 열린 리우+20 회의에서 2015년 이후 글로벌 개발체제에 대해 합의하고, 17개의 새로운 목표 또는 글로벌 우선순위인 지속가능발전목표(SDGs)를 도출하게 됩니다.

 

MDGs는 원칙적으로 모든 국가에게 적용되었지만, 실제로 그 목표는 개발도상국에 초점이 맞춰져 있었습니다. SDGs는 그보다 훨씬 더 포괄적이라는 점에서 중요합니다. SDGs는 선진국과 개발도상국, 저개발국을 포함한 모든 국가들이 인류의 번영을 위해 힘씀과 동시에 환경을 보호할 것을 촉구합니다.

 

MDGs는 유용한 개발 의제였지만 목표 범위가 너무 좁던 반면, SDGs는 더욱 포괄적이라는 점에서 MDGs보다 한층 더 발전된 의제입니다. 아울러 지속가능발전목표(SDGs)는 다양한 국가적 상황에 따라 유연성을 발휘하므로, 각 국가들은 가장 적절하고 관련있는 목표 내 세부 목표와 지표를 골라 척도로 삼을 수 있게 되었습니다.

 

지금도 세계 각국은 지속가능발전목표(SDGs)를 이행하기 위한 많은 노력을 하고 있으며, 한국은 지속가능발전법,저탄소 녹색성장기본법, 국제개발협력기본법 등 정부정책 및 관련 법을 통해 UN-SDGs의 개별목표를 이행하고 있습니다.

 

UN 지속가능발전목표 [원문보기]
      </Text>
    </View>
  );
};

SdgsIntroScreen.navigationOptions = {
  headerTitle: 'back',
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

export default SdgsIntroScreen;