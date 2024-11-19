import qs from "query-string";

interface UrlQueryParams {
    params: string;
    key: string;
    value: string;
}

interface RemoveUrlFromQueryParams {
    params: string;
    keysToRemove: string[];
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
    const queryString = qs.parse(params);

    queryString[key] = value;

    return qs.stringifyUrl({
        url: window.location.pathname,
        query: queryString,
    });
};

export const removeKeysFromUrlQuery = ({ params, keysToRemove }: RemoveUrlFromQueryParams) => {
    const queryString = qs.parse(params);

    keysToRemove.forEach((key) => {
        delete queryString[key];
    });

    return qs.stringifyUrl({
        url: window.location.pathname,
        query: queryString,
    },
    {skipNull: true}
    );
};