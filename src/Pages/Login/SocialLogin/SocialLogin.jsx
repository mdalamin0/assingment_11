

const SocialLogin = () => {

    const handleGoogleSignIn = () => {
        // googleSignIn()
        //     .then(result => {
        //         console.log(result.user)
        //         navigate(from, { replace: true })
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        console.log('Oky bro')
    }
    return (
        <div className="">
            <p onClick={handleGoogleSignIn} className="border-2 px-6 py-3 font-semibold rounded-md justify-center flex items-center"> <img className='h-5 w-5 me-4'  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" /> Continue with Google</p>
        </div>
    );
};

export default SocialLogin;