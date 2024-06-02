import './styles.scss'
import { GoogleLogo } from '@phosphor-icons/react'

export default function SignIn() {
    return (
        <div className="container">
            <h1>Acessar conta</h1>

            <form>
                <input type='text' placeholder="Usuário ou email"></input>
                <input type='text' placeholder="Senha"></input>
            </form>

            <button type="button" className="btn-login">
                Login
            </button>
            <button type="button" className="btn-google">
                <GoogleLogo />
                Entrar com google
            </button>
        </div>   
    );
}