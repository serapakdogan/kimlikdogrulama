import React, { Component } from "react";
import { Text , View } from 'react-native';
import firebase from 'firebase';
import Header from './ortak/Header';
import LoginForm from './LoginForm';
import CardSection from './ortak/CardSection';
import Spinner from "./ortak/Spinner";
import Button from "./ortak/Button";


class Main extends Component{ 
    state = { loggedIn: null };
    componentDidMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCC423zJK22uhxU2DgoWIBlrMLvZZbkMmY',
            authDomain: 'kimlikdogrulama-dfaf7.firebaseapp.com',
            projectId: 'kimlikdogrulama-dfaf7',
            storageBucket: 'kimlikdogrulama-dfaf7.appspot.com',
            messagingSenderId: '394258742836',
            appId: '1:394258742836:web:3c436266ef601595441461'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    clickLogout() {

        firebase.auth().signOut();

    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true: 
            return (
             <CardSection>
                <Button onPress={(this.clickLogout.bind(this))}> ÇIKIŞ </Button>
            </CardSection>
            )

            case false:
                return (
                    <LoginForm />
                )


            default:
                return (
                    <View>
                        <Spinner size="large" />
                    </View>
                )
        }
    }
        


    render() {
        return (
            <View>
                <Header HeaderText= "Çıkış Ekranı" />
                {this.renderContent()}
            </View>
        );
    }
}

export default Main;
    








 