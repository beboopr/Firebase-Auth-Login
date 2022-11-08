import { useState } from "react"
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCFgd8rDKfR1wzWdV0lHQnYIR3z1k8ZC54",
    authDomain: "fir-auth-captain.firebaseapp.com",
    projectId: "fir-auth-captain",
    storageBucket: "fir-auth-captain.appspot.com",
    messagingSenderId: "575644524618",
    appId: "1:575644524618:web:27003d374ecee45767c6b3"
  };

export default function Login( {setUser} ) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = async (e) => {
        e.preventDefault()
        const app = initializeApp(firebaseConfig) // connects to firebase
        const auth = getAuth(app) // connect us to firebase Auth
        const response = await signInWithEmailAndPassword(auth, email, password) // sing us in
        .catch(alert)
        setUser(response.user)

    }
    return (
        <>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <label htmlFor="email">Email:{' '}
            <input type="email" name="email" 
            value = {email} onChange={e => setEmail(e.target.value)}
            placeholder="yourname@domain.com" />
            </label><br />
            <label htmlFor="password">Password:{' '}
            <input type="password" name="password" 
            value = {password} onChange={e => setPassword(e.target.value)}
            placeholder="your password" />
            </label><br />
            <button type="submit">Login</button>
        </form>
        </>
    )
}