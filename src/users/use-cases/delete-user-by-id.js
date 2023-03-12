

/**
 * 
 * @param {String|Number} id 
 * @returns {User}
 */
export const deleteUserById = async( id ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users/${ id }`;
    const res = await fetch( url, {
        method: 'DELETE',
    } );

    const deleteResult = res.json();
    console.log({newUser: deleteResult});

    return true;
}