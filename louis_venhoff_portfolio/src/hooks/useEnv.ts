const useEnv = () => {

    const websiteUrl = import.meta.env.VITE_WEBSITE_URL;
    const serverUrl = import.meta.env.VITE_API_URL;
    
    return {websiteUrl, serverUrl};

}

export default useEnv;