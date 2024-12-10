export const postapi = async (url, data) => {
    try {
        const request = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include',
        });
        const result = await request.json();
        return result;

    } catch (error) {
        console.log('error:', error);
    }
};


export const getapi = async (url) => {
    try {
        const request = await fetch(url, { credentials: 'include' });
        const result = await request.json();
        return result;



    } catch (error) {
        console.log('error:', error);
        return { error: error }
    }


};


export const deleteapi = async (url, data) => {
    try {
        const request = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include',
        });
        const result = await request.json();
        return result;
        // handle result
    } catch (error) {
        console.log('error:', error);
    }
};