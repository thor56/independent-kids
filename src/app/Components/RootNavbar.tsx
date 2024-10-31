import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import FormDemo from "./RegisterForm/RegisterForm";
import * as Popover from "@radix-ui/react-popover";
import { ChevronDownIcon } from "@radix-ui/react-icons";


const RootNavbar = () => {

    return (
        <NavigationMenu.Root className="flex justify-center border border-red-500">
            <NavigationMenu.List className="flex gap-x-4 p-1">
                <NavigationMenu.Item className="position: relative">
                    <NavigationMenu.Trigger className="rounded">
                        About Us
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="position: absolute w-[200px] top-full py-5 rounded">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <Popover.Root>                    
                    <Popover.Trigger className="rounded">
                        Register
                    </Popover.Trigger>             
                    <Popover.Content 
                        className="border rounded-md p-10 mt-2"
                        align="center" 
                        sideOffset={5}
                    >
                        <FormDemo />
                        <Popover.Close 
                            className="mt-3 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                            aria-label="Close"
                        >
                            Close
                        </Popover.Close>
                    </Popover.Content>
                </Popover.Root>
                <NavigationMenu.Item className="position: relative">
                    <NavigationMenu.Trigger className="rounded">
                        Sign In
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="position: absolute top-full py-5 rounded">
                        Here is the Login
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    )

}

export default RootNavbar