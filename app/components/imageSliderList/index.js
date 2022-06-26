import React, {
    useEffect,
    useState,
    useRef,
} from "react";
import {
    ImageBackground,
    Animated,
    View
} from "react-native";
import {
    ITEM_SIZE,
    styles
} from "./styles";
import utils from "utils";
import FastImage from 'react-native-fast-image';
import { Icon } from "elements";
import {
    DownloadImage
} from "../../api"

const {
    screenWidth,
    screenHeight
} = utils.getScreenDimensions();

const MostListenSlider = ({
    defaultStartIndex,
    style,
    datas,
}) => {

    const actionConfig = [
        {
            screenName: "share",
            icon: "share-variant"
        },
        {
            icon: "download",
            func: () => { deneme() }
        },
        {
            screenName: "share",
            icon: "dots-vertical"
        }
    ];

    const deneme = () => {
        DownloadImage(backgroundImage.toString())
    };

    const sliderRef = useRef();
    const [_datas, _setDatas] = useState([]);
    const scrollX = useRef(new Animated.Value(0)).current;

    const [buffering, setBuffering] = useState(true);
    const bufferAnimation = useRef(new Animated.Value(0)).current;

    const initialNumToRender = _datas.length - 1;
    const [backgroundImage, setBackgroundImage] = useState(datas[defaultStartIndex]);
    const [positionControl, setPositionControl] = useState(false);


    const onViewRef = React.useRef((viewableItems) => { onChangeItem(viewableItems) });
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: screenWidth / 3 });

    useEffect(() => {
        if (datas) _setDatas([
            {
                spacer: "left",
                id: "spacerID1"
            },
            ...datas,
            {
                spacer: "right",
                id: "spacerID2"
            }
        ]);
    }, [datas]);

    const slideToIndex = () => {
        if (
            sliderRef.current &&
            typeof defaultStartIndex !== "undefined"
        ) {
            sliderRef.current.scrollToOffset({ offset: ITEM_SIZE * defaultStartIndex, animated: true });
        }
    }

    const onScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
    );

    const controll = (x) => {
        const position = Math.floor(ITEM_SIZE * defaultStartIndex);
        const listPosition = Math.floor(x.nativeEvent.contentOffset.x);
        if (position === listPosition) {
            setTimeout(() => {
                setPositionControl(true)
            }, 1000);
        }
    }

    const onChangeItem = (val) => {
        if (val && val.viewableItems && val.viewableItems.length !== 0) {
            const item = val.viewableItems[0];
            const itemData = item.item
            setBackgroundImage(itemData.toString())
        }
    }

    const startBufferAnimation = () => {
        bufferAnimation.setValue(0);
        Animated.loop(
            Animated.timing(
                bufferAnimation, {
                toValue: 1,
                useNativeDriver: false,
                duration: 1000,
            })
        ).start(() => startBufferAnimation());
    };

    const opacityAnimation = bufferAnimation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 0.5, 1]
    });

    const renderItem = ({
        index,
        item
    }) => {

        if (item.spacer) return <View
            style={styles.spaceItem}
        />;
        const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
        ];

        const scaleY = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
            extrapolate: 'clamp',
        });

        const scaleAniamtionStyle = {
            transform: [
                {
                    scaleY: scaleY
                }
            ]
        };

        return <Animated.View
            style={[
                styles.animatedItemContainer,
                scaleAniamtionStyle
            ]}
        >
            <View
                style={styles.animatedItem}
            >
                <FastImage
                    style={styles.animatedItemImage}
                    source={{
                        uri: item.toString(),
                        priority: FastImage.priority.low,
                    }}
                    key={index}
                    resizeMode={FastImage.resizeMode.stretch}
                />
            </View>
        </Animated.View>;
    };

    return <ImageBackground
        source={{
            uri: backgroundImage,
        }}
        style={[
            styles.container,
            style
        ]}
        blurRadius={10}
    >
        {
            !positionControl &&
            <Animated.View
                style={{
                    backgroundColor: "rgba(0,0,0,0.8)",
                    top: buffering ? 0 : -screenHeight,
                    opacity: opacityAnimation,
                    height: screenHeight,
                    position: "absolute",
                    width: screenWidth,
                    zIndex: 999,
                }}
            />
        }
        <Animated.FlatList
            contentContainerStyle={styles.flatContainer}
            onViewableItemsChanged={onViewRef.current}
            viewabilityConfig={viewConfigRef.current}
            initialNumToRender={initialNumToRender}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, id) => {
                return String(id)
            }}
            removeClippedSubviews={true}
            snapToInterval={ITEM_SIZE}
            style={styles.flatList}
            renderItem={renderItem}
            maxToRenderPerBatch={5}
            scrollEventThrottle={1}
            decelerationRate={0}
            pagingEnabled={true}
            onScrollToIndexFailed={() => {
                slideToIndex()
            }}
            onLayout={() => {
                slideToIndex()
            }}
            onScroll={(x) => {
                controll(x);
                onScroll
            }}
            horizontal={true}
            bounces={false}
            ref={sliderRef}
            data={_datas}
        />
        <View
            style={styles.button}
            title={"as"}
        >
            {
                actionConfig.map((item, index) => {
                    return <Icon
                        key={index + "BottomBar"}
                        onPress={item.func}
                        name={item.icon}
                        size={32}
                    />;
                })
            }
        </View>
    </ImageBackground>;
};
export default MostListenSlider;