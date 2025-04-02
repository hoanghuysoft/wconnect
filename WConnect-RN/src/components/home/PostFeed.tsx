import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const ReactionIcon: React.FC<{ source: any; overlap?: boolean }> = ({source, overlap}) => (
    <View className={`relative w-[43px] h-[43px] rounded-full ${overlap ? '-ml-[14.4px]' : ''}`}
          style={styles.reactionIcon}>
        <Image source={source} className="w-full h-full"/>
    </View>
);

const Comment: React.FC = () => (
    <View className="flex flex-row items-start justify-between relative w-full flex-none">
        <View className="flex flex-row items-start gap-[19px] relative flex-1">
            <Image
                source={require('../../assets/images/user-avatar.jpg')}
                className="relative w-[82px] h-[82px] object-cover rounded-full"
            />
            <View className="flex flex-col items-start gap-[29px] py-0 pr-[48px] pl-0 relative flex-1">
                <View className="flex flex-col items-start relative w-full flex-none">
                    <Text
                        className="relative w-auto mt-[-2.4px] font-bold text-text-primary text-[33px] leading-normal whitespace-nowrap">
                        Mark Ramos
                    </Text>
                    <Text className="relative w-full font-normal text-black text-[30px] leading-normal m-0">
                        Man that was good! How'd come up with that?
                    </Text>
                </View>
                <View className="flex flex-row items-baseline justify-center gap-[72px] relative flex-none">
                    <View className="flex flex-row items-baseline justify-center gap-[48px] relative flex-none">
                        <Text
                            className="relative w-auto mt-[-2.4px] font-bold text-[#60709d] text-[24px] leading-normal whitespace-nowrap">
                            Like
                        </Text>
                        <Text
                            className="relative w-auto mt-[-2.4px] font-bold text-[#60709d] text-[24px] leading-normal whitespace-nowrap">
                            Reply
                        </Text>
                    </View>
                    <Text
                        className="relative w-auto mt-[-2.4px] font-normal text-[#60709d] text-[24px] leading-normal whitespace-nowrap">
                        2m
                    </Text>
                </View>
            </View>
        </View>
        <TouchableOpacity>
            <Image source={require('../../assets/images/more-options.svg')} className="relative"/>
        </TouchableOpacity>
    </View>
);

const PostCard: React.FC = () => {
    return (
        <View className="h-auto relative w-full bg-secondary rounded-lg shadow-xl pb-[38px]">
            <View className="flex flex-col w-full px-[36px] box-border items-start gap-[39px] relative top-[38px]">
                {/* Post Header */}
                <View className="flex flex-row items-center justify-between relative w-full flex-none">
                    <View className="relative w-[344px] h-[125px]">
                        <Image
                            source={require('../../assets/images/user-avatar.jpg')}
                            className="absolute w-[125px] h-[125px] top-0 left-0 object-cover rounded-full"
                        />
                        <View
                            className="flex flex-col w-[193px] items-start gap-[3px] absolute top-[23px] left-[151px]">
                            <Text
                                className="relative w-full mt-[-1px] font-medium text-text-primary text-[36px] leading-normal">
                                Tai Nguyen
                            </Text>
                            <View className="flex flex-row items-center gap-[6px] relative flex-none">
                                <Image
                                    source={require('../../assets/images/public-icon.svg')}
                                    className="relative w-[29px] h-[30px]"
                                />
                                <Text
                                    className="relative w-auto mt-[-1px] font-normal text-text-secondary text-[29px] leading-normal whitespace-nowrap">
                                    1 day ago
                                </Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity className="relative w-[107px] h-[107px]">
                        <Image source={require('../../assets/images/more-options.svg')}/>
                    </TouchableOpacity>
                </View>

                {/* Post Content */}
                <Text className="relative w-full font-normal text-black text-[36px] leading-normal m-0">
                    I know this is a lots to tell 😁but I am so excited to tell you that this journey of my life was so
                    amazing,
                    there no words that I can use to describe that.😎 See that all below!
                </Text>

                {/* Post Image */}
                <Image
                    source={require('../../assets/images/post-image.jpg')}
                    className="relative w-full h-auto object-cover rounded-md"
                />

                {/* Post Engagement */}
                <View className="flex flex-col items-start justify-center gap-[38px] relative w-full flex-none">
                    <View className="flex flex-col items-start justify-center gap-[19px] relative w-full flex-none">
                        <Text
                            className="relative w-auto mt-[-2.4px] font-normal text-text-secondary text-[29px] leading-normal whitespace-nowrap">
                            3.4k Comments . 46 Shares
                        </Text>
                        <View className="flex flex-row items-center justify-between w-full">
                            <View className="flex flex-row items-center justify-center gap-[38px] relative flex-none">
                                <TouchableOpacity
                                    className="relative w-[96px] h-[96px] rounded-full bg-blue flex items-center justify-center">
                                    <Image source={require('../../assets/images/like-active.png')}
                                           className="relative"/>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    className="relative w-[96px] h-[96px] rounded-full bg-[rgba(195,228,255,0.28)] flex items-center justify-center">
                                    <Image source={require('../../assets/images/comment-icon.svg')}
                                           className="relative"/>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    className="relative w-[96px] h-[96px] rounded-full bg-[rgba(195,228,255,0.28)] flex items-center justify-center">
                                    <Image source={require('../../assets/images/share-icon.svg')} className="relative"/>
                                </TouchableOpacity>
                            </View>
                            <View className="flex flex-row items-center justify-end gap-[24px] relative flex-none">
                                <Text
                                    className="relative w-auto font-normal text-text-secondary text-[29px] text-right leading-normal whitespace-nowrap">
                                    Q&A with Mark & 361k others
                                </Text>
                                <View className="flex flex-row items-start relative flex-none">
                                    <ReactionIcon source={require('../../assets/images/love-icon.svg')}/>
                                    <ReactionIcon source={require('../../assets/images/like-icon.svg')} overlap/>
                                    <ReactionIcon source={require('../../assets/images/care-icon.svg')} overlap/>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Comments Section */}
                    <View className="w-full relative mb-[38px]">
                        <View className="relative w-full h-[1px] bg-gray-200 mb-[32px]"/>
                        <Comment/>
                    </View>
                </View>
            </View>
        </View>
    );
};

const PostFeed: React.FC = () => {
    return (
        <View className="flex flex-col w-[94%] max-w-[1600px] items-center gap-[50px] mx-auto mt-[5vh] relative">
            <PostCard/>
        </View>
    );
};

const styles = StyleSheet.create({
    reactionIcon: {
        shadowColor: 'rgba(120, 120, 120, 0.5)',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
    }
});

export default PostFeed; 