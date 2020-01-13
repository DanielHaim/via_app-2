import React from "react"
import styled, {keyframes} from "styled-components"
import StarRatings from 'react-star-ratings';
import { formatPhoneNumber, formatEmail, formatDriverTypeUrl } from "../utils/helpers"

const transitionTime = 0.5;
const overflowAnimation1 = keyframes`from, to { overflow: visible; }`
const overflowAnimation2 = keyframes`from, to { overflow: hidden; }`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    :hover { cursor: url(${require('../../assets/svg/cursor_black.svg')}), auto; }
` 

// https://stackoverflow.com/questions/51623203/how-to-maintain-responsive-image-aspect-ratio
const ProfileWrapper = styled.div`
    height: 0;
    position: relative;
    padding-bottom: 100%;
`

const Profile = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;	  
    top: 0;	
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
    background-size:cover;
    background-repeat: no-repeat;
`

const DescriptionWrapper = styled.div`
    position: relative;
    padding-top: 30px;
    background: white;
    display: flex;
    top: 0px;
    flex-direction: column;
    transition: top ${transitionTime}s linear;
    ${Wrapper}:hover & { top: -34px; }
`

const DriverType = styled.img`
    position: absolute;
    transform: translate(-50%,-50%);
    top: 0%;
    left: 30px;
`

// https://css-tricks.com/restart-css-animation/
const Description = styled.div`
    height: 40px;
    ${Wrapper}:active &{ animation: ${overflowAnimation2} ${transitionTime}s infinite; animation-delay: 0.5s; }
    ${Wrapper}:hover  &{ animation: ${overflowAnimation1} ${transitionTime}s infinite; }
`

// https://css-tricks.com/different-transitions-for-hover-on-hover-off/
const HoverDisplay = styled.div`
    display: flex;
    color: darkgrey;
    padding: 2px 0px;
    opacity: 0;
    font-size: 11px;
    transition: opacity ${transitionTime - 0.1}s ease-in-out;
    ${Wrapper}:hover &{
        transition: opacity ${2*transitionTime}s ease-in-out;
        opacity: 1;
    }
`

const RankWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 2px;
`

const RankDescr = styled.div`
    font-size: 8px;
    font-weight: bold;
    padding-left: 2px;
`

const FullName = styled.div`
    color: darkgray;
    font-size: 17px;
    font-weight: bold;
    padding-bottom: 5px;
`

const TextOverflow = styled.div`
    padding-left: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const DriverPicture = ({profile_image}) => {
    const anonymousImage = "https://www.stratelio.net/img/front_v2/03_experts/02_nos_experts/user-icon.png";
    const local_image = require("../../assets/images/photo-via.jpg");

    return(
        <ProfileWrapper>
            <Profile imageUrl={profile_image === "local" ? local_image : (profile_image  || anonymousImage) } />
        </ProfileWrapper>
    )
}

const DriverRank = ({rankNum}) => {
    return (
        <RankWrapper>
            <StarRatings
                rating={Number(rankNum)}
                starRatedColor="#23b4eb"
                numberOfStars={5}
                starDimension={"13px"}
                starSpacing={"1px"}
            />
            <RankDescr>{`(${rankNum})`}</RankDescr>
        </RankWrapper>
    )
} 

const PhoneNumber = ({phoneNum}) => {
    const formattedPhoneNum = formatPhoneNumber(phoneNum);
    return (
        <HoverDisplay >
            Phone Number: <TextOverflow>{formattedPhoneNum}</TextOverflow>
        </HoverDisplay>
    )
} 


const Email = ({email}) => {
    const formattedEmail = formatEmail(email);
    return (
        <HoverDisplay>
            Email: <TextOverflow>{formattedEmail}</TextOverflow>
        </HoverDisplay>
    )
}

export const DriverCard = ({driver: {profile_image, driverType, name, driverRank, phone, email}} ) => {
    const driverTypeUrl = formatDriverTypeUrl(driverType);
    return (
        <Wrapper>
            <DriverPicture profile_image={profile_image} driverType={driverType}/>
            <DescriptionWrapper>
                <DriverType src={driverTypeUrl}/>
                <Description>
                    <FullName>{name}</FullName>
                    <DriverRank rankNum={Number(driverRank)} />
                    <PhoneNumber phoneNum={phone} />
                    <Email email={email} />
                </Description>
            </DescriptionWrapper>
        </Wrapper>
    )
}
