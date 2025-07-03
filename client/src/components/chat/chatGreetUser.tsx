export default function ChatGreetUser({message='Guest.'}) {
  return (
    <div className="chat__welcome-text">
               <h1>Hello, {message}</h1>
                <h2>What are you working on?</h2>
            </div>
  )
}
