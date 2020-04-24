/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Col, Row, Grid } from "react-native-easy-grid";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ImageBackground source={require('./assets/bg.jpg')} style={styles.backgroundImage} >
          <ScrollView>
            <Grid>
              <Row>
                <Col>
                  <Text style={styles.title}>GAME DAY</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text style={styles.subTitle}>Round 19 / Tuesday</Text>
                </Col>
              </Row>
              <Row style={styles.teamRow}>
                <Col style={styles.teamLogoColumn}>
                  <Image
                    source={require('./assets/cska.png')}
                    style={styles.teamLogo}
                  />
                </Col>
                <Col style={styles.teamNamesColumn}><Text style={styles.teamNames}>CSKA MOSCOW</Text></Col>
                <Col style={styles.versusTextColumn}><Text style={styles.versusText}>VS</Text></Col>
                <Col style={styles.teamNamesColumn}><Text style={styles.teamNames}>REAL MADRID</Text></Col>
                <Col style={styles.teamLogoColumn}>
                  <Image source={require('./assets/real.png')} style={styles.teamLogo} />
                </Col>
              </Row>
              <Row style={styles.teamRow}>
                <Col style={styles.teamLogoColumn}>
                  <Image source={require('./assets/khimki.png')} style={styles.teamLogo} />
                </Col>
                <Col style={styles.teamNamesColumn}><Text style={styles.teamNames}>KHIMKI MOSCOW</Text></Col>
                <Col style={styles.versusTextColumn}><Text style={styles.versusText}>VS</Text></Col>
                <Col style={styles.teamNamesColumn}>
                  <Text style={styles.teamNames}>BASKONIA</Text>
                </Col>
                <Col style={styles.teamLogoColumn}>
                  <Image source={require('./assets/bask.png')} style={styles.teamLogo} />
                </Col>
              </Row>
              <Row style={styles.teamRow}>
                <Col style={styles.teamLogoColumn}>
                  <Image source={require('./assets/efes.png')} style={styles.teamLogo} />
                </Col>
                <Col style={styles.teamNamesColumn}><Text style={styles.teamNames}>ANADOLU EFES</Text></Col>
                <Col style={styles.versusTextColumn}><Text style={styles.versusText}>VS</Text></Col>
                <Col style={styles.teamNamesColumn}><Text style={styles.teamNames}>OLIMPIA MILAN</Text></Col>
                <Col style={styles.teamLogoColumn}>
                  <Image source={require('./assets/olimpia.png')} style={styles.teamLogo} />
                </Col>
              </Row>
              <Row style={styles.teamRow}>
                <Col style={styles.teamLogoColumn}>
                  <Image source={require('./assets/fener.png')} style={styles.teamLogo} />
                </Col>
                <Col style={styles.teamNamesColumn}><Text style={styles.teamNames}>FENERBAHCE BEKO</Text></Col>
                <Col style={styles.versusTextColumn}><Text style={styles.versusText}>VS</Text></Col>
                <Col style={styles.teamNamesColumn}><Text style={styles.teamNames}>ZALGIRIS</Text></Col>
                <Col style={styles.teamLogoColumn}>
                  <Image source={require('./assets/zalgiris.png')} style={styles.teamLogo} />
                </Col>
              </Row>
              <Row style={styles.teamRow}>
                <Col style={styles.teamLogoColumn}>
                  <Image source={require('./assets/olympiacos.png')} style={styles.teamLogo} />
                </Col>
                <Col style={styles.teamNamesColumn}><Text style={styles.teamNames}>OLYMPIACOS</Text></Col>
                <Col style={styles.versusTextColumn}><Text style={styles.versusText}>VS</Text></Col>
                <Col style={styles.teamNamesColumn}><Text style={styles.teamNames}>ALBA BERLIN</Text></Col>
                <Col style={styles.teamLogoColumn}>
                  <Image source={require('./assets/alba.png')} style={styles.teamLogo} />
                </Col>
              </Row>
              <Row style={styles.teamRow}>
                <Col style={styles.teamLogoColumn}>
                  <Image source={require('./assets/maccabi.png')} style={styles.teamLogo} />
                </Col>
                <Col style={styles.teamNamesColumn}><Text style={styles.teamNames}>MACCABI FOX</Text></Col>
                <Col style={styles.versusTextColumn}><Text style={styles.versusText}>VS</Text></Col>
                <Col style={styles.teamNamesColumn}><Text style={styles.teamNames}>BARCELONA</Text></Col>
                <Col style={styles.teamLogoColumn}>
                  <Image source={require('./assets/barca.png')} style={styles.teamLogo} />
                </Col>
              </Row>
            </Grid>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

var styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 15,
    color: '#FFFFFF',
  },
  subTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#FFFFFF',
    backgroundColor: '#2d4161',
    padding: 10,
  },
  teamRow: {
    backgroundColor: '#011728',
    marginBottom: 10,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
    padding: 8,
  },
  teamNames: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'sans-serif-medium',
    paddingRight: 3,
    paddingLeft: 2,
  },
  teamNamesColumn: {
    justifyContent: 'center',
    textAlign: 'center',
    width: 100,
  },
  teamLogoColumn: {
    alignItems: 'center',
  },
  versusText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
  },
  versusTextColumn: {
    justifyContent: 'center',
    backgroundColor: '#213451',
    width: 60,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  loginForm: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  teamLogo: {
    height: 50,
    resizeMode: 'center',
  },
});

export default App;
