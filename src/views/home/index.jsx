import { Layout, Menu } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const { Header, Sider, Content } = Layout


const Home = () => {
	const [openKeys, setOpenKeys] = useState([])
	const onOpenChange = (openKeys) => {
		if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys)
		const latestOpenKey = openKeys[openKeys.length - 1]
		if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys)
		setOpenKeys([latestOpenKey])
	}
	const navigate = useNavigate()
	const clickMenu = ({ key }) => {
		navigate(key)
	}
	const items = [
		{
			label: '首页',
			key: 'home'
		}
	]
	return (
		<div className="home">
			<Layout>
				<Header
					style={{
						background: '#eee'
					}}>
						Funny React
					</Header>
				<Layout>
					<Sider
						width={200}
						style={{
							background: '#eee',
						}}>
						<Menu
							mode="inline"
							theme="light"
							items={items}
							openKeys={openKeys}
							onClick={clickMenu}
							onOpenChange={onOpenChange}
						/>
					</Sider>
					<Content>Content</Content>
				</Layout>
			</Layout>
		</div>
	)
}

export default Home
