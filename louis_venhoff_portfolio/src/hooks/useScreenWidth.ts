export default function useScreenWidth(){

    const getWidth = ():number => {
        return window.innerWidth;
    }

    const isMobileDevice = ():boolean => {
        return(getWidth() < 600);
    } 


    return {getWidth, isMobileDevice}
}