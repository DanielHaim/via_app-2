import React from "react"
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from "./theme"
import { Layout, DriversGrid } from "./containers"

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <Switch>
                    <Route path="/Driver/:id" component={() => <div>daniel haim</div>} />
                    <Route path="/" component={DriversGrid} />
                </Switch>
            </Layout>
        </ThemeProvider>
    );
}