import React from 'react';
import { StyleSheet, Modal, View, Alert, ActivityIndicator } from 'react-native';

interface LoderPropes {
    modalVisible: boolean;
    setModalVisible: any;
}
const Loader: React.FC<LoderPropes> = ({ modalVisible, setModalVisible }) => {


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <ActivityIndicator  size="large"/>
            </View>
        </Modal>
    );
};

export default Loader;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: 100,
        height: 100,
        margin: 20,
        backgroundColor: 'white',
        borderBlockColor:'black',
        justifyContent:'center',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
});

