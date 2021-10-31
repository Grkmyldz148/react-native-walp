const getImages = async () => {
    const fetchUrl = `https://images-get.herokuapp.com/api/v1/`;

    return await fetch(fetchUrl, {
        method: "GET",
        keepalive: true,
    }).then(res => {
      return res.json();
    }).catch((err) => {
        return err;
    });
};

export default getImages;