import { useState } from "react";

export function useHTTP() {
    const [process, setProcess] = useState('waiting'); 

    /**
     * Fetch data from the server
     * 
     * @param {string} url
     * @param {string} method
     * @param {any} body
     * @param {object} headers
     * @returns {Promise} response
    */
    const request = async (url, method = 'GET', body = null, headers = {}) => {
        setProcess('loading');

        const response = await fetch(url, {method, headers, body});

        try {
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            setProcess('confirmed');
            return data;
        }
        catch (error) {
            setProcess('error');
            throw error;
        }
    }

    const clearError = () => {
        setProcess('waiting');
    }

    return {
        process, 
        setProcess,
        request,
        clearError
    }
}