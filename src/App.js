import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import { viewStyles, textStyles } from './styles';
import { Header, Contents, Footer } from './Layout';
import ShadowBox from './Shadow';
import styled, { ThemeProvider } from 'styled-components/native';
import Button from './components/Button';
import Input from './components/Input';
import { lightTheme, darkTheme } from './theme';

// const App = () => {
//     return (
//         <View style={styles.container}>
//             <Text style={[styles.text, { color: "green" }]}>Inline Styling - Text</Text>
//             <Text style={[styles.text, styles.error]}>Inline Styling - Error</Text>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     text: {
//         padding: 10,
//         fontSize: 26,
//         fontWeight: "600",
//         color: "#000",
//     },
//     error: {
//         fontWeight: "400",
//         color: "red",
//     },
// });

// const App = () => {
//     return (
//         <View style={viewStyles.container}>
//             <Text style={[textStyles.text, { color: "blue" }]}>Inline Styling - Text</Text>
//             <Text style={[textStyles.text, textStyles.error]}>Inline Styling - Error</Text>
//         </View>
//     );
// };

// const App = () => {
//     return (
//         <View style={viewStyles.container}>
//             <Header />
//             <Contents />
//             <Footer />
//         </View>
//     );
// };

// const App = () => {
//     return (
//         <View style={viewStyles.container}>
//             <ShadowBox />
//         </View>
//     );
// };

// const Container = styled.View`
//     flex: 1;
//     background-color: #fff;
//     align-items: center;
//     justify-content: center;
// `;
// const App = () => {
//     return (
//         <THemeProvider theme={theme}>
//             <Container>
// <Button title="Hanbit" />
// <Button title="React Native" />
// <Input borderColor="#3498db" />
// <Input borderColor="#9b59b6" />
//             </Container>
//         </THemeProvider>
//     );
// };

const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
    align-items: center;
    justify-content: center;
`;

const App = () => {
    const [isDark, setIsDark] = useState(false);
    const _toggleSwitch = () => setIsDark(!isDark);

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Container>
                <Switch value={isDark} onValueChange={_toggleSwitch} />
                <Button title="Hanbit" />
                <Button title="React Native" />
                <Input borderColor="#3498db" />
                <Input borderColor="#9b59b6" />
            </Container>
        </ThemeProvider>
    );
};

export default App;
