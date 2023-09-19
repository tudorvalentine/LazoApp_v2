import {Appbar, TextInput} from 'react-native-paper'
import { Text, View } from 'react-native';
import { g_style } from '../../styles/styles';
import { style } from "./style";
import BottomButton from '../../components/BottomButton';

const NewPwdScreen = (props)=>{
    const {navigation} = props;
    return (
        <>
            <Appbar.Header mode="large" style={{ backgroundColor: "white" }}>
            <Appbar.BackAction
                onPress={() => {
                navigation.goBack();
                }}
            />
            <Appbar.Content
                title={<Text style={g_style.page_title}>New Password</Text>}
                style={{ alignItems: "center" }}
            />
            </Appbar.Header>
            <View style={style.container_pwd_input}>
                <TextInput mode='outlined' style={style.pwd_input} label='New password'/>
                <TextInput mode='outlined' style={style.pwd_input} label='Confirm new password' />
            </View>
            <View style={style.bottom_container}>
                <Text style={g_style.page_subtitle}>Please write your new password.</Text>
                <BottomButton buttonText='Reset Password' />
            </View>
        </>
    )
}


export default NewPwdScreen