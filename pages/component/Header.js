import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from "next/image";
import Food from "../../styles/image/utensils-solid-white.svg";

// 2. 헤더에는 프로젝트이름(`AWESOME FOOD STORE`)과 메뉴(`ABOUT`+`STORE`) 표현
const Header = () => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar disableGutters>
                    <Typography
                        variant="h3"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 10,
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Image src={Food} alt="awesome food logo" width={35} height={40}/>&nbsp;
                        AWESOME FOOD STORE
                    </Typography>&nbsp;
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="http://localhost:3000/component/Store"
                        sx={{
                            mr: 2,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        STORE
                    </Typography>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="http://localhost:3000/component/About"
                        sx={{
                            mr: 2,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ABOUT
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
