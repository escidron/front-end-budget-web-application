import React from 'react'
import { Button } from '../../elements/Button'
import { TextField } from '../../elements/TextField'
import { colors } from '../../Colors'
import { Label } from '../../elements/Label'
import styles from './Login.module.css'

import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()

    const handleLogin = ()=>{
        navigate('home')
    }
  return (
    <div className={styles.loginPage}>
        <div className={styles.loginDiv}>
            <div className={styles.logoDiv}>
               <img className={styles.logo} src={require('../../assets/logo.png')} alt='logo'/>
            </div>
            <div className={styles.inputsDiv}>
                <Label color={colors.primary}>Usuario:</Label>
                <TextField ></TextField>
                <Label color={colors.primary}>Senha:</Label>
                <TextField type='password'></TextField>
            </div>
            <div className={styles.buttonDiv}>
                <Button color='white' backgreoundColor={colors.primary}>Entrar</Button>
            </div>
            <div className={styles.buttonDiv}>
                <Button color={colors.primary} backgreoundColor='transparent' border={'1px solid'+colors.primary}>Criar conta</Button>
            </div>
            <div className={styles.buttonDiv}>
                <Label color={colors.primary} onClick={handleLogin} cursor='pointer'>Esqueceu sua senha?</Label>
            </div>
        </div>
    </div>
  )
}
 