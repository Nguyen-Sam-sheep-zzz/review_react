
function Home({ onLogOut }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1>Welcome Home</h1>
            <button onClick={onLogOut}>Log Out</button>
        </div>
    )
}
export default Home;