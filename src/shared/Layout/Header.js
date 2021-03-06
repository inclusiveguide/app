import logo       from 'assets/logo.svg'
import PropTypes  from 'prop-types'
import React      from 'react'
import Div        from 'shared/Basic/Div'
import Img        from 'shared/Basic/Img'
import LinkSwitch from 'shared/Basic/LinkSwitch'
import HeaderMenu from 'shared/Menus/HeaderMenu'
import {
    headerInnerStyle,
    headerLogoLinkStyle,
    headerLogoWrapperStyle,
    headerNowPlayingStyle,
    headerStyle
}                 from './styles/header'

const Header = ({theme}) => {
    return (
        <Div as="header" theme={{...headerStyle, ...theme}}>
            <Div theme={headerInnerStyle}>
                <Div theme={headerNowPlayingStyle}>
                    <Div theme={headerLogoWrapperStyle}>
                        <LinkSwitch url="/" theme={headerLogoLinkStyle}>
                            <Img src={logo}/>
                        </LinkSwitch>
                    </Div>
                </Div>
                <HeaderMenu/>
            </Div>
        </Div>
    )
}

Header.defaultProps = {
    theme: {},
}

Header.propTypes = {
    theme: PropTypes.object,
}

export default Header