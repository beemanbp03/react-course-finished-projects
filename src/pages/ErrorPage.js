import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
    return (
        <>
        <MainNavigation />
        <main>
            <h1>An Error Occured!</h1>
            <p>could not find page</p>
        </main>
        </>
    )
}

export default ErrorPage;