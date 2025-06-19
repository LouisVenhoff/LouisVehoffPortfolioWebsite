const useEnv = () => {

    const serverUrl = import.meta.env.VITE_API_URL;
    
    return {serverUrl};

}

export default useEnv;