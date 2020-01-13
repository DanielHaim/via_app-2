import React from "react"
import styled from "styled-components"
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { driversByName as driversByNameSelector } from "../store/selectors"
import { DriverCard } from "../components"

const gutter = 10;
const driverCardWith = 150;
const paddingCard = 16;
const numCardPerRow = 4;

const ContainerGrid = styled.div`
    padding-top: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: -${gutter}px;
    margin-bottom: -${gutter}px;
    ${({theme: {breakpoints}}) =>`
        @media ${breakpoints.xs} { margin: 0 12%;}
        @media ${breakpoints.laptopXL} { margin: 0 24%; }
    `}
`

const Cell = styled.div`
    min-width: ${driverCardWith}px;
    max-width: ${1.5*driverCardWith}px;
    flex: 1 0 calc(${100/numCardPerRow}% - ${gutter + 2*paddingCard}px);
    margin-bottom: ${gutter}px;
    margin-left: ${gutter}px;
    padding: 16px;
    background-color: white;
    border-radius: 5px;
`

export const DriversGrid = () => {    
    const history = useHistory();
    const driversByName = useSelector(driversByNameSelector);

    console.log("grid rendered")
    return (
        <ContainerGrid>
            {
                driversByName.map((driver, index) => 
                    <Cell key={`driver-${index}`} onClick={() => history.push(`/Driver/${index}`)}>
                        <DriverCard driver={driver} />
                    </Cell>
                )
            }
            {   /*https://dev.to/stel/a-little-trick-to-left-align-items-in-last-row-with-flexbox-230l*/
                [...Array(numCardPerRow - 1)].map((el, index) => 
                    <Cell key={`driver-hidden-${index}`} style={{visibility: 'hidden'}}/>
                )
            }
        </ContainerGrid>   
    )
}