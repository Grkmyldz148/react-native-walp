import React, { useEffect, useState } from "react";
import {
    TouchableOpacity,
    Image,
    View,
    FlatList
} from "react-native";
import {
    Loading
} from "components"
import {
    styles
} from "./styles";
import getImages from "../../api/getImages";
import FastImage from 'react-native-fast-image';

const Home = ({
    navigation
}) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getImages().then((res) => {
            if (res) {
                const datas = res.map((item) => item.src.portrait)
                setImages(datas);
                setLoading(false);
            }
        }).catch((err) => {
            return alert(err)
        })
    }, []);

    const RenderItem = ({
        item,
        index
    }) => {
        return <TouchableOpacity
            onPress={() => {
                navigation.navigate("ImageDetails", {
                    images,
                    index,
                    item
                });
            }}
            style={styles.renderListContainer}
        >
            <FastImage
                style={styles.image}
                source={{
                    uri: item,
                    priority: FastImage.priority.low,
                }}
                key={index}
                resizeMode={FastImage.resizeMode.contain}
            />
        </TouchableOpacity>
    };

    if (loading) return <Loading />;
    return <View
        style={styles.container}
    >
        <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={true}
            renderItem={RenderItem}
            style={styles.flatList}
            maxToRenderPerBatch={4}
            initialNumToRender={1}
            numColumns={3}
            data={images}
        />
    </View>;
};
export default Home;