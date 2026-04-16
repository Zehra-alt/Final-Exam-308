import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import InputBar from "./InputBar";

export default function({scrollToBottom, sendMessage, setInputBarText, inputBarText}){

    const handleQuickSelect = (text) => {
        setInputBarText(text);
        setTimeout(() => {
            sendMessage();
        }, 100);
    };

    return(
        <View style={styles.container}>

            {/* HERO SECTION */}
            <View style={styles.hero}>
                <Image 
                    source={{ uri:'../assets/salon.jpg' }}
                    style={styles.heroImage}
                    resizeMode="cover"
                />
                <Text style={styles.title}>Glow Salon ✨</Text>
                <Text style={styles.subtitle}>Book your perfect look</Text>
            </View>

            {/* BUTTONS */}
            <View style={styles.buttons}>
                <Button mode="contained" onPress={() => handleQuickSelect("Buzz Cut")}>
                    Buzz Cut
                </Button>

                <Button mode="contained" onPress={() => handleQuickSelect("Regular Cut")}>
                    Regular Cut
                </Button>

                <Button mode="contained" onPress={() => handleQuickSelect("Blowout")}>
                    Blowout
                </Button>
            </View>

            {/* INPUT BAR */}
            <InputBar 
                onSendPressed={sendMessage} 
                onSizeChange={() => scrollToBottom(false)}
                onChangeText={setInputBarText}
                text={inputBarText}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },

    hero: {
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    heroImage: {
        width: '100%',
        height: '70%',
        borderRadius: 10
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10
    },

    subtitle: {
        fontSize: 16,
        color: 'gray'
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: 10,
        gap: 10
    }
});