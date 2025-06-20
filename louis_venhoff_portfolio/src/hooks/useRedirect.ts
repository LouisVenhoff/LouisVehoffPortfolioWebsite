export enum PageType{
    HOME = "/home",
    PROJECTS_INDEX = "/projects",
    PROJECT_SHOW = "/project",
}


export default function useRedirect(){

    const redirectTo = (page:Type, attribute?: string | number) => {

        window.location.href = `${page}${attribute ? `/${attribute}` : ""}`;

    };

    return redirectTo;

};