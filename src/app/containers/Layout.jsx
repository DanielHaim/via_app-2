import React, {Fragment} from "react"
import styled from "styled-components"
import { Header } from "../components"

const headerHeight = 70;

// // https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size
const Content = styled.div`
    margin-top: ${headerHeight}px;
    display: flex;
    justify-content: center;
    > *:first-child {
        min-width: 0;
    }
`

export const Layout = ({children}) => {
    return (
        <Fragment>
            <Header height={headerHeight}/>
            <Content>
                {children}
            </Content>
        </Fragment>
    )
}