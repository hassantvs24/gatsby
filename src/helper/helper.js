const truncate = (str, length) =>{
    let dots = str.length > length ? '...' : '';
    return str.substring(0, length)+dots;
};

export default truncate;