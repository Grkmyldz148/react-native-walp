import React from "react";
import {
    PermissionsAndroid
} from "react-native";
import RNFetchBlob from 'rn-fetch-blob';

const DownloadImage = async (image) => {
    console.log("burda", image)
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'Storage Permission Required',
                message: 'App needs access to your storage to download Photos'
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Storage Permission Granted')
            downloads()
        } else {
            alert('Storage Permission Not Garanted');
        }
    } catch (error) {
        console.warn(error);
    }

    function downloads() {
        let imgUrl = image

        let newImgUri = imgUrl.lastIndexOf('/');
        let imageName = imgUrl.substring(newImgUri);

        let dirs = RNFetchBlob.fs.dirs;
        let path = dirs.PictureDir + imageName;
        if (Platform.OS == 'android') {
            RNFetchBlob.config({
                fileCache: true,
                appendExt: 'png',
                indicator: true,
                path: path,
                addAndroidDownloads: {
                    useDownloadManager: true,
                    notification: true,
                    path: path,
                    description: '371Wallpaper'
                },

            }).fetch("GET", imgUrl).then(res => {
                console.log(res, 'end downloaded')
            });
        }
    }
};

export default DownloadImage;