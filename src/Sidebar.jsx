import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import logo from './logo.svg';
import { links } from './data';

const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useGlobalContext();

	return (
		<aside className={isSidebarOpen ? 'sidebar' : 'sidebar'}>
			<div className='sidebar-header'>
				<img src={logo} alt='logo' className='logo' />
				<button className='close-btn' onClick={closeSidebar}>
					<FaTimes />
				</button>
			</div>
			<ul className='links'>
				{links.map((link) => (
					<li key={link.id}>
						<a href={link.url}>{link.text}</a>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Sidebar;
