import { useRef } from "react"



export default function LoginForm() {
    const username = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        if (!username?.current?.value || !password?.current?.value) return

        const login = { username: username.current.value, password: password.current.value }
        await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(login),
        })
    }

    return (
        <form>
            <div className="row">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" ref={username} id="username" />
            </div>
            <div className="row">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" ref={password} id="password" />
            </div>
            <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
    )
}