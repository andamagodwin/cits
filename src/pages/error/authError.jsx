const AuthError = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">Authentication Error</h1>
      <p className="mt-4 text-lg text-gray-700">
        Authorisation failed. Please try again.
      </p>
    </div>
  );
};


export default AuthError;