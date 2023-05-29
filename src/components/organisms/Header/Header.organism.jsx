import { HeaderGreetingText, HeaderSearchInput } from "@/components/atoms";
import { HeaderNotificationDropdown, HeaderToggleButton } from "@/components/molecules";

const Header = ({ toggleSidebar, isOpen }) => {
    return (
        <div className='navbar sticky top-0 z-40 bg-white text-black flex justify-between items-center h-[104px] shadow'>
            {/* Toggle Button */}
            <HeaderToggleButton onClick={toggleSidebar} isOpen={isOpen} />

            {/* Item Header */}
            <HeaderSearchInput />

            <div className='flex-none gap-2'>
                <HeaderNotificationDropdown />
                <HeaderGreetingText />
            </div>
        </div>
    );
};

export default Header;