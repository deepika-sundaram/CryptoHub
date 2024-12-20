import React from 'react';
import icon from '../assets/icon.png';

 import {Link} from 'react-router-dom';
import {Button, Menu, Typography, Avatar} from 'antd';
 import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons';


const NavBar=()=>
{
return(
    <div className='nav-container'>
  
    <div className="logo-container">
        <Avatar src={icon} size="large"/>
        <Typography.Title level={2} className="logo">
            <Link to="/home">CryptoHub</Link>
        </Typography.Title> 
        </div> 
        <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined/>}>
                <Link to="/home">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined/>}>
                <Link to="/cryptocurrencies">CryptoCurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined/>}>
                <Link to="/exchanges">Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
                <Link to="/news">News</Link>
            </Menu.Item>
        </Menu>

    </div>

    )

}

export default NavBar;