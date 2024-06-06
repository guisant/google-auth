import { useState } from 'react';
import { GoogleLogo } from '@phosphor-icons/react';

import { auth } from '../../services/firebase';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';

import './styles.scss'

export default function SignIn() {
    const [user, setUser] = useState<User>({} as User);

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="container">
            <div className='user'>
                {user.photoURL && <img src={user.photoURL} alt='Foto do Usuário' />}
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>

            <h1>Acessar conta</h1>

            <form>
                <input type='text' placeholder="Usuário ou email"></input>
                <input type='text' placeholder="Senha"></input>
            </form>

            <button type="button" className="btn-login">
                Login
            </button>
            <button type="button" className="btn-google" onClick={handleGoogleSignIn}>
                <GoogleLogo />
                Entrar com google
            </button>
        </div>   
    );
}