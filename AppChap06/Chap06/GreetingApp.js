import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// คอมโพเนนต์สำหรับแสดงข้อความต้อนรับ โดยรับ Props ชื่อ name
const Greeting = ({ name }) => {
    return <Text style={styles.text}>Hello, {name}!</Text>;
};

// คอมโพเนนต์หลักที่ส่ง Props name ไปยัง Greeting
const GreetingApp = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>แบบค่าเดี่ยว (Primitive Props)</Text>
            <Text style={styles.subtitle}>Programmer Name: Woraphon Udom</Text>
            {/* ส่ง Props name ให้ Greeting */}
            <Greeting name="Woraphon" />
            <Greeting name="Golf" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#98ff8a"},
    text: { fontSize: 20, marginBottom: 10 },    
    title: { fontSize: 20, fontWeight: "bold", position: "absolute", top: 50, color: "#ff0000" },
    subtitle: { fontSize: 16, position: "absolute", top: 80, color: "#ff6161",},
});

export default GreetingApp;
